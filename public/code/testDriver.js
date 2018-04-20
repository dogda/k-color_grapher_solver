var CSPUTILS = require('./csp.js')
var Search = require('./search.js')
var XML = require('./xmltoCSP.js')
var Network = require('./network.js')

var file = process.argv[2]

XML.createCSPFromFile(file,
  function (csp) {
    var bt = new Search.Backtrack(csp, 'lex')
    // console.log(Network.cspToNetwork(csp))
    bt.runPerformanceTest()
    //console.log(bt.status)
  }
)
