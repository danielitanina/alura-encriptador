function encriptar() {
  let texto = document.querySelector(".textoUsuario").value;
  let textoEncriptado = document.querySelector(".textoEncriptado");
  let tituloMensaje = document.getElementById('titulo-mensaje');
  let parrafoMensaje = document.getElementById('parrafo-mensaje');
  let botonCopiar = document.getElementById('boton-copiar');
 
  if (/[A-ZáéíóúÁÉÍÓÚ]/.test(texto)) {
      alert('Por favor, escribe el texto en minúsculas y sin acentos.');
      return;
  }

  let textoCifrado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

  if (texto.length !== 0) {
      textoEncriptado.value = textoCifrado;
      textoEncriptado.style.backgroundImage = "none";
      tituloMensaje.style.display = 'none';
      parrafoMensaje.style.display = 'none';
      botonCopiar.style.display = 'block';
  } else {
      alert("Debes ingresar algún texto");
  }
}

function desencriptar() {
  let texto = document.querySelector(".textoUsuario").value;
  let textoEncriptado = document.querySelector(".textoEncriptado");
  let tituloMensaje = document.getElementById('titulo-mensaje');
  let parrafoMensaje = document.getElementById('parrafo-mensaje');
  let botonCopiar = document.getElementById('boton-copiar');

  if (/[A-ZáéíóúÁÉÍÓÚ]/.test(texto)) {
      alert('Por favor, escribe el texto en minúsculas y sin acentos.');
      return;
  }

  let textoCifrado = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

  if (texto.length !== 0) {       
      textoEncriptado.value = textoCifrado;
      textoEncriptadoElement.style.backgroundImage = "none";
//ocultar la imagen de fondo
      tituloMensaje.style.display = 'none';
      parrafoMensaje.style.display = 'none';
      botonCopiar.style.display = 'block';
  } else {
      alert("Debes ingresar algún texto");
  }
}

function copiar() {
  let textoEncriptado = document.querySelector(".textoEncriptado");
  let textToCopy = textoEncriptado.value;

  navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Texto copiado: " + textToCopy);
  }).catch(err => {
      console.error('Error al copiar el texto: ', err);
  });



}