const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const ULTIMO_NIVEL = 3



class Juego {
  constructor() {
    this.inicializar = this.inicializar.bind(this)
    this.inicializar()
    this.generarSecuencia()
    setTimeout(this.siguienteNivel, 500)

  }

  inicializar(){
    //Cambiando el this
    this.siguienteNivel = this.siguienteNivel.bind(this)
    this.elegirColor = this.elegirColor.bind(this)


    this.toggleBtnEmpezar()
    this.nivel = 1
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
    }
  }

  toggleBtnEmpezar(){
    if(btnEmpezar.classList.contains('hide')){
      btnEmpezar.classList.remove('hide')
    }else {
      btnEmpezar.classList.add('hide')
    }
  }

  generarSecuencia(){
    this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random()*4))
  }

  siguienteNivel(){
    this.subNivel = 0
    this.iluminarSecuencia()
    this.agregarEventosClick()
  }

  transformarNumeroAcolor(num){
    switch (num) {
      case 0:
      return 'celeste'
      case 1:
      return 'violeta'
      case 2:
      return 'naranja'
      case 3:
      return 'verde'
    }
  }

  transformarColorAnumero(color){
    switch (color) {
      case 'celeste':
      return 0
      case 'violeta':
      return 1
      case 'naranja':
      return 2
      case 'verde':
      return 3
    }
  }

  iluminarSecuencia(){

    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroAcolor(this.secuencia[i])
      setTimeout(() => this.iluminarColor(color), 1000*i)
    }
  }

  iluminarColor(color){
    this.colores[color].classList.add('light')
    setTimeout(() => this.apagarColor(color),350)
  }

  apagarColor(color){
    this.colores[color].classList.remove('light')
  }

  //Input del Usuario
  agregarEventosClick(){
    this.colores.celeste.addEventListener('click', this.elegirColor)
    this.colores.violeta.addEventListener('click', this.elegirColor)
    this.colores.verde.addEventListener('click', this.elegirColor)
    this.colores.naranja.addEventListener('click', this.elegirColor)
  }

  eliminarEventosClick(){
    this.colores.celeste.removeEventListener('click', this.elegirColor)
    this.colores.violeta.removeEventListener('click', this.elegirColor)
    this.colores.verde.removeEventListener('click', this.elegirColor)
    this.colores.naranja.removeEventListener('click', this.elegirColor)
  }

  elegirColor(ev){
    const nombreColor = ev.target.dataset.color
    const numeroColor = this.transformarColorAnumero(nombreColor)
    this.iluminarColor(nombreColor)
    if (numeroColor === this.secuencia[this.subNivel]) {
      this.subNivel++
      if (this.subNivel === this.nivel) {
        this.nivel++
        this.eliminarEventosClick()
        if (this.nivel === (ULTIMO_NIVEL +1)) {
          this.ganoJuego()
        }else {
          setTimeout(this.siguienteNivel , 1500)
        }
      }
    }else {
      this.perdioJuego()
    }
  }
  ganoJuego(){
    swal('Simon Dice', 'Felicitaciones Ganaste el Juego', 'success')
    .then(this.inicializar())
  }

  perdioJuego(){
    swal('Simon Dice', 'Perdiste!! :C', 'error')
    .then(() => {
      this.eliminarEventosClick()
      this.inicializar()
    })
  }

}

function empezarJuego(){
  window.juego = new Juego
}
