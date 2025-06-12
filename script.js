const razones = [
  "Tu sonrisa ilumina mi día.",
  "Amo tus abraços.",
  "Me faz sentir amado.",
  "Você é divertida e doce.",
  "Você é minha melhor amiga.",
  "Com você tudo é melhor.",
  "Você me faz rir como ninguém.",
  "Você é linda por dentro e por fora.",
  "Sempre me apoia.",
  "Você me inspira a ser melhor.",
  // Puedes agregar más razones aquí
];

let abierto = false;

document.getElementById('boton-secreto').addEventListener('click', () => {
  const lista = document.getElementById('lista-razones');
  const divRazones = document.getElementById('razones');

  if (!abierto) {
    lista.innerHTML = "";
    razones.forEach(r => {
      const li = document.createElement('li');
      li.textContent = r;
      lista.appendChild(li);
    });
    divRazones.classList.add('mostrar');
  } else {
    divRazones.classList.remove('mostrar');
  }

  abierto = !abierto;
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
