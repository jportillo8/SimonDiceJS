var juan = {
  name: 'Charizard',
  clase: 'Fuego',
  edad: 30,
  peso: 75
}

console.log(`Al inicio del año ${juan.name} pesa ${juan.peso} kg`)

const VAR_PESO = 0.2

const aumentarPeso = (persona) => persona.peso += VAR_PESO
const reducirPeso = (persona) => persona.peso -= VAR_PESO

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = juan.peso - 3
var dias = 0
while (juan.peso > META) {
  if (comeMucho()) {
    //Aumentar de Peso
    aumentarPeso(juan)
  }
  if (realizaDeporte()) {
    //adelgaza
    reducirPeso(juan)
  }
  dias += 1
}
console.log(`Pasaron ${dias} dias hasta ${juan.name} adelgazo 3kg`)
