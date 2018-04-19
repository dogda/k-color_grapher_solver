module.exports = {
  createCSPFromFile: createCSPFromFile
}

var CSPUTILS = require('./csp.js')
var fs = require('fs')
var xml2js = require('xml2js')
// var $ = require('jquery')

function createCSPFromFile (file, callback) {
  fs.readFile(file, function (err, data) {
    if (err) {
      throw err
    }
    createCSPFromXML(data, callback)
  })
}

function createCSPFromXML (XMLString, callback) {
  var parser = xml2js.Parser()

  var variables = []
  var constraints = []

  parser.parseString(XMLString, function (err, result) {
    if (err) {
      throw err
    }

    for (var i = 0; i < result.instance.variables[0].variable.length; i++) {
      var domName = result.instance.variables[0].variable[i]['$'].domain

      // Realize that this is not a perfect solution
      var range = result.instance.domains[0].domain.find(function (e) {
        return e['$'].name === domName
      })['_'].split('..')

      var values = []

      for (var j = 0; j < parseInt(range[1]); j++) {
        values[j] = parseInt(range[0]) + j
      }

      var domain = new CSPUTILS.Domain(domName, values)
      variables[i] = new CSPUTILS.Variable(result.instance.variables[0].variable[i]['$'].name, domain)
    }

    for (i = 0; i < result.instance.constraints[0].constraint.length; i++) {
      var scope = result.instance.constraints[0].constraint[i]['$'].scope.split(' ')
      constraints[i] = new CSPUTILS.DiffConstraint(result.instance.constraints[0].constraint[i]['$'].name, scope)
    }

    callback(new CSPUTILS.CSP(result.instance.presentation[0]['$'].name, variables, constraints))
  })
}

/* createCSPFromFile("./public/testProblems/ColAustralia-conflicts.xml", function(csp){
  console.log(getNetwork(csp));
}); */
