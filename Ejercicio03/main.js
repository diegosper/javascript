var varString;
var varNumber;
var varBoolean;
var varNull;
var varUndefined;
var varSymbol;
var varObjeto;
var varLocalOGlobal = "variable global";

varString = "String";
varNumber = 123;
varBoolean = true;
varNull = null;
varSymbol = Symbol("Symbol");
varObjeto = {atributo1: "atributo 1", atributo2: "atributo 2"};

console.log(varObjeto);

console.log("valor de la variable: '" + varString + "'; tipo de dato: " + typeof(varString));
console.log("valor de la variable: '" + varNumber + "'; tipo de dato: " + typeof(varNumber));
console.log("valor de la variable: '" + varBoolean + "'; tipo de dato: " + typeof(varBoolean));
console.log("valor de la variable: '" + varNull + "'; tipo de dato: " + typeof(varNull));
console.log("valor de la variable: '" + varUndefined + "'; tipo de dato: " + typeof(varUndefined));
console.log("valor de la variable: '" + varSymbol.description + "'; tipo de dato: " + typeof(varSymbol));
console.log("valor de la variable: '" + varObjeto.atributo1 + " & " + varObjeto.atributo2 + "'; tipo de dato: " + typeof(varObjeto));

function declararVariableLocal (){
    let varLocalOGlobal = "variable local";
    console.log(varLocalOGlobal);
}

declararVariableLocal();
console.log(varLocalOGlobal);

