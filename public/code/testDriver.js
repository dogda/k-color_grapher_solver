var CSPUTILS = require('./csp.js')
var Search = require('./search.js')
var XML = require('./xmltoCSP.js')
var Network = require('./network.js')

var file = process.argv[2]

XML.createCSPFromFile(file,
  function (csp) {
    console.log(Network.cspToNetwork(csp))
    //var bt = new Search.Backtrack(csp)
    //bt.runPerformanceTest()
  }
)
