var juan = {
  name: 'Juan',
  apellido: 'arges',
  edad: 17,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  drone: true
}

function imprimirProfesion(persona) {
  console.log(`${persona.name} es :`)

  if (persona.ingeniero == true) {
    console.log('ingeniero');
  }else {
    console.log('no es ingeniero');
  }

  if (persona.cocinero == true) {
    console.log('cocinero');
  }

  if (persona.cantante == true) {
    console.log('cantante');
  }

  if (persona.dj == true) {
    console.log('dj');
  }

  if (persona.drone == true) {
    console.log('vuela drones');
  }

}

// Vamos asiganar a una variable una funcion
const MAYOR_EDAD = 18

// function esMayor(persona) {
//   return persona.edad >= MAYOR_EDAD
// }
//const esMayor = persona => persona.edad >= MAYOR_EDAD
//Finalmente seria equivalente
const esMayor = ({edad}) => edad >= MAYOR_EDAD

const permitirAcceso = persona => {
  if (!esMayor(persona)) {
    console.log('Accesso Fail');
  }else {
    console.log('Acceso concedido');
  }
}

const permitirAccesoA = persona => !esMayor(persona) ? console.log('Accesso Fail') : console.log('Acceso concedido')

permitirAccesoA(juan)


function mayordeEdad(persona) {
  if (esMayor(persona)) {
    console.log(`${persona.name} es mayor y su edad es ${persona.edad}`);
  }else {
    console.log(`${persona.name} es menor porque tiene ${persona.edad}`);
  }
}
//imprimirProfesion(juan)
//mayordeEdad(juan)
