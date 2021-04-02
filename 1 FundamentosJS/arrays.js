var logan = {
  name: 'Logan',
  raza: 'Lobo',
  anos: 2,
  cantLibros: 180
}

var bruno = {
  name: 'Bruno',
  raza: 'Pitbull',
  anos: 10,
  cantLibros: 65
}

var lucas = {
  name: 'Lucas',
  raza: 'ChaoLab',
  anos: 12,
  cantLibros: 7
}

var luna = {
  name: 'Luna',
  raza: 'Chanda',
  anos: 1,
  cantLibros: 45
}

var personas = [
  logan, bruno, lucas, luna
]

const esAdulto = persona => persona.anos >= 9
var adultos = personas.filter(esAdulto)

const pasarAnosADias = (persona) => ({
  ...persona,
  anos: persona.anos * 365
})

// const pasarAnosADias = (persona) => {
//   return {
//     ...persona,
//     anos: persona.anos * 365
//   }
// }
var mascotasDias = personas.map(pasarAnosADias)
console.log(mascotasDias);

// var acum = 0
// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantLibros
// }
const reducer = (acum, {cantLibros}) => acum + cantLibros
var totalLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalLibros}`);
