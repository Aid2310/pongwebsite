// Controleer of het een iOS-device is (iPhone, iPad of iPod)
// maar sluit macOS (MacBooks) uit
if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !/Macintosh/i.test(navigator.userAgent)) {
  alert("Greetings iOS User! This game is only available on Windows right now.");
  window.close(); // probeert tabblad te sluiten
}
function closePopup() {
  const popup = document.getElementById("osPopup");
  popup.classList.add("fade-out");

  // Wacht tot de overgang klaar is (1s), dan display none
  setTimeout(() => {
    popup.style.display = "none";
    popup.classList.remove("fade-out"); // reset voor eventueel opnieuw openen
  }, 250);
}

document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "pong.zip";  // of "downloads/pong.exe" als hij in een submap staat
  link.download = "pong.zip";
  link.click();
});
function thanks() {
  document.getElementById("thanksdiv").textContent = "Thanks for downloading my Game🤗!";
}

const video = document.getElementById('vidid');
const volumeSlider = document.getElementById('volumeSlider');

volumeSlider.addEventListener('input', () => {
  video.volume = volumeSlider.value;
});

var elem = document.getElementById("Fullscreendiv");

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

}
