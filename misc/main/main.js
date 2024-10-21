document.addEventListener("DOMContentLoaded", function() {
    var title = document.title;
    var count = 0;
    var normal = [
      "¿¿¿ • @frxbid"
  ];


    var interval = setInterval(function() {
      document.title = normal[count % normal.length];
      count++

})
})

document.addEventListener("dragover", ev => {
  ev.dataTransfer.dropEffect = "none";
  ev.preventDefault();
});

function setFavicon() {
  var link = document.createElement('link');
  link.type = 'image/jpg';
  link.rel = 'icon';
  link.href = 'https://i.pinimg.com/236x/a6/fe/64/a6fe646a316ce7f0a5aab48a20095c0d.jpg';

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