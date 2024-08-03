const wrapper = document.querySelector(".box");
const ad = document.querySelector(".song");
const playing = document.querySelector(".fa-play");
const pauses = document.querySelector(".fa-pause");
const forw = document.querySelector(".fa-forward-step");
const ttl = document.querySelector(".title");
const art_img = document.querySelector("#artist");
const art_name = document.querySelector("#name");
const playsong = document.querySelector("#playsong");
const autoPlay = document.querySelector("#auto-play");
const backBtn = document.querySelector("#back");
const forwBtn = document.querySelector("#forw");

playsong.addEventListener("click", effect);

function effect() {
  if (ad.duration == ad.currentTime) {
    x += 1;
    console.log(x);
  }
  if (!playing.classList.contains("none")) {
    ad.play();
    setInterval(prog, 1000);
    setInterval(line, 1000);
    progress.addEventListener("click", (e) => {
      var widthbar2 = (e.offsetX / e.target.clientWidth) * ad.duration;
      ad.currentTime = widthbar2;
    });
  } else {
    ad.pause();
    // playsong.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
  ttl.classList.toggle("run");
  playing.classList.toggle("none");
  pauses.classList.toggle("none");
  art_img.classList.toggle("round");
  dur();
  // playsong.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  // playsong.innerHTML = `<i class="fa-solid fa-play"></i>`;
}

// backBtn.addEventListener("click", () => {
//   backward();
// });

// forwBtn.addEventListener("click", () => {
//   forward();
// });


function removeEffect_at_end() {
  ad.pause();
  // ad.currentTime = 0.0;
  ttl.classList.remove("run");
  playing.classList.remove("none");
  pauses.classList.add("none");
  art_img.classList.remove("round");
}

var x = 0;
// function songs(x) {
//   art_name.innerHTML = artist_name[x];
//   ttl.innerHTML = artist_title[x];
//   art_img.src = song_img[x];
//   ad.src = song_link[x];
// }

const lines = document.querySelector(".lineChild");
const progress = document.querySelector(".line");
const strt = document.querySelector("#start");
const end = document.querySelector("#end");

function dur() {
  var dura = ad.duration;
  var secdu = Math.floor(dura % 60);
  var mindu = Math.floor(dura / 60);
  if (secdu < 10) {
    secdu = `0${secdu}`;
  }
  end.innerHTML = `${mindu}:${secdu}`;
}

function prog() {
  var curtime = ad.currentTime;
  var mincur = Math.floor(curtime / 60);
  var seccur = Math.floor(curtime % 60);

  if (seccur < 10) {
    seccur = `0${seccur}`;
  }

  strt.innerHTML = `${mincur}:${seccur}`;
}

function line() {
  var widthbar = (ad.currentTime / ad.duration) * 100;
  lines.style.width = `${widthbar}%`;
}

ad.addEventListener("ended", () => {
  removeEffect_at_end();
});

// autoPlay.addEventListener("click", effectOnPlay);

// function effectOnPlay() {
//   if (!autoPlay.classList.contains("none")) {
//     forward();
//     };
//   } else {
//     forward();
//   }
// }
