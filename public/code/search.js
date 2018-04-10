const CSPUTILS = require("./csp.js")

var copy = function(object){
  return JSON.parse(JSON.stringify(object));
}

function Backtrack(csp){
  var consistent = true;
  var status = "unknown";
  var variables = copy(csp.variables);
  var path = [variables.length + 1];

  //console.log("I'm in");

  function label(i){
    this.consistent = false;
    this.variables[i].currentDomain.values.forEach(function(value){
      this.consistent = true;
      for(var h = 1; h < i  && this.consistent; h++){
        if(csp.hasEdge(variables[i], variables[h]) && path[i] == path[h]){
          variables.currentDomain.remove[value];
          this.consistent = false;
        }
      }
    })
    if(this.consistent){
      return i+1;
    } else {
      return i;
    }
  }

  function unlabel(i){
    h = i-1;
    this.variables[i].currentDomain = this.variables[i].originalDomain.clone();
    this.variables[h].currentDomain.remove(this.path[h]);
    this.consistent = this.variables[h].currentDomain.length != 0;
    return h;
  }

  function search(){
    var i = 1;
    var n = this.variables.length

    while(this.status == "unknown"){
      if(this.consistent){
        i = this.label(i)
      } else {
        i = this.unlabel(i)
      }

      if(i > n){
        this.status == solved;
        //Work trough this one
      } else if (i == 0) {
        this.status == impossible;
      }
    }
  }
}

var cspTemp = CSPUTILS.createCSPFromFile("./testProblems/ColK4-conflicts.xml", function(csp){
  //console.log(csp);
  var bt = new Backtrack(csp);
  bt.search();
});
