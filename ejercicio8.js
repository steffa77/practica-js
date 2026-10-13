const alimentos = [
  ["manzana", "pera", "mango", "sandia", "melón"],
  ["lechuga", "coliflor", "espárrago"],
  ["pescado", "cerdo"],
  ["arroz", "cereal", "avena", "maiz", "trigo", "centeno", "cebada"]
]

//¿Cuántos elementos tiene la matriz?
console.log("Total elementos matriz:", alimentos.length)

//¿Cuál es el array de la matriz que tiene más datos?
let mayor = 0
alimentos.forEach(categoriaAlimentos => {
  if (categoriaAlimentos.length > mayor){
    mayor = categoriaAlimentos.length
  }
})
console.log("Array más grande contiene:",mayor)

//¿Cuál es el array de la matriz que tiene menos datos?
let menor = 100
alimentos.forEach(categoriaAlimentos => {
  if (categoriaAlimentos.length < menor){
    menor = categoriaAlimentos.length
  }
})
console.log("Array más pequeño contiene:", menor) 

//¿Cuántos elementos en total tiene la matriz? considerando todos los arreglos
let sumatoria = 0
alimentos.forEach(categoriaAlimentos => {
  sumatoria += categoriaAlimentos.length
});
console.log("En total tenemos:", sumatoria, "alimentos")

