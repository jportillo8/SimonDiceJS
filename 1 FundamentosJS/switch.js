var signo = prompt('Caul es tu signo')


switch (signo) {
  case 'acuario':
    console.log('Eres un acurio espectacular');
    break;
  case 'leo':
    console.log('Eres un leo espectacular');
    break;
  case 'aries':
  case 'ariés':
    console.log('Eres un aries espectacular');
    break;
  default:
  console.log('no es un signo valido');
  break
}
