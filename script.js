const razones = [
  "Tu sonrisa ilumina mi dia.",
  "Amo tus abraços.",
  "Você me faz sentir amado.",
  "É divertida e doce.",
  "É minha melhor amiga.",
  "Com você tudo é melhor.",
  "Você me faz rir como ninguém.",
  "Você é linda por dentro e por fora.",
  "Você sempre me apoia.",
  "Você me inspira a ser melhor.",
  // Agrega más razones si quieres
];

document.getElementById('boton-secreto').addEventListener('click', () => {
  const razonesDiv = document.getElementById('razones');
  const lista = document.getElementById('lista-razones');

  if (razonesDiv.classList.contains('mostrar')) {
    razonesDiv.classList.remove('mostrar');
    lista.innerHTML = "";
  } else {
    lista.innerHTML = "";
    razones.forEach(r => {
      const li = document.createElement('li');
      li.textContent = r;
      lista.appendChild(li);
    });
    razonesDiv.classList.add('mostrar');
  }
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
