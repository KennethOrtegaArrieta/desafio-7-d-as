function mostrarRespuestas(){
let nombre=document.getElementById('nombre').value;
let edad=document.getElementById('edad').value;
let lenguaje= document.getElementById('lenguaje').value;
let ciudad=document.getElementById('ciudad').value;

let output=`Hola ${nombre}, tienes ${edad} años , de ${ciudad} y ya estás aprendiendo ${lenguaje}!`;
document.getElementById('output').innerText=output;

let pregunta= `¿Te gusta estudiar ${ lenguaje } ? (1 para Si, 2 para no)`;
document.getElementById('pregunta').innerText = pregunta;
}

function procesarRespuesta(){
let respuesta=document.getElementById('respuestaInput').value;
if (respuesta==1){
document.getElementById('respuesta').innerText="¡Muy bien! Sigue estudiando y tendrás mucho éxito";
}
if (respuesta==2){
document.getElementById('respuesta').innerText="Oh, que pena...¿Ya intentaste aprender otro lenguaje?";
}
}
