let cambiarColor = document.getElementById("boton");
let texto=document.getElementById("hexadecimal");

cambiarColor.addEventListener("click", function(){
    let colorHex = '#'+Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = colorHex;
    texto.textContent = colorHex;

})
