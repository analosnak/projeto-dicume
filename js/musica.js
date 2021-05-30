var player = document.querySelector(".container")

function tocamusica(estado) {
  if (estado == 'SP') {
    song.src = "music/dondom-familia-pereira.mp3"
    player.style.visibility = "visible"
    songArtist.innerHTML = "Família Pereira"
    songTitle.innerHTML = "DonDon"
  } else {
    console.log("PB")
    song.src = "music/02 - Pipoca.mp3"
    player.style.visibility = "visible"
    songArtist.innerHTML = "Banda de Pífanos"
    songTitle.innerHTML = "Pipoca"
  }
}

function pauseAudio() {
  x.pause();
}