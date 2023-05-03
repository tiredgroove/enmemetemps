function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  }

  const Menu01 = document.getElementById('Menu01');
  Menu01.addEventListener("mouseover", function() {
      Menu01.classList.add('changecolor');
      Menu01.style.color = randomColor();
  });

  Menu01.addEventListener("mouseout", function() {
      Menu01.classList.remove('changecolor');
      Menu01.style.color = '';
  });

  const Menu02 = document.getElementById('Menu02');
  Menu02.addEventListener("mouseover", function() {
      Menu02.classList.add('changecolor');
      Menu02.style.color = randomColor();
  });

  Menu02.addEventListener("mouseout", function() {
      Menu02.classList.remove('changecolor');
      Menu02.style.color = '';
  });
  const Menu03 = document.getElementById('Menu03');
  Menu03.addEventListener("mouseover", function() {
      Menu03.classList.add('changecolor');
      Menu03.style.color = randomColor();
  });

  Menu03.addEventListener("mouseout", function() {
      Menu03.classList.remove('changecolor');
      Menu03.style.color = '';
  });
  const Menu04 = document.getElementById('Menu04');
  Menu04.addEventListener("mouseover", function() {
      Menu04.classList.add('changecolor');
      Menu04.style.color = randomColor();
  });

  Menu04.addEventListener("mouseout", function() {
      Menu04.classList.remove('changecolor');
      Menu04.style.color = '';
  });
  
  const Menu05 = document.getElementById('Menu05');
  Menu05.addEventListener("mouseover", function() {
      Menu05.classList.add('changecolor');
      Menu05.style.color = randomColor();
  });

  Menu05.addEventListener("mouseout", function() {
      Menu05.classList.remove('changecolor');
      Menu05.style.color = '';
  });

  const instaLink = document.getElementById('instaLink');
  instaLink.addEventListener("mouseover", function() {
      instaLink.classList.add('changecolor');
      instaLink.style.color = randomColor();
  });

  instaLink.addEventListener("mouseout", function() {
      instaLink.classList.remove('changecolor');
      instaLink.style.color = '';
  });

function loadPage(url) {
    document.getElementById("main_page").innerHTML = '<object type="text/html" data="'+url+'" ></object>';
}
function loadPage(url) {
          document.getElementById("myFrame").src = url;
          //visibility
          if (url.endsWith("01.html")) {
            document.getElementById("main_page").style.visibility = "hidden";
          } else {
            document.getElementById("main_page").style.visibility = "visible";
          }
      }

document.addEventListener('contextmenu', function(e) {
      // prevent right-click menu from appearing
      e.preventDefault();
  });

  ////show iframe

const playButton = document.querySelector('.button--play');
const audioPlayer = document.querySelector('#audio-player');

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.classList.add('button--active');
  } else {
    audioPlayer.pause();
    playButton.classList.remove('button--active');
  }
});
