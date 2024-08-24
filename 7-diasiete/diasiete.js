function Suma() {
    return Number(num1)+Number(num2);
}

function Resta() {
    return Number(num1)-Number(num2);
}

function Multiplicacion() {
    return Number(num1)*Number(num2);
}

function Division() {
    return Number(num1)/Number(num2);
}
let num1, num2;
let operacion="";
do {
    operacion = prompt("Digite la operacion: '+' Suma, '-' Resta, '*' Multiplicacion, '/' Division, 0' Salir'");
while (operacion != "+"&&operacion!="-"&& operacion!="*"&&operacion!="/"&&operacion!="Salir" );{
}
alert("Operacion no reconocida");
operacion = prompt("Digite la operacion: '+' Suma, '-' Resta, '*' Multiplicacion, '/' Division, 0' Salir'");
if (operacion==="Salir") {
    break;
}
num1 = prompt("Digite el primer numero");
num2 = prompt("Digite el segundo numero");
switch (operacion) {
    case "+":
        alert(`El resultade de ${operacion} es ${Suma(num1,num2)} `);
        break;
    case "-":
        alert(`El resultade de ${operacion} es ${Resta(num1,num2)} `);
        break;
    case "*":
        alert(`El resultade de ${operacion} es ${Multiplicacion(num1,num2)} `);
        break;
    case "/":
        alert(`El resultade de ${operacion} es ${Division(num1,num2)} `);
        break;

    default:
        break;
}
}
while(operacion === "+" || operacion === "-" || operacion === "*" || operacion === "/");
alert(`¡Hasta la próxima!`);
