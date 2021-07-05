var player = document.querySelector(".container")

function tocamusica(estado) {
  if (estado == 'SP') {
    song.src = "music/SP-BRÃO.mp3"
    player.style.visibility = "visible"
    songArtist.innerHTML = "Trabalhadores rurais"
    songTitle.innerHTML = "Brão"
  } else if (estado == 'RJ') {
    song.src = "music/RJ - Clementina de Jesus  Cinco cantos de trabalho.mp3"
    player.style.visibility = "visible"
    songArtist.innerHTML = "Clementina de Jesus"
    songTitle.innerHTML = "5 cantos de trabalho"
  } else if (estado == 'BA') {
    song.src = "music/BA - 01. Cruz Preciosa Encomendadeiras de Almas (Correntina - Bahia)_160k.mp3"
    player.style.visibility = "visible"
    songArtist.innerHTML = "Encomendadeiras de Almas"
    songTitle.innerHTML = "Cruz Preciosa"
  } else if (estado == 'MG') {
    song.src = "music/MG - Vissungo - Canto II_160k.mp3"
    player.style.visibility = "visible"
    songArtist.innerHTML = "Vissungo"
    songTitle.innerHTML = "Canto II" 
  } else if (estado == 'AL') {
    song.src = "music/AL - Cantos de Trabalho  Mutirão Documentário.mp3"
    player.style.visibility = "visible"
    songArtist.innerHTML = "Cantos de Trabalho"
    songTitle.innerHTML = "Mutirão" 
  }
}

function pauseAudio() {
  x.pause();
}