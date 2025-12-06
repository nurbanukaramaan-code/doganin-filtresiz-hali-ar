const video = document.getElementById("camera");
const audio = document.getElementById("voice");

navigator.mediaDevices.getUserMedia({
  video: { facingMode: "environment" },
  audio: false
})
.then(stream => {
  video.srcObject = stream;
})
.catch(err => {
  alert("Kamera açılmadı: " + err);
});

// Sayfaya dokununca ses çalsın (mobil kısıtlama)
document.body.addEventListener("click", () => {
  audio.play();
}, { once: true });
