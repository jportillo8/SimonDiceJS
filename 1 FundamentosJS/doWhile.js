var cont = 0

const llueve = () => Math.random() < 0.25

do {
  cont +=1
} while (!llueve())

if (cont != 1) {
  console.log(`Fui a ver si llovia ${cont} veces`);

}else {
  console.log(`Fui a ver si llovia ${cont} vez`);
}
