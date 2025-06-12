const razones = [
  "Tu sonrisa ilumina mi día.",
  "Amo tus abrazos.",
  "Me haces sentir amado.",
  "Eres divertida y dulce.",
  "Eres mi mejor amiga.",
  "Contigo todo es mejor.",
  "Me haces reír como nadie.",
  "Eres hermosa por dentro y por fuera.",
  "Siempre me apoyas.",
  "Me inspiras a ser mejor.",
  // ... agrega más hasta llegar a 100
];

document.getElementById('boton-secreto').addEventListener('click', () => {
  const lista = document.getElementById('lista-razones');
  const contenedor = document.getElementById('razones');
  const estaVisible = contenedor.classList.contains('mostrar');

  if (estaVisible) {
    contenedor.classList.remove('mostrar');
    lista.innerHTML = "";
  } else {
    lista.innerHTML = "";
    razones.forEach(r => {
      const li = document.createElement('li');
      li.textContent = r;
      lista.appendChild(li);
    });
    contenedor.classList.add('mostrar');
  }
});

// Función para ampliar imágenes
function ampliar(img) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popupImg.src = img.src;
  popup.style.display = "flex";
}

// Función para cerrar el popup
function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}
