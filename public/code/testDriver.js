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

for (var i = 0; i < process.argv.length; i++) {
  if (process.argv[i] === '-f' && i + 1 !== process.argv.length) {
    file = process.argv[i + 1]
  } else if (process.argv[i] === '-s' && i + 1 !== process.argv.length) {
    algorithm = process.argv[i + 1]
  } else if (process.argv[i] === '-h' && i + 1 !== process.argv.length) {
    heuristic = process.argv[i + 1]
  }
}

XML.createCSPFromFile(file,
  function (csp) {
    if (typeof process.argv[3] !== 'undefined') {
      var bt = new Search.Backtrack(csp, heuristic, algorithm)
      bt.runTestCSV()
    } else {
      var btLex = new Search.Backtrack(csp, 'lex', algorithm)
      btLex.runTestCSV()
      var btDeg = new Search.Backtrack(csp, 'deg', algorithm)
      btDeg.runTestCSV()
      var btWDeg = new Search.Backtrack(csp, 'wDeg', algorithm)
      btWDeg.runTestCSV()
      var btBlz = new Search.Backtrack(csp, 'blz', algorithm)
      btBlz.runTestCSV()
    }
    // console.log(JSON.stringify(Network.cspToNetwork(csp)))
  }
)
