//Objetos = JSON (Javascript Object Notation)
//Estructura que guarda datos utilizando {key: value}
let perfil = {
  apellidos: "Garay Mendoza",
  nombres: "Steffano",
  edad: 19,
  telefonos: ["999888777", "666555444", "333222111"],
  formacion: [
    { nivel: "Primaria", nombre: "Santa Maria", anio: 2001},
    { nivel: "Secundaria", nombre: "Pardo", anio: 2007},
    { nivel: "Superior", nombre: "SENATI", anio: 2010}
  ],
  habilidades: [
    { skill: "Base de datos", herramientas: ["MySQL", "Oracle", "SQLite"]},
    { skill: "Lenguajes programación", herramientas: ["Javascript", "PHP", "Java", "C#", "Python"]},
    { skill: "Sistemas operativos", herramientas: ["Windows", "Linux", "Android"]}
]
}

//Habilidades en programación
console.log(perfil.habilidades[1].herramientas)

//¿Cuál es el nombre del centro de formación secundaria?
console.log(perfil.formacion[1].nombre)

//¿Cuántos teléfonos tiene la persona?
console.log(perfil.telefonos.length)

//Mostrar cada uno de los motores de Base de datos
const lista = perfil.habilidades[0].herramientas
lista.forEach(element => {
  console.log(element)
});