let operacion='';
function agregarNumero(numero) {
operacion+=numero;
actualizarDisplay();    
}

function agregarOperador(operador) {
operacion+= operador;
actualizarDisplay();    
}
function actualizarDisplay() {
    document.getElementById('display').innerText=operacion;
}
function borrar() {
    operacion='';
    actualizarDisplay();
}
function calcular() {
    try {
        operacion=eval(operacion).toString();
        actualizarDisplay();
    } catch{
    alert('Operacion no válida');
    borrar();        
    }
    
}
function calcularRaiz() {
    try {
        operacion=Math.sqrt(eval(operacion)).toString();
        actualizarDisplay();
    } catch {
        alert('Operación no válida');
        borrar();
    }
}
function calcularPorcentaje() {
    try {
        operacion=(eval(operacion)/100).toString();
        actualizarDisplay();
    } catch  {
        alert('Operación no válida');
        borrar();
    }
    
}
function calcularPotencia() {
    try {
       const partes=operacion.split('^');
       if (partes.length === 2) {
        const base = parseFloat(partes[0]);
        const exponente=parseFloat(partes[1]);
        operacion = Math.pow(base, exponente).toString();
        actualizarDisplay();
       }else{
        throw new Error('Operación no válida');
        
       }
       
    } catch  {
        alert('Operación no válida');
        borrar();
    }
}
        
   