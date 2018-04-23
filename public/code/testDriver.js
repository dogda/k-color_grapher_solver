var CSPUTILS = require('./csp.js')
var Search = require('./search.js')
var XML = require('./xmltoCSP.js')
var Network = require('./network.js')

var file = process.argv[2]

XML.createCSPFromFile(file,
  function (csp) {
    var btLex = new Search.Backtrack(csp, 'lex')
    btLex.runPerformanceTest()
    var btDeg = new Search.Backtrack(csp, 'deg')
    btDeg.runPerformanceTest()
    var btWDeg = new Search.Backtrack(csp, 'wDeg')
    btWDeg.runPerformanceTest()
    var btBlz = new Search.Backtrack(csp, 'blz')
    //console.log(btBlz.variables)
    btBlz.runPerformanceTest()
  }
)
