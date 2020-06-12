$(document).ready(function () {
  const particlesJSON = {
    "particles": {
      "number": {
        "value": 336,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

  particlesJS("particles-js", particlesJSON);
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function startTimeSalam() {
    var ucapanSalam = "";
    var todaySalam = new Date();
    var hSalam = todaySalam.getHours();
    var mSalam = todaySalam.getMinutes();
    var sSalam = todaySalam.getSeconds();
    mSalam = checkTime(mSalam);
    sSalam = checkTime(sSalam);
    if (hSalam < 4) {
      ucapanSalam = "Selamat Malam Nopa"
      kata1 = "Jangan tidur malem-malem";
      kata2 = "Sweet Dreams Bubu Luvu So Much <3<i class='fa fa-heart'></i>";
    } else {
      if (hSalam < 11) {
        ucapanSalam = "Selamat Pagi Nopa"
        kata1 = "Jangan lupa sarapan biar pipina embem";
        kata2 = "Semoga hari ini jadi hari yang terbaik ya :3 <i class='fa fa-heart'></i>";
      } else {
        if (hSalam < 16) {
          ucapanSalam = "Selamat Siang Nopa"
          kata1 = "Jangan lupa makan siang jg bos";
          kata2 = "Jangan lupa shalat dzuhur jga :3 <i class='fa fa-heart'></i>";
        } else {
          if (hSalam < 20) {
            ucapanSalam = "Selamat Sore Nopa"
            kata1 = "udh tau sorekan? mandi la sekalian pap buat aku :>";
            kata2 = "Jangan lupa shalat ashar juga :3 <i class='fa fa-heart'></i>";
          } else {
              ucapanSalam = "Selamat Malam Nopa"
              kata1 = "Jangan tidur malem-malem";
              kata2 = "Sweet Dreams Bubu Luvu So Much <3<i class='fa fa-heart'></i>";
          }
        }
      }
    }
    // $(".salam").html(ucapanSalam);
    var typed = new Typed('h3', {
      strings: [ucapanSalam, kata1, kata2],
      smartBackspace: true,
      showCursor: 0,
      typeSpeed: 50,
    });
  }

  window.onload = startTimeSalam();
})
