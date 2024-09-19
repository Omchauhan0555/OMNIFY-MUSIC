console.log("lets do javascript");
let playicon = document.querySelector(".playicons");
let playing = document.querySelector("#play");
var foldername = "hindi";
const songpath = "http://127.0.0.1:3000/songs/" 

const songsurl = [];

async function getsongurl() {
  let a = await fetch(
    songpath + foldername + "/"
  );
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  for (let i = 0; i < as.length; i++) {
    const element = as[i].href;
    if (element.endsWith(".mp3")) {
      songsurl.push(element);
    }
  }
  return songsurl;
}

const currentsong = new Audio();

async function getsongname() {
  let a = await fetch(
    songpath + foldername + "/"
  );
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let songsname = [];
  let as = div.getElementsByTagName("a");
  console.log(as)
  for (let i = 0; i < as.length; i++) {
    const element = as[i].innerText.split("Ft.")[0].trim();
    if (element.endsWith(".mp3")) {
      let em = element.slice(0, -18);
      console.log(em)
      songsname.push(em);
      console.log(songsname)
    }
  }

  let ullist = document.querySelector(".libsonglist");
  ullist.innerHTML = "";
  for (const song of songsname) {
    let list = document.createElement("li");
    list.innerHTML = `<i class="fa-solid fa-music"></i>  ${song} `;
    ullist.appendChild(list);
  }
  return songsname;
}

async function getsongs() {
  songsurl.length = 0; 
  let songs = await getsongurl();
  let name = await getsongname();

  let ransong = songs[parseInt(Math.random() * songs.length)];
  currentsong.src = ransong;
  let barsong = document.querySelector(".songname");
  barsong.innerText = ransong.split("Ft.")[0].trim()
    .split("/songs/")[1]
    .slice(0, -17)
    .replaceAll("%20", " ");

  currentsong.addEventListener("loadeddata", () => {
    const duration = currentsong.duration;
    let minutes = parseInt(duration / 60);
    let seconds = parseInt(duration - minutes * 60);

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    const formattedTime = minutes + ":" + seconds;
    const bartime = document.querySelector(".songtime");
    bartime.innerText = "00:00 / " + formattedTime;

    currentsong.addEventListener("timeupdate", () => {
      const currtime = currentsong.currentTime;
      let currmin = parseInt(currtime / 60);
      let currsec = parseInt(currtime - parseInt(currtime / 60) * 60);
      if (currmin < 10) {
        currmin = "0" + currmin;
      }
      if (currsec < 10) {
        currsec = "0" + currsec;
      }

      const Timedone = currmin + ":" + currsec;
      bartime.innerText = Timedone + " / " + formattedTime;

      const seekcircle = document.querySelector(".seekcircle");
      seekcircle.style.left = (currtime / duration) * 100 + "%";
    });
  });

  Array.from(
    document.querySelector(".songslist").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      playmusic(e.innerText.trim());
      barsong.innerText = e.innerText.split("Ft.")[0].trim();
      console.log(barsong.inner)
    });
  });
}
getsongs();

function playmusic(track) {
  currentsong.src =
    songpath + foldername + "/" +
    track +
    "%20(DJJOhAL.Com).mp3";
  currentsong.play();
  playing.className = "fa-regular fa-circle-pause";
}
playing.addEventListener("click", playpause);
function playpause() {
  if (currentsong.paused) {
    currentsong.play();
    playing.className = "fa-regular fa-circle-pause";
  } else {
    currentsong.pause();
    playing.className = "fa-regular fa-circle-play";
  }
}

let seekresp = () => {
  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".seekcircle").style.left = percent + "%";
    currentsong.currentTime = (currentsong.duration * percent) / 100;
  });
};
seekresp();

let hamopen = () => {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector(".form1").style.translate = "0%";
    document.querySelector(".fa-bars").style.visibility = "hidden";
    document.querySelector(".fa-xmark").style.visibility = "visible";
  });
};
hamopen();

let hamclose = () => {
  document.querySelector(".fa-xmark").addEventListener("click", () => {
    document.querySelector(".form1").style.translate = "-110%";
    document.querySelector(".fa-xmark").style.visibility = "hidden";
    document.querySelector(".fa-bars").style.visibility = "visible";
  });
};
hamclose();

// play previous and next song

let nextsong = () => {
  document.querySelector(".fa-forward").addEventListener("click", () => {
    let index = songsurl.indexOf(currentsong.src);
    if (index < songsurl.length - 1) {
      currentsong.src = songsurl[index + 1];
      currentsong.play();
      document.querySelector(".songname").innerHTML = currentsong.src
        .split("/")
        .slice(-1)[0]
        .slice(0, -20)
        .replaceAll("%20", " ").split("Ft.")[0].trim();
    }
  });
};
nextsong();

let prevsong = () => {
  document.querySelector(".fa-backward").addEventListener("click", () => {
    let index = songsurl.indexOf(currentsong.src);
    if (index > 0) {
      currentsong.src = songsurl[index - 1];
      currentsong.play();
      document.querySelector(".songname").innerHTML = currentsong.src
        .split("/")
        .slice(-1)[0]
        .slice(0, -20)
        .replaceAll("%20", " ").split("Ft.")[0].trim();
    }
  });
};
prevsong();

let volset = () => {
  document.querySelector(".volrange").addEventListener("change", (e) => {
    let volnum = e.target.value / 100;
    currentsong.volume = volnum;
  });
};
volset();

let playlist = () => {
  let hindiSongs = document.querySelector(".hindi");
  hindiSongs.addEventListener("click", () => {
    foldername = "hindi";
    getsongs(); 
  });

  let punjabiSongs = document.querySelector(".punjabi");
  punjabiSongs.addEventListener("click", () => {
    foldername = "punjabi";
    getsongs(); 
  });
  let haryanviSongs = document.querySelector(".haryanvi");
  haryanviSongs.addEventListener("click", () => {
    foldername = "haryanvi";
    getsongs(); 
  });
  let rajasthaniSongs = document.querySelector(".rajasthani");
  rajasthaniSongs.addEventListener("click", () => {
    foldername = "rajasthani";
    getsongs(); 
  });
  let bhojpuriSongs = document.querySelector(".bhojpuri");
  bhojpuriSongs.addEventListener("click", () => {
    foldername = "bhojpuri";
    getsongs(); 
  });
  let bhaktiSongs = document.querySelector(".bhakti");
  bhaktiSongs.addEventListener("click", () => {
    foldername = "bhakti";
    getsongs(); 
  });
  let popSongs = document.querySelector(".pop");
  popSongs.addEventListener("click", () => {
    foldername = "pop";
    getsongs(); 
  });
  let sadSongs = document.querySelector(".sad");
  sadSongs.addEventListener("click", () => {
    foldername = "sad";
    getsongs(); 
  });
  let gymSongs = document.querySelector(".gym");
  gymSongs.addEventListener("click", () => {
    foldername = "gym";
    getsongs(); 
  });
  let familySongs = document.querySelector(".family");
  familySongs.addEventListener("click", () => {
    foldername = "family";
    getsongs(); 
  });
};
playlist();