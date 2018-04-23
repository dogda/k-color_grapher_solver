module.exports = {
  Backtrack: Backtrack
}

const CSPUTILS = require('../code/csp.js')

var colors = {
  0: 'yellow',
  1: 'red',
  2: 'blue',
  3: 'green',
  4: 'purple'
}

function clone (obj) {
  var copy
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Array) {
    copy = []
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i])
    }
    return copy
  }

  if (obj instanceof Object) {
    copy = {}
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr])
    }
    return copy
  }
  throw new Error("This type isn't supported")
}

function Backtrack (csp, heuristic) {
  var _this = this
  this.consistent = true
  this.checking = false
  this.status = 'unknown'
  this.index = 1
  this.variables = []
  this.csp = csp
  this.brelaz = false
  this.nodesVisited = 0
  this.constraintsCompared = 0
  this.backTracks = 0

  if (typeof heuristic === 'string') {
    this.heuristic = heuristic
  } else {
    this.heuristic = "lex"
  }

  if (this.heuristic === 'deg' || this.heuristic === 'wDeg' || this.heuristic === 'blz'){
      this.csp.variables.sort(function (a, b) {
        if (_this.csp.getNeighbors(b).length - _this.csp.getNeighbors(a).length !== 0) {
          //console.log(_this.csp.getNeighbors(b).length + ", "+ _this.csp.getNeighbors(a).length + " - " + ( _this.csp.getNeighbors(b).length - _this.csp.getNeighbors(a).length ))
          return _this.csp.getNeighbors(b).length - _this.csp.getNeighbors(a).length
        } else {
          // This compares variables lexiographically
          return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
        }
      })
  } else {
    this.csp.variables.sort(function (a, b) {
      return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
    })
  }


  for (var i = 0; i < this.csp.variables.length + 1; i++) {
    if (i !== 0) {
      this.variables[i] = clone(this.csp.variables[i - 1])
      this.variables[i].weight = this.csp.getNeighbors(this.variables[i]).length
      this.variables[i].neighborColors = new Set()
    } else {
      this.variables[i] = undefined

    }
  }

  this.path = new Array(this.variables.length)

  this.unlabel = function (i) {
    this.unlabelNeighbors(this.variables[i], this.path[i])
    var h = i - 1
    this.path[i] = ''
    this.variables[i].currentDomain = this.variables[i].originalDomain.clone()
    if(h > 0){
      this.unlabelNeighbors(this.variables[i], this.path[i])
      this.variables[h].currentDomain.remove(this.path[h])
      this.consistent = this.variables[h].currentDomain.values.length !== 0
    }
    this.backTracks++
    return h
  }

  this.getNextVariable = function () {
    if (this.heuristic === 'wDeg') {
      // This should split, sort, and recombine the list of variables according to weight
      var first =   this.variables.splice(this.index + 1, (this.variables.length - this.index) - 1)
        .sort(function (a, b) {
          if (b.weight - a.weight !== 0) {
            return b.weight - a.weight
          } else {
            // This compares variables lexiographically
            return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
          }
        })

      var second = this.variables.splice(0,this.index+2)
      // console.log(first)
      // console.log(second)
      this.variables = second.concat(first)
    } else if (this.heuristic === 'blz') {
      var first =   this.variables.splice(this.index, (this.variables.length - this.index))
        .sort(function (a, b) {
          if (b.neighborColors.size - a.neighborColors.size !== 0) {
            return b.neighborColors.size - a.neighborColors.size
          } else if (_this.csp.getNeighbors(b).length - _this.csp.getNeighbors(a).length !== 0) {
            return _this.csp.getNeighbors(b).length - _this.csp.getNeighbors(a).length
          } else {
            // This compares variables lexiographically
            return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
          }
        })

      var second = this.variables.splice(0,this.index+1)
      this.variables = second.concat(first)
    }
  }

  this.labelNeighbors = function(variable, value){
    //console.log(this.variables)
    var neighbors = this.csp.getNeighbors(variable).forEach(function (e) {

      var tempVar = _this.variables.find(function (f) {

        if(typeof f !== 'undefined'){
          return f.name === e
        } else {
          return false
        }
      })

      if(typeof tempVar !== 'undefined'){
        tempVar.neighborColors.add(value)
      }
    })
  }

  this.unlabelNeighbors = function(variable, value){
    var neighbors = this.csp.getNeighbors(variable).forEach(function (e) {
      _this.variables.find(function (f) {
        if(typeof f !== 'undefined'){
          return f.name === e
        } else {
          return false
        }
      }).neighborColors.delete(value)
    })
  }

  this.check = function () {
    var _this = this

    _this.consistent = true

    _this.path[_this.index] = _this.variables[_this.index].currentDomain.values[0]

    _this.nodesVisited++

    for (var h = 1; h < _this.index && _this.consistent; h++) {
      if (_this.csp.hasEdge(_this.variables[_this.index], _this.variables[h]) && _this.path[_this.index] === _this.path[h]) {
        _this.variables[_this.index].currentDomain.remove(_this.path[_this.index])
        _this.consistent = false
        if (_this.variables[_this.index].currentDomain.values.length === 0) {
          _this.variables[_this.index].weight++
          _this.variables[h].weight++
        }
      }
      _this.constraintsCompared++
    }



    if (_this.consistent) {
      _this.labelNeighbors(_this.variables[_this.index], _this.path[_this.index])
      _this.index = _this.index + 1
      _this.checking = false
    } else if (_this.variables[_this.index].currentDomain.values.length === 0) {
      _this.checking = false
    }
  }

  this.next = function () {
    // console.log(this.index)
    if (this.status === 'unknown') {
      if (!this.checking) {
        if (this.index > this.variables.length - 1) {
          this.status = 'solved'
        } else if (this.index === 0) {
          this.status = 'impossible'
        } else {
          if (this.consistent) {
            if(this.variables[this.index].currentDomain.length === this.variables[this.index].originalDomain.length ){
              this.getNextVariable()
            }
            for (var i = 0; i < this.variables.length; i++){
              if(typeof this.variables[i] !== 'undefined'){
                // console.log('   ' + this.variables[i].name)
              } else {
                // console.log('   Empty')
              }
            }
            this.checking = true

            this.check()
          } else {
            this.index = this.unlabel(this.index)
          }
        }
      } else {
        this.check()
      }
    }
      //console.log(this.path)
     // console.log(this.variables)

  }

  this.solve = function () {
    var m = 0
    while (this.status === 'unknown' && m <= 3000000) {
      this.next()
      m++
    }
  }

  this.runPerformanceTest = function () {
    this.reset()
    var t0 = new Date().getTime()
    this.solve()
    var t1 = new Date().getTime()

    console.log('H: ' + this.heuristic)
    console.log('time: ' + (t1 - t0) + ' milliseconds')
    console.log('CC: ' + this.constraintsCompared)
    console.log('NV: ' + this.nodesVisited)
    console.log('BT: ' + this.backTracks)
    console.log('Status: ' + this.status)
    this.reset()
  }

  this.reset = function () {
    this.variables = []

    for (var i = 0; i < this.csp.variables.length + 1; i++) {
      if (i !== 0) {
        this.variables[i] = clone(this.csp.variables[i - 1])
        this.variables[i].weight = this.csp.getNeighbors(this.variables[i]).length
        this.variables[i].neighborColors = new Set()
      } else {
        this.variables[i] = undefined
      }
    }
    this.consistent = true
    this.checking = false
    this.status = 'unknown'
    this.index = 1
    this.nodesVisited = 0
    this.constraintsCompared = 0
    this.backTracks = 0
    this.path = new Array(this.variables.length)
  }

  this.getColors = function () {
    var colorsResult = []
    for (var i = 0; i < _this.csp.variables.length; i++) {
      var index = _this.variables.findIndex(function (v) {
        if (typeof v !== 'undefined') {
          return v.name === _this.csp.variables[i].name
        } else {
          return false
        }
      })

      var variableColor = 'grey'

      if (typeof _this.path[index] !== 'undefined') {
        variableColor = colors[_this.path[index]]
      }

      colorsResult[i] = {
        id: _this.csp.variables[i].name,
        _color: variableColor
      }
    }
    return colorsResult
  }
}
