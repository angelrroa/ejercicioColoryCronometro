document.addEventListener("DOMContentLoaded", function () {
  let color = document.getElementById("color");


  color.addEventListener('click', function () {
    window.open("color.html", "_blank");
  });

  let cronometro = document.getElementById("cronometro");


  cronometro.addEventListener('click', function () {
    window.open("cronometro.html", "_blank");
  });
});
