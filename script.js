const razones = [
  "Tu sorriso ilumina meu dia.",
  "Amo teus abraços.",
  "Você me faz sentir amado.",
  "É divertida e doce.",
  "É minha melhor amiga.",
  "Com você tudo é melhor.",
  "Você me faz rir como ninguém.",
  "É linda por dentro e por fora.",
  "Sempre me apoia.",
  "Me inspira a ser melhor.",
  // Adicione mais razões se quiser
];

document.getElementById('boton-secreto').addEventListener('click', () => {
  const lista = document.getElementById('lista-razones');
  const contenedor = document.getElementById('razones');
  
  if (contenedor.classList.contains('mostrar')) {
    contenedor.classList.remove('mostrar');
    lista.innerHTML = '';
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

function ampliar(img) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popupImg.src = img.src;
  popup.style.display = "flex";
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}
