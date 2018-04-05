module.exports = {
  createCSPFromFile: createCSPFromFile
};

var xml2js = require('xml2js');
var fs = require('fs');

function Variable(name, domain){
  this.name = name;

  this.originalDomain = domain;
  this.currentDomain = this.originalDomain.clone();

  this.toString = function(){
    var result = "Name: "+ this.name + ", Domain: ";
    for(var i = 0; i < this.currentDomain.values.length; i++){
      result = result + this.currentDomain.values[i];
      if(i != this.currentDomain.values.length - 1) {
        result = result + ", ";
      }
    }
    return result;
  }
}

function Domain(name, values){
  this.name = name;
  this.values = values;

  this.clone = function(){
    return JSON.parse(JSON.stringify(this));
  };

  this.remove = function(value){
    var result = [];
    var count = 0;

    for(var i = 0; i < this.values.length; i++){
      if(this.values[i] != value){
        result[count] = this.values[i];
        count++;
      }
    }

    return result;
  };
}

function DiffConstraint(name, scope){
  this.name = name;
  this.scope = scope;

  this.inScope = function(variableName) {
    return (scope[0] == variableName || scope[1] == variableName);
  };

  this.toString = function() {
    return "Name: " + this.name + ", Scope: " + this.scope[0] + ", " + this.scope[1];
  }
}

function CSP(name, variables, constraints){
  this.name = name;
  this.variables = variables;
  this.constraints = constraints;

  this.hasEdge = function(a, b){
    if(a > this.variables.length || b > this.variables.length){
      return false;
    }

    var edge = this.constraints.find(function(e){
      return (e.inScope(a) && e.inScope(b));
    });

    return typeof edge != 'undefined';
  }
}

function createCSPFromFile(file){

  var parser = xml2js.Parser();

  var variables = [];
  var constraints = [];

  fs.readFile(file, function(err, data){
    parser.parseString(data, function(err,result){

      for(var i = 0; i < result.instance.variables[0].variable.length; i++){
        //Make Actual Domain
        var domain = new Domain("Temp",[1,2,3]);
        variables[i] = new Variable(result.instance.variables[0].variable[i]['$'].name, domain);
        console.log(variables[i].toString());
      }

      for(var i = 0; i < result.instance.constraints[0].constraint.length; i++){
        var scope = result.instance.constraints[0].constraint[i]['$'].scope.split(" ");
        constraints[i] = new DiffConstraint(result.instance.constraints[0].constraint[i]['$'].name, scope);
        //console.log(constraints[i].toString());
      }
    })
  })

}

createCSPFromFile("./testProblems/ColK4-conflicts.xml");
