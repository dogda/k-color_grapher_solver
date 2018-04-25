module.exports = {
  CSP: CSP,
  Domain: Domain,
  Variable: Variable,
  DiffConstraint: DiffConstraint
}

function Variable (name, domain) {
  this.name = name

  this.originalDomain = domain
  this.currentDomain = this.originalDomain.clone()

  this.toString = function () {
    var result = 'Name: ' + this.name + ', Domain: '
    for (var i = 0; i < this.currentDomain.values.length; i++) {
      result = result + this.currentDomain.values[i]
      if (i !== this.currentDomain.values.length - 1) {
        result = result + ', '
      }
    }
    return result
  }
}

function Domain (name, values) {
  this.name = name
  this.values = values

  this.clone = function () {
    return new Domain(this.name, this.values)
  }

  this.remove = function (value) {
    var result = []
    var count = 0

    for (var i = 0; i < this.values.length; i++) {
      if (this.values[i] !== value) {
        result[count] = this.values[i]
        count++
      }
    }

    this.values = result
  }
}

// Theses are binary constraints
function DiffConstraint (name, scope) {
  this.name = name
  this.scope = scope

  this.inScope = function (variableName) {
    return (scope[0] === variableName || scope[1] === variableName)
  }

  this.toString = function () {
    return 'Name: ' + this.name + ', Scope: ' + this.scope[0] + ', ' + this.scope[1]
  }
}

function CSP (name, variables, constraints) {
  this.name = name
  this.variables = variables
  this.constraints = constraints

  this.getNeighbors = function (variable) {
    var result = []
    this.constraints.forEach(function (c) {
      if (c.scope[0] === variable.name) {
        result.push(c.scope[1])
      } else if (c.scope[1] === variable.name) {
        result.push(c.scope[0])
      }
    })
    return result
  }

  this.hasEdge = function (a, b) {
    var edge = this.constraints.find(function (e) {
      return (e.inScope(a.name) && e.inScope(b.name))
    })
    return typeof edge !== 'undefined'
  }

  this.getEdge = function (a, b) {
    var edge = this.constraints.find(function (e) {
      return (e.inScope(a.name) && e.inScope(b.name))
    })
    return edge
  }

  this.getNetwork = function () {
    var network = {}

    var nodes = []
    for (var i = 0; i < this.variables.length; i++) {
      nodes[i] = {
        id: this.variables[i].name
      }
    }
    var links = []
    for (i = 0; i < this.constraints.length; i++) {
      links[i] = {
        id: this.constraints[i].name,
        sid: this.constraints[i].scope[0],
        tid: this.constraints[i].scope[1]
      }
    }

    network.nodes = nodes
    network.links = links
    return network
  }
}
