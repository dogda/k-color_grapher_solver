function Variable(name, domain){
  this.name = name;
  this.domain = domain;


}

function DiffConstraint(name, scope){
  this.name = name;
  this.scope = scope;
}

function CSP(name, variables, constraints){
  this.name = name;
  this.variables = variables;
  this.constraints = constraints;
}

function createCSP(file){
  parser = new DOMParser();
  xmlDoc = parser.parseFromString(file,"text/xml");

  console.log("Temp");

  docVariables = xmlDoc;


}

createCSP("ColK4-conflicts.xml");
