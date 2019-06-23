/*
* CSP Solver: CLI Driver for solver
* Updated: 4/27/18
* By Kaleb Gaar
*/

var Search = require('./search.js')
var XML = require('./xmltoCSP.js')
// var Network = require('./network.js')

var file = ''
var heuristic = 'lex'
var algorithm = 'backTrack'

if (typeof process.argv[2] !== 'undefined') {
  file = process.argv[2]
  if (typeof process.argv[3] !== 'undefined') {
    heuristic = process.argv[3]
  }
  XML.createCSPFromFile(file,
    function (csp) {
      var bt = new Search.Backtrack(csp, heuristic, algorithm)
      bt.runTestCSV()
      // console.log(JSON.stringify(Network.cspToNetwork(csp)))
    }
  )
}
