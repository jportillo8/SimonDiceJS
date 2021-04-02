const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'


const opts = { crossDomain: true }


function obternerPersonaje (id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
    .get( url , opts, function(data){
      resolve(data)
    })
    .fail(() => reject(id))

  })
}

function onError(id){
  console.log(`Sucedio un Error al obtener el personaje ${id}`);
}

var ids = [1,2,3,4,5,6,7]
// var promesas = ids.map(function(id){
//   return obternerPersonaje(id)
// })
var promesas = ids.map((id) => obternerPersonaje(id))
Promise
.all(promesas)
.then(personajes => console.log(personajes))
.catch(onError)

// obternerPersonaje(1)
//   .then((personaje) => {
//     console.log(`El personaje 1 es ${personaje.name}`)
//     return obternerPersonaje(2)
//   })
//   .then(personaje =>{
//     console.log(`El personaje 2 es ${personaje.name}`)
//     return obternerPersonaje(3)
//   })
//   .then(personaje =>{
//     console.log(`El personaje 3 es ${personaje.name}`)
//     return obternerPersonaje(4)
//   })
//   .then(personaje =>{
//     console.log(`El personaje 4 es ${personaje.name}`)
//   })
//   .catch(onError)
//obternerPersonaje(5)
//No se garantiza el orden de los pedidos, es decir llegan en desorden
