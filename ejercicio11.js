const persona = {
  apellidos: "Garay Mendoza",
  nombres: "Steffano",
  hablar: function() { return "Hola que tal"},
  locacion: {
    departamento: "Ica",
    provincia: "Chincha",
    distrito: "El Carmen",
    direccion: "Calle flores",
    mostrar: function() {
      return `${this.departamento} - ${this.provincia} - ${this.distrito} - ${this.direccion}`
    }
  }
}

console.log(persona.hablar())
console.log(persona.locacion["departamento"])
console.log(persona.locacion.mostrar())