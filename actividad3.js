//Función 1:
//crear una función que reciba un arreglo de números y retorne como resultado
//un objeto indicándonos cuántos valores son pares e impares
//Test, demostración, console.log
function arregloNumero(numeros){
  let pares = 0
  let impares = 0

  for (let n of numeros){
  if (n % 2 == 0){
    pares++;
  }else{
    impares++;
  }
}
return {
  pares: pares,
  impares: impares
}
}

console.log(arregloNumero([2, 5, 8, 3]));

//Función 2:
//escribir una función que retorne true|false dependiendo si el valor de entrada
//corresponde a un número capicúa. 121, 444, 3223. Solo permite analizar valores
//de hasta 5 digitos (99999)

//Test, demostración, console.log

function esCapicua(numero){
  let texto = String(numero);
  
  if(texto.length > 5){
    return false;
  }

  let invertido = texto.split('').reverse().join('');

  if (texto === invertido){
    return true;
  }else{
    return false;
  }
}

console.log(esCapicua(1271));
console.log(esCapicua(1230));
console.log(esCapicua(3223));
console.log(esCapicua(4499));