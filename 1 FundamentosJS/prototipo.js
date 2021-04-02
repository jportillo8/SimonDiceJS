class Can {
  constructor(name, raza, maldad) {
    this.name = name
    this.raza = raza
    this.maldad = maldad
  }
  ladrar(fn){
    var {name,raza}=this
      console.log(`mi perro ${name} te esta salundando es un ${raza}`)
      if (fn) {//algo que exista nos dara true, null, indefine es false
        fn(name,raza, false)
      }
  }
  esMalo(){
    return this.maldad > 15
  }
}
class Rescatador extends Can {
  constructor(name, raza, maldad) {
    super(name,raza,maldad)
  }
  ladrar(fn){
    var {name,raza}=this
    console.log(`ES un perro de Rescate ${name} ${raza}`)
    if (fn) {//algo que exista nos dara true, null, indefine es false
      fn(name,raza, true)
    }
  }
}

function darLaPata(name, raza, esResc){
  console.log(`El es ${name} ${raza}`)
  if (esResc) {
    console.log(`Si el es de rescate`);
  }
}
//new .. Se crea un nuevo Objeto
var logan = new Rescatador('Logan','Siberiano', 15)
var luna = new Can('Luna','Vaca', 20)
var lucas = new Can('Lucas','Labrador', 10)
luna.ladrar()
lucas.ladrar(darLaPata)
logan.ladrar(darLaPata)
