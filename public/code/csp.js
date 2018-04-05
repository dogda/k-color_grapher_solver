module.exports = {
  createCSP: createCSP
}

var xml2js = require('xml2js');
var fs = require('fs');

function Variable(name, domain){
  this.name = name;

  //Need better domain
  this.domain = domain;
  console.log(name);

  this.toString = function(){
    var result = "Name: "+ this.name + ", Domain: ";
    for(var i = 0; i < this.domain.length; i++){
      result = result + this.domain[i];
      if(i != this.domain.length - 1) {
        result = result + ", ";
      }
    }
    return result;
  }
}

function DiffConstraint(name, scope){
  this.name = name;
  this.scope = scope;

  this.inScope = function(variableName){
    if(scope[0] == variableName || scope[1] == variableName){
      return true;
    } else {
      return false;
    }
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
    })

    if(typeof edge != 'undefined'){
      return true;
    } else {
      return false;
    }
  }
}

function createCSP(file){

  var parser = xml2js.Parser();

  var variables = []
  var constraints = []

  fs.readFile(file, function(err, data){
    parser.parseString(data, function(err,result){
      console.log(result.instance.variables[0].variable);

      for(var i = 0; i < result.instance.variables[0].variable.length; i++){
        var domain = [1,2,3];
        variables[i] = new Variable(result.instance.variables[0].variable[i]['$'].name, domain);
        console.log(variables[i].toString());
      }
    })
  })

}

createCSP("./testProblems/ColK4-conflicts.xml");
