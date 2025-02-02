
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: { lat: 40.645037, lng: -73.880224 },
    });

    var image = 'images/maps-and-flags.png';
    var beachMarker = new google.maps.Marker({
      position: { lat: 40.645037, lng: -73.880224 },
      map: map,
      icon: image
    });
  }

  const audio = document.getElementById('audioElement');
  const playButton = document.getElementById('playButton');

  playButton.addEventListener('click', () => {
      audio.play();
  });

  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }


const audio = document.getElementById('audioElement');
const playButton = document.getElementById('playButton');


playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pausar';
  } else {
    audio.pause();
    playButton.textContent = 'Reproducir';
  }
});


function w3_open() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function w3_close() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
