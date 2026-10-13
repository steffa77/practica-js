let frutas = ["Manzana", "plátano", "naranja", "fresa", "uva", "limón", "sandía", "mango", "piña", "melocotón"]

//Mostrar la lista invertida (ultimo al primero)
for (let i = (frutas.length - 1); i >= 0; i--){
  //console.log(frutas[i])
}

//Verificar si existe un elemento = "fresa"
let frutaBuscada = "piña"
const resultado = frutas.find(fruta => fruta === frutaBuscada)
const encontrado = frutas.includes(frutaBuscada)
console.log(resultado)