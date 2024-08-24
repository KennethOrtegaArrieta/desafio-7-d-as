function preguntaAreas() {
    let area=prompt("¿Quiere seguir hacia el área de 'Front-End' o seguir hacia el área de 'Back-End'? Escriba el área de interés");
    let lenguaje="";
    
    if (area==="Front-End"){
    lenguaje = prompt("¿Quiere aprender React o aprender Vue?");
    }else if(area==="Back-End"){
    lenguaje= prompt("¿Quiere aprender C# o aprender Java?");
    }else{
        alert("¡No ingreso una opcion válida!");
    return;
    }
preguntarEspecialidad(area, lenguaje);
}

function preguntarEspecialidad(area, lenguaje) {
    let especialidad = prompt("¿Quiere seguir especializándose en el área elegida  digita '1' o desarrollarse para convertirse en Fullstack digita '2'?");
    especialidad=parseInt(especialidad);
    if (especialidad== 1){
alert(`¡Sigue especializandote en ${lenguaje} para dominar el área de ${area}!`);
}else if (especialidad==2) {
    alert (`¡Es hora de esmpezar a aprender otros lenguajes además de ${lenguaje} si quiere se un especialista en Fullstack!`);
}else{
    alert("Opcion no valida")
    return;
} 
preguntaTecnologia();
}
function preguntaTecnologia() {
    let texto = prompt("¿ Alguna otra tecnologia que quiera aprender? Confirma con un 'Si'"); 
    while (texto === "Si") {
        let tecnologia= prompt ("¿Cuál?");
        alert (`¡${tecnologia} es realmente una tecnología interesante`);
        texto= prompt ("¿Quiere aprender otro campo de tecnología ? Confirma con un 'Si'")    
    }
}
preguntaAreas();