//Crear una función autoejecutable, que imprime cuántas horas, minutos y segundos
//faltan para terminar el día

(function () {
  let ahora = new Date();

  let horas = 23 - ahora.getHours();
  let minutos = 59 - ahora.getMinutes();
  let segundos = 59 - ahora.getSeconds();

  console.log(
    "Faltan " + horas + " horas, " +
    minutos + " minutos y " +
    segundos + " segundos para terminar el día."
  );
})();
//Crear una función autoejecutable que solicite un número (expresado en segundos) y nos
//devuelvo un saludo, después del tiempo indicado

(function () {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Ingresa la cantidad de segundos: ", function (respuesta) {
    let segundos = Number(respuesta);

    if (respuesta.trim() === "" ||
        !Number.isFinite(segundos) ||
        segundos < 0) {
      console.log("Por favor, ingresa un número válido de segundos.");
      rl.close();
      return;
    }

    console.log("Esperando " + segundos + " segundos...");

    setTimeout(function () {
      console.log("¡Hola! Espero que estés muy bien.");
      rl.close();
    }, segundos * 1000);
  });
})();