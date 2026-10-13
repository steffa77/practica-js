const peliculas = [
  ["El Conjuro", "El Legado del Diablo", "Un Lugar en Silencio", "Siniestro", "Bárbaro"],
  ["Toy Story", "Frozen", "El rey león", "Shrek", "Mi villano favorito"],
  ["Supercool", "¿Qué pasó ayer?", "La propuesta", "Son como niños", "Una loca película de película"]
]

//Mostrar las 15 peliculas en la consola
peliculas.forEach((generoPeliculas) =>{
  generoPeliculas.forEach(pelicula => {
    console.log(pelicula)
  })
});
