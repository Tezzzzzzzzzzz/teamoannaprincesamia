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
  // Agrega más razones para llegar a 100 si quieres
];

document.getElementById('boton-secreto').addEventListener('click', () => {
  const lista = document.getElementById('lista-razones');
  lista.innerHTML = ""; // Limpiar lista antes de llenar
  razones.forEach(r => {
    const li = document.createElement('li');
    li.textContent = r;
    lista.appendChild(li);
  });
  document.getElementById('razones').classList.add('mostrar');
});
function ampliar(img) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popupImg.src = img.src;
  popup.style.display = "flex";
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}
