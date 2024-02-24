let cronometro;
let tiempo = 0;
let pausado = false;

document.addEventListener("DOMContentLoaded", function () {
    let inicioBoton = document.getElementById("iniciar");
    let reiniciarBoton = document.getElementById("reiniciar");
    
    inicioBoton.addEventListener("click", function () {
        if (!pausado) {
            iniciarCronometro();
        } else {
            pausarCronometro();
  
        }
        pausado = !pausado;
    });
    reiniciarBoton.addEventListener("click", reiniciarCronometro);
});


function iniciarCronometro() {
    cronometro = setInterval(actualizarTiempo,10)
}

function pausarCronometro() {
    clearInterval(cronometro);
}

function reiniciarCronometro() {
    clearInterval(cronometro);
    tiempo = 0;
    actualizarTiempo();
    pausado = false;
}

function actualizarTiempo() {
        tiempo += 10;
        let minutos = Math.floor(tiempo / 60000);
        let segundos = Math.floor((tiempo % 60000) / 1000);
        let milisegundos = tiempo % 1000;
        minutos = formatTwoDigits(minutos);
        segundos = formatTwoDigits(segundos);
        milisegundos = formatThreeDigits(milisegundos);

        document.getElementById("texto").textContent = minutos + ":" + segundos + ":" + milisegundos;
        
}

function formatTwoDigits(num) {
    return num < 10 ? "0" + num : num;
}

function formatThreeDigits(num) {
   if(num<10){
    return "00"+num;
   }else if(num<100){
    return "0"+num;
   }else{
    return num;
   }
}