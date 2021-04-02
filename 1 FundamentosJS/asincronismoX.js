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

async function obternerPersonajes(){
  var ids = [1,2,3,4,5,6,7]
  var promesas = ids.map((id) => obternerPersonaje(id))
try {
  var personajes = await Promise.all(promesas)
  console.log(personajes)
} catch (id) {
  onError(id)
 }
}

obternerPersonajes()
