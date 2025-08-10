document.addEventListener("DOMContentLoaded", function() {
    var title = document.title;
    var count = 0;
    var normal = [
      "¿ • @y.uusuf"
  ];


    var interval = setInterval(function() {
      document.title = normal[count % normal.length];
      count++

})
})

function revealContent() {
  document.getElementById('mainContent').classList.remove('hidden');
  document.getElementById('clickAnywhere').style.display = 'none';

}
document.addEventListener("dragover", ev => {
  ev.dataTransfer.dropEffect = "none";
  ev.preventDefault();
});

function setFavicon() {
  var link = document.createElement('link');
  link.type = 'image/jpg';
  link.rel = 'icon';
  link.href = 'https://i.pinimg.com/474x/ff/a6/d0/ffa6d01c0f66f5e5e7f0f1d7b5d4819c.jpg';

  document.head.appendChild(link);
}
setFavicon()

document.addEventListener('contextmenu', function (e) {
e.preventDefault();
});


document.getElementById('play').addEventListener('click', function () {
  var mp3 = document.getElementById('audioplayer');
  mp3.volume = 0.6
  mp3.play()
})