//Crear un objeto que contenga información computador
//cadenas, enteros, decimales, lógicos,  arreglos, nuevos objetos
const computadora = {
  marca: "HP",
  entero: 4,
  decimales: 2.24,
  logico: false,
  arreglos: ["Placa madre", "Procesador", "Memoria RAM", "SSD", "GPU", "Fuente de poder"],
  objetos: [
    {
      nombre: "Memoria RAM",
      capacidad: 32
    },
    {
      nombre: "Procesador",
      capacidad: 5.0
    },
    {
      nombre: "SSD",
      capacidad: "1 TB"
    }
  ]
}

console.log("Marca:", computadora.marca)
console.log("Entero:", computadora.entero)
console.log("Decimales:", computadora.decimales)
console.log("Lógico:", computadora.logico)
console.log("Componente:", computadora.arreglos[1])
console.log("Nombre del procesador:", computadora.objetos[1].nombre)
console.log("Capacidad del SSD:", computadora.objetos[2].capacidad)