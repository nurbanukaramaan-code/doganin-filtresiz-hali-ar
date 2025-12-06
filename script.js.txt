navigator.mediaDevices.getUserMedia({
  video: { facingMode: "environment" }
})
.then(stream => {
  document.getElementById("camera").srcObject = stream;
});

function playSound() {
  document.getElementById("sound").play();
}
