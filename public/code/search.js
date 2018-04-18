module.exports = {
  Backtrack: Backtrack
};

const CSPUTILS = require("./csp.js");

var colors = {
  1 : "red",
  2 : "blue",
  3 : "green",
  4 : "yellow"
};

function degree(a,b,csp){
//Need to find
}

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

function Backtrack(csp, heuristic){
  var _this = this;
  this.consistent = true;
  this.checking = false;
  this.status = "unknown";
  this.index = 1;
  this.variables = [];
  this.csp = csp;
  this.brelaz = false;

  if(typeof heuristic != "undefined"){
    this.heuristic = heuristic;
  } else {
    this.heuristic = function(a,b){
      //This compares variables lexiographically
      return (a.name<b.name?-1:(a.name>b.name?1:0));
    }
  }

  this.csp.variables.sort(this.heuristic);

  for(var i = 0; i < this.csp.variables.length + 1; i++){
    if(i != 0){
      this.variables[i] = clone(this.csp.variables[i-1]);
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
      if (this.csp.hasEdge(_this.variables[this.index], _this.variables[h]) && _this.path[this.index] == _this.path[h]) {
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
  };

  this.solve = function(){
    while(this.status == "unknown"){
      this.next();
    }
  };

  this.reset = function(){
    for(var i = 0; i < this.csp.variables.length + 1; i++){
      if(i != 0){
        this.variables[i] = clone(this.csp.variables[i-1]);
      } else {
        this.variables[i] = undefined;
      }
    }
    this.consistent = true;
    this.checking = false;
    this.status = "unknown";
    this.index = 1;
    this.path = new Array(this.variables.length);
  };

  this.getColors = function(){
    var colorsResult = [];
    for(var i = 0; i < _this.csp.variables.length; i++){
      var index = _this.variables.findIndex(function(v){
        if(typeof v != 'undefined'){
          return v.name == _this.csp.variables[i].name;
        } else {
          return false;
        }
      });

      var variableColor = "grey";

      if(typeof _this.path[index] != 'undefined'){
         variableColor = colors[_this.path[index]]
      }

      colorsResult[i] = {
        id: _this.csp.variables[i].name,
        _color: variableColor
      }
    }
    return colorsResult;
  }
}

/*function testCSP(){
  CSPUTILS.createCSPFromFile("./public/testProblems/ColAustralia-conflicts.xml", function(cspTemp){
    var bt = new Backtrack(cspTemp);
    var m = 0;
    while(bt.status == "unknown" || m < 10){
      bt.next();
      m++;
    }
  });
}

testCSP();*/
