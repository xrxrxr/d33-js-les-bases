var n = prompt("De quel nombre veut tu calculer la factorielle ?");
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(n) );
console.log( factorial(n) );
