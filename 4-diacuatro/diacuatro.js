
let Aleatorio=Math.floor(Math.random()* (10-1+1)+1);
let intentos=0;
let num;
let maxIntentos=2;

while (intentos<maxIntentos) {
    num=prompt("Intente de nuevo.Digite un numero");
    intentos++;
    if (num==Aleatorio) {
        alert(`¡Felicidades ha adivinado el numero secreto ${Aleatorio}  en  ${intentos} intentos!`);
        break;
    }else{
        alert(`¡Has fallado!`);
    } 
}
alert(`Este era el número aleatorio : ${Aleatorio}`);
