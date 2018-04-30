/*
* CSP Solver: Tools to convert CSPs to networks
* Updated: 4/27/18
* By Kaleb Gaar
*/

module.exports = {
  cspToNetwork: cspToNetwork,
  networkToCsp: networkToCsp
}

var CSPUTILS = require('../code/CSPUTILS.js')

/*
* Note: These functions assumes all variables have the same domain.
*/
function cspToNetwork (csp) {
  var network = {}
  var nodes = []
  var links = []

  for (var i = 0; i < csp.variables.length; i++) {
    nodes[i] = {
      id: csp.variables[i].name,
      _color: 'gray'
    }
  }

  for (i = 0; i < csp.constraints.length; i++) {
    links[i] = {
      id: csp.constraints[i].name,
      sid: csp.constraints[i].scope[0],
      tid: csp.constraints[i].scope[1],
      _color: 'slategray'
    }
  }

  network.domainValues = csp.variables[0].originalDomain.values
  network.name = csp.name
  network.nodes = nodes
  network.links = links

  return network
}

function networkToCsp (network) {
  var variables = []
  var constraints = []

  for (var i = 0; i < network.nodes.length; i++) {
    variables[i] = new CSPUTILS.Variable(network.nodes[i].id, new CSPUTILS.Domain('CSP Domain', network.domainValues))
  }

  for (i = 0; i < network.links.length; i++) {
    var link = network.links[i]
    constraints[i] = new CSPUTILS.DiffConstraint(link.id, [link.sid, link.tid])
  }

  var csp = new CSPUTILS.CSP(network.name, variables, constraints)

  return csp
}
