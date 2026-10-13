const paises = [
  ["Perú", "Colombia", "Chile", "Argentina"],
  ["Italia", "España", "Francia", "Alemania"],
  ["Japón", "China", "Corea del Sur", "Taiwan"],
  ["Egipto", "Nigeria", "Sudáfrica", "Kenia"]
]

//Mostrar los paises de Asia (unicamente) utilizando foreach
paises[2].forEach(pais => {
  console.log(pais)
});

//Agregar 2 paises en la lista de América
paises[0].push("Bolivia")
paises[0].push("Ecuador")

console.log("- - - - - - - - -")

//Mostrar los paises de América
paises[0].forEach(pais => {
  console.log(pais)
});