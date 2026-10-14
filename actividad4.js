//Función 3:
//Crear una función que solicite dos arreglos numéricos, deberá
//retornar la suma de ambos arreglos siempre que tengan el mismo número
//de elementos, de lo contrario, devolver array vacío []

//test...

function sumarArreglos(arreglo1, arreglo2) {
    if (arreglo1.length !== arreglo2.length) {
        return [];
    }

    let resultado = [];

    for (let i = 0; i < arreglo1.length; i++){
        resultado.push(arreglo1[i] + arreglo2[i]);
    }

    return resultado;
}

console.log(sumarArreglos([2, 4, 6], [1, 3, 5]));
console.log(sumarArreglos([2, 4],[1, 3, 5]));

//Función 4
//Crear una función que solicite un número positivo y retorne todos los divisores
//1 hasta el número que hayas indicado. El resultado se obtiene
//como arreglo. Ejemplo: 22 -> [1,2,11,22], ejemplo 40 -> [1,2,4,5,8,10,20,40] 

//test

function obtenerDivisores(numero) {
    let divisores = [];

    if (numero <= 0 || !Number.isInteger(numero)) {
        return divisores;
    }

    for (let i = 1; i <= numero; i++){
        if (numero % i === 0){
            divisores.push(i);
        }
    }

    return divisores;
}

console.log(obtenerDivisores(22));
console.log(obtenerDivisores(40));
console.log(obtenerDivisores(7));
console.log(obtenerDivisores(0));