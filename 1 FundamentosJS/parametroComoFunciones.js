//Class Persona
class Persona {
  constructor(name,region,phone) {
    this.name = name
    this.region = region
    this.phone = phone
  }
  registerUser(){
    var {name, region} = this
    console.log(`${name} de ${region} se ha registrado exitosamente`);
  }
  tuRegion(){
    var {region, phone} = this
    switch (phone) {
      case 123:
        console.log(region);
        break;
      case 321:
        console.log(region);
        break;
      default:
    }
  }
  docs(fn){
    console.log('Cargando documentos')
    if (fn) {
      var {name, region} = this
      fn(name,region, true)
    }else {
      console.log('tu archivo no es valido');
    }
  }
}
//class Estudiante
class Estudiante extends Persona {
  constructor(name,region,phone) {
    super(name,region,phone)
  }
  createTask(){
    var name = this.name
    console.log(`${name} haz creado tu tarea`);
  }
}

function subirArchivos(name, region, datos){
  console.log(`${name}`)
  if (datos) {
    console.log('tu archivo se a cargado correctamente');
  }
}


var juan = new Persona('Juan','Panama', 123)
var pedro = new Persona('Pedro','Colombia', 321)
var natEst = new Estudiante('Natalia', 'Panama',123)
