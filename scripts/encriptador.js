/*La letra "e" es convertida para "enter"
la letra "i" es convertida para "imes"
la letra "a" es convertida para "ai"
la letra"o" es convertida para "ober"
la letra "u"es copnvetida para "ufat"*/

//--Seleeción de elementos--//
const input_text = document.querySelector(".ingreso__texto");
const output_text = document.querySelector(".salida__texto");
const background_image = document.querySelector(".background_image");
let cambio = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

//--Eliminar mayúsculas y carácteres especilales--//
input_text.addEventListener('input', function(e){
    this.value=this.value.replace(/[^a-z0-9\s]/g, '').toLowerCase();
});

//--Encriptar--//
function encriptar(texto) {
    let textoEncriptado = texto;
    for(let i = 0; i < cambio.length; i++) {
        textoEncriptado = textoEncriptado.replaceAll(cambio[i][0], cambio[i][1]);
        }
        return textoEncriptado;
    }
    
//--Desencriptar--//
function desencriptar(texto){
    let textoDesencriptado = texto;
    for(let i = 0; i < cambio.length; i++) {
        textoDesencriptado = textoDesencriptado.replaceAll(cambio[i][1], cambio[i][0]);
    }
    return textoDesencriptado;
};

//--Botón Encriptar--//
function boton__1() {
    const txt = encriptar(input_text.value);
    output_text.value = txt;
    output_text.style.backgroundImage = "none";
    hideBackgroundImage();
};

//--Botón Desencriptar--//
function boton__2() {
    const txt = desencriptar(input_text.value);
    output_text.value = txt;
    output_text.style.backgroundImage = "none";
    hideBackgroundImage();
};

//--Botón copiar--//
function boton__3() {
    output_text.select();
    output_text.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(output_text.value)
    .then(() =>{
        alert("Texto copiado al portapapeles");
    })
    .catch(err => {
        alert("Error al copiar el texto: " + err);
    })
};

//--Ocultar imagen--//
function hideBackgroundImage(){
    background_image.style.opacity = "0";
}

//--Mostrar imagen--//
function showBackgroundImage(){
    if (output_text.value.trim() === ""){
        background_image.style.opacity = "0.5";
    }
}

//--Usuario borra texto--//
output_text.addEventListener("input", showBackgroundImage);