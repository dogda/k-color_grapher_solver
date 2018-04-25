var Search = require('./search.js')
var XML = require('./xmltoCSP.js')
// var Network = require('./network.js')

var file = process.argv[2]

XML.createCSPFromFile(file,
  function (csp) {
    var btLex = new Search.Backtrack(csp, 'lex')
    btLex.runTestCSV()
    var btDeg = new Search.Backtrack(csp, 'deg')
    btDeg.runTestCSV()
    var btWDeg = new Search.Backtrack(csp, 'wDeg')
    btWDeg.runTestCSV()
    var btBlz = new Search.Backtrack(csp, 'blz')
    btBlz.runTestCSV()
    // console.log(JSON.stringify(Network.cspToNetwork(csp)))
  }
)
