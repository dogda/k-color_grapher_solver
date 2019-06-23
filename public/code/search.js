/*
* CSP Solver: search
* Updated: 4/27/18
* By Kaleb Gaar
*/

module.exports = {
  Backtrack: Backtrack
}

// const CSPUTILS = require('../code/CSPUTILS.js')

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

function Backtrack (csp, heuristic, searchAlgorithm) {
  var _this = this
  _this.csp = csp
  if (typeof searchAlgorithm === 'string') {
    _this.algo = searchAlgorithm
  } else {
    _this.algo = 'backTrack'
  }

  if (typeof heuristic === 'string') {
    _this.heuristic = heuristic
  } else {
    _this.heuristic = 'lex'
  }
  if (_this.heuristic === 'deg' || _this.heuristic === 'wDeg' || _this.heuristic === 'blz') {
    _this.csp.variables.sort(function (a, b) {
      if (_this.csp.getNeighbors(b).length - _this.csp.getNeighbors(a).length !== 0) {
        return _this.csp.getNeighbors(b).length - _this.csp.getNeighbors(a).length
      } else {
        // This compares variables lexiographically
        return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
      }
    })
  } else {
    _this.csp.variables.sort(function (a, b) {
      return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
    })
  }

  _this.reset = function () {
    _this.consistent = true
    _this.checking = false
    _this.status = 'unknown'
    _this.index = 1
    _this.variables = []
    _this.nodesVisited = 0
    _this.constraintsCompared = 0
    _this.backTracks = 0
    for (var i = 0; i < _this.csp.variables.length + 1; i++) {
      if (i !== 0) {
        _this.variables[i] = clone(_this.csp.variables[i - 1])
        _this.variables[i].weight = _this.csp.getNeighbors(_this.variables[i]).length
        _this.variables[i].neighborColors = []
        _this.variables[i].neighbors = []
      } else {
        _this.variables[i] = undefined
      }
    }
    _this.path = new Array(_this.variables.length)
    for (i = 1; i < _this.variables.length; i++) {
      _this.variables[i].currentDomain.values.forEach(function (e) {
        _this.variables[i].neighborColors[e] = 0
      })
      _this.csp.getNeighbors(_this.variables[i]).forEach(function (e) {
        _this.variables[i].neighbors.push(_this.variables.find(
          function (f) {
            if (typeof f !== 'undefined') {
              return f.name === e
            } else {
              return false
            }
          }
        ))
      })
    }
  }

  _this.unlabel = function (i) {
    _this.unlabelNeighbors(_this.variables[i], _this.path[i])
    var h = i - 1
    _this.path[i] = ''
    _this.variables[i].currentDomain = _this.variables[i].originalDomain.clone()
    if (h > 0) {
      _this.unlabelNeighbors(_this.variables[i], _this.path[i])
      _this.variables[h].currentDomain.remove(_this.path[h])
      _this.consistent = _this.variables[h].currentDomain.values.length !== 0
    }
    _this.backTracks++
    return h
  }

  _this.getNextVariable = function () {
    if (_this.heuristic === 'wDeg') {
      // This should split, sort, and recombine the list of variables according to weight
      var first = _this.variables.splice(_this.index + 1, (_this.variables.length - _this.index) - 1)
        .sort(function (a, b) {
          if (b.weight - a.weight !== 0) {
            return b.weight - a.weight
          } else {
            // This compares variables lexiographically
            return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
          }
        })

      var second = _this.variables.splice(0, _this.index + 2)

      _this.variables = second.concat(first)
    } else if (_this.heuristic === 'blz') {
      var firstBlz = _this.variables.splice(_this.index, (_this.variables.length - _this.index))
        .sort(function (a, b) {
          if (_this.getColorSaturation(b) - _this.getColorSaturation(a) !== 0) {
            return _this.getColorSaturation(b) - _this.getColorSaturation(a)
          } else if (b.neighbors.length - a.neighbors.length !== 0) {
            return b.neighbors.length - a.neighbors.length
          } else {
            // This compares variables lexiographically
            return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
          }
        })

      var secondBlz = _this.variables.splice(0, _this.index + 1)
      _this.variables = secondBlz.concat(firstBlz)
    }
  }

  _this.getColorSaturation = function (variable) {
    var count = 0

    variable.neighborColors.forEach(function (e) {
      if (e !== 0) {
        count++
      }
    })

    return count
  }

  _this.labelNeighbors = function (variable, value) {
    // console.log(this.variables)
    variable.neighbors.forEach(function (e) {
      e.neighborColors[value]++
    })
  }

  _this.unlabelNeighbors = function (variable, value) {
    variable.neighbors.forEach(function (e) {
      e.neighborColors[value]++
    })
  }

  _this.label = function () {
    _this.consistent = true

    if (_this.path[_this.index] === '' || typeof _this.path[_this.index] === 'undefined') {
      _this.nodesVisited++
    }

    _this.path[_this.index] = _this.variables[_this.index].currentDomain.values[0]

    _this.labelNeighbors(_this.variables[_this.index], _this.path[_this.index])

    if (_this.algorithm === 'FC') {
      _this.checkWipeout(_this.index)
    }

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
      _this.index = _this.index + 1
      _this.checking = false
    } else {
      _this.unlabelNeighbors(_this.variables[_this.index], _this.path[_this.index])
      if (_this.variables[_this.index].currentDomain.values.length === 0) {
        _this.checking = false
      }
    }
  }

  /* _this.checkWipeout = function (checkFrom) {
    for (var i = checkFrom + 1;)
  } */

  _this.next = function () {
    if (_this.status === 'unknown') {
      if (!_this.checking) {
        if (_this.index > _this.variables.length - 1) {
          _this.status = 'solved'
        } else if (_this.index === 0) {
          _this.status = 'impossible'
        } else {
          if (_this.consistent) {
            if (_this.variables[_this.index].currentDomain.length === _this.variables[_this.index].originalDomain.length) {
              _this.getNextVariable()
            }
            _this.checking = true
            _this.label()
          } else {
            _this.index = _this.unlabel(_this.index)
          }
        }
      } else {
        _this.label()
      }
    }
    // console.log(_this.path)
    // console.log(_this.variables)
  }

  _this.solve = function () {
    var m = 0
    while (_this.status === 'unknown' && m <= 3000000) {
      _this.next()
      m++
    }
  }

  _this.runPerformanceTest = function () {
    _this.reset()
    var t0 = new Date().getTime()
    _this.solve()
    var t1 = new Date().getTime()

    console.log('H: ' + _this.heuristic)
    console.log('time: ' + (t1 - t0) + ' milliseconds')
    console.log('CC: ' + _this.constraintsCompared)
    console.log('NV: ' + _this.nodesVisited)
    console.log('BT: ' + _this.backTracks)
    console.log('Status: ' + _this.status)
    _this.reset()
  }

  _this.runTestCSV = function () {
    _this.reset()
    var t0 = new Date().getTime()
    _this.solve()
    var t1 = new Date().getTime()

    console.log('' + _this.heuristic + ',' + (t1 - t0) + ',' + _this.constraintsCompared + ',' + _this.nodesVisited + ',' + _this.backTracks + ',' + _this.status)

    _this.reset()
  }

  _this.getColors = function () {
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

  _this.reset()
}
