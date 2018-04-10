const CSPUTILS = require("./csp.js");

function clone(obj) {
  var copy;
  if (null == obj || "object" != typeof obj) return obj;
  if (obj instanceof Array) {
    copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }

  if (obj instanceof Object) {
    copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
  }
  throw new Error("This type isn't supported");
}

CSPUTILS.createCSPFromFile("./testProblems/ColAustralia-conflicts.xml", function(cspTemp){
  function Backtrack(csp){
    this.consistent = true;
    this.checking = false;
    this.status = "unknown";
    this.index = 1;
    this.variables = [];

    for(var i = 0; i < csp.variables.length + 1; i++){
      if(i != 0){
        this.variables[i] = csp.variables[i-1];
      } else {
        this.variables[i] = undefined;
      }
    }

    this.path = new Array(this.variables.length);

    this.unlabel = function(i){
      var h = i-1;
      this.variables[i].currentDomain = this.variables[i].originalDomain.clone();
      this.variables[h].currentDomain.remove(this.path[h]);
      this.consistent = this.variables[h].currentDomain.length != 0;
      return h;
    };

    this.selectVariable = function(){
      //Graphically select
      this.checking = true;
    };

    this.check = function() {
      var _this = this;

      _this.consistent = true;

      _this.path[this.index] = this.variables[this.index].currentDomain.values[0];

      for (var h = 1; h < this.index && _this.consistent; h++) {
        if (csp.hasEdge(_this.variables[this.index], _this.variables[h]) && _this.path[this.index] == _this.path[h]) {
          _this.variables[this.index].currentDomain.remove(_this.path[this.index]);
          _this.consistent = false;
        }
      }

      if (this.consistent) {
        this.index = this.index + 1;
        this.checking = false;
      } else if (this.variables[this.index].currentDomain.values.length == 0) {
        this.checking = false;
      }
    };

    this.next = function(){
      if(this.status == "unknown"){
        if(!this.checking) {
          if (this.index > this.variables.length - 1) {
            this.status = "solved";
          } else if (this.index == 0) {
            this.status = "impossible";
          } else {
            if(this.consistent){
              this.selectVariable();
            } else {
              this.index = this.unlabel(this.index);
              //this.selectVariable();
            }
          }
        } else {
          this.check();
        }
      }
      console.log(this.path);
    }
  }

  var bt = new Backtrack(cspTemp);
  var m = 0;
  while(bt.status == "unknown" || m < 10){
    bt.next();
    m++;
  }
});
