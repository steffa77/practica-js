let edades = [58, 25, 19, 35, 33, 32, 26, 24, 52, 23, 55, 45, 20, 19, 23];

//Más alto, más bajo, promedio
let mayor = 0, menor = edades[0], promedio = 0

edades.forEach(edad => {
  if (edad > mayor) mayor = edad
  if (edad < menor) menor = edad
  promedio += edad
});

promedio = (promedio / edades.length).toFixed(2)

console.log("Total de edades:", edades.length)
console.log("La mayor edad:", mayor)
console.log("La menor edad:", menor)
console.log("El promedio:", promedio)