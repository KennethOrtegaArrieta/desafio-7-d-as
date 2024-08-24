let lista={
    frutas:[],
    vegetales:[],
    lacteos:[],
    congelados:[],
    dulces:[],
    otro:[]
};
let alimento="";
let tipo="";

let respuesta="sí";
while (respuesta!= "no") {
    respuesta=prompt("¿Desea agregar un alimento a la lista de compras? 'Si'ó 'No' ").toLowerCase();
    while (respuesta!= "sí" && respuesta !="no") {
        alert("¡Entrada desconocida!");
        respuesta=prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.").toLowerCase();
    }
    if (respuesta==="no") {
        break;
    }
    alimento=prompt("¿Qué comida deseas agregar?");
    tipo=prompt("¿En que categoria encaja el alimento: 'frutas','vegetales','lacteos','congelados','dulces' ó 'otro'?");
    if (tipo==='frutas') {
        frutas.push(alimento);tipo
    }else if (tipo ==='vegetales') {
        vegetales.push(alimento);
    } else if (tipo==='lacteos'){
        lacteos.push(alimento);
    }else if (tipo==='congelados') {
        congelados.push(alimento);        
    }else if (tipo=== 'dulces') {
        dulces.push(alimento);
    }else if (tipo==='otro') {
       otro.push(alimento);        
    }else{
        alert("Categoria invalida");
    }    
}
alert("Lista de compras:?\n Frutas: ${frutas}?\n Lácteos: ${lacteos}\n Vegetales ${vegetales} \n Congelado: ${congelados} Dulces${dulces}\n Otro: ${otro}");

/*function setRespuestas(value){
    respuesta=value.toLowerCase();
if(respuesta==="si"){ 
    mostrarInputs();
}else {
    finalizarCompra();    
    }
}
function mostrarInputs() {
    document.getElementById("inputs").style="block";   
}

function agregarAlimento() {
    alimento = prompt("¿Que alimento deseas agregar?");
    tipo = prompt("¿De que tipo es el alimento:frutas, vegetales, lacteos, congelados, dulces, otro?").toLowerCase();
   
    switch (tipo) {
        case "frutas":
            lista.frutas.push(alimento);
            break;
        case "vegetales":
            lista.vegetales.push(alimento);
        case "lacteos":
            lista.lacteos.push(alimento);
            break;
        case "congelados":
            lista.congelados.push(alimento);
            break;
        case "dulces":
            lista.dulces.push(alimento);
            break;        
        default:
            lista.otro.push(alimento);
            break;
    }  
}    

function finalizarCompra() {
    let resultado="Lista de compras:/n";
    for (const tipo in lista) {
        if (lista[tipo].length>0) {
        resultado += `${tipo}:${lista[tipo].join(", ")}/n`;
        }
    }
    mostrarResultado(resultado);
}
function mostrarResultado(resultado) {
    const listaCompras=document.getElementById("listaCompras");
     listaCompras=textContent=resultado;
    alert("Gracias por visitarnos");

}*/
