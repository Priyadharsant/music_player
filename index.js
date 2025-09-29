let list = ['Aathadi-Aathadi.mp3','En Kannodu.mp3','Adada-Mazhaida.mp3','Piravi.mp3','Anbe Anbe.mp3','Kannai Vittu.mp3','Kadhal Yen Kadhal.mp3','Chola-Chola-MassTamilan.dev.mp3','Poongatre-Poongatre.mp3','Porkanda-Singam-EDM-Version-(Additional-Song)-MassTamilan.dev.mp3','Thoothukudi Kothanar.mp3','Oru Kal (Version 1).mp3','Usure.mp3','Ei Suzhali.mp3','Udhungada Sangu.mp3','Idhazhin Oram - The Innocence of Love.mp3','Daughter Feels - Background Score.mp3','Ennai Kollathey.mp3','Ava-Enna-Enna-MassTamilan.com.mp3','Yaarum-Illa-MassTamilan.dev.mp3','Innum-Enna-Thozha.mp3','Ponni-Nadhi-MassTamilan.dev.mp3','Seramal-Ponal-Vaazhamal-Poven-MassTamilan.com.mp3','Sirukki Vaasam.mp3','Enna Solla - The New Life of Tamizh.mp3','Indru Netru Naalai.mp3','Pudikale Pudikudhu.mp3','Venmegam.mp3','Usurae-Poguthey.mp3','Porkanda Singam.mp3','Oru Naalil.mp3','Kanave Kanave.mp3','Rayya Rayya(1).mp3','Ayyayo.mp3','Uyire Uyire.mp3','Azhage (feat. Thenuja).mp3','Ennodu Nee Irundhaal.mp3','Dhimu Dhimu.mp3','Thaarame-Thaarame-MassTamilan.io.mp3','Otha Sollaala.mp3','Yedho-Ondru-Ennai.mp3','Roja Kadale.mp3','Ennavaley.mp3','Feel My Love.mp3','Munch_Ad_Tamil_Boy_s_Hostel.mp3','Pinju-Pinju-Mazhai-MassTamilan.dev.mp3','En-Iniya-Thanimaye-MassTamilan.io.mp3','Unakku-Thaan-MassTamilan.dev.mp3','En-Kadhal-Solla.mp3','Arjunar-Villu.mp3','Silu-Silu.mp3','En-Rojaa-Neeye-MassTamilan.dev.mp3','Naan Aval Illai.mp3','Unnale.mp3','Naan-Gaali-MassTamilan.dev.mp3','Po Urave.mp3','Yennachu Yedhachu.mp3','Kangal-Edho-MassTamilan.dev.mp3','Naalu Pakkam(1).mp3','Thuli-Thuli-Mazhaiyaai.mp3','Namma-Satham-MassTamilan.dev(1).mp3','Pona Pogattum.mp3','Kadhalikathey.mp3','Yenna Solla Pore.mp3','Breakup Song.mp3','Piriyadha Enna.mp3','Po Nee Po - The Pain of Love.mp3','Anbenum-MassTamilan.dev.mp3','Marandhaye.mp3','Suthuthe-Suthuthe-Bhoomi.mp3','Kaadhal Endral.mp3','Nee-Singam-Dhan-MassTamilan.dev.mp3','Adi Penne.mp3','Pona Usuru Vanthurichu.mp3','Ennai Vittu - Yuvanshankar Raja Version.mp3','Devathaiya Kandein.mp3','Yolo-You-Only-Live-Once.mp3','Iravaaga Nee.mp3','Othayilae.mp3','Pogatha Yennavittu.mp3','Ava Enna.mp3','Bad Boy.mp3','Yamma-Yamma.mp3','Yaen Ennai Pirindhaai - Male.mp3','Pachai-Uduthiya-Kaadu.mp3','Pallikoodam - The Farewell Song.mp3','Vaadi Pulla Vaadi.mp3','Pirai Thedum.mp3','Yaaro Manathile.mp3','Thodu-Vaanam.mp3','Imaye Imaye.mp3','Danga-Maari-Oodhari.mp3','Deivangal-Ingae.mp3','Anbe-En-Anbe-MassTamilan.fm(1).mp3','Yendhan Kan Munne.mp3','Ayyayo-Nenju.mp3','Anbae-Peranbae-MassTamilan.org.mp3','Nanbiye-MassTamilan.io.mp3','Thoovaanam.mp3','enna-solla---the-new-life-of-tamizh.mp3','Vaa Vaathi.mp3','Elangaathu-Veesudhey.mp3','Engade Nee Ponae.mp3','Yaaro Yaaro.mp3','Kadal Vandal.mp3','En-Jeevan.mp3','Usure Pogudhey.mp3','Yathe Yathe.mp3','Kadhal-Valarthen.mp3','Ghost-Unmasked-(Background-Score)-MassTamilan.dev(1).mp3','Nanbiye.mp3','Hayyoda-MassTamilan.dev.mp3','Kannai-Vittu.mp3','oh-oh---the-first-love-of-tamizh.mp3','Enkeyoo Partha.mp3','Oh Oh - The First Love of Tamizh.mp3','Chekuthan (Reprise).mp3','En Iniya Thanimaye.mp3','Marappadhilai Nenje - Additional Song.mp3','Usure-MassTamilan.org.mp3','Local Boys.mp3','Nee Nenacha.mp3','Thalli Pogathey.mp3','Yamma Yamma.mp3','Kaadhal Vaithu.mp3','Katchi Sera(1).mp3','Sollamal Thottu Chellum Thendral.mp3','Ordinary-Person-MassTamilan.dev (1).mp3','Varum Aana Varaathu.mp3','Neeya Pesiyathu.mp3','Oru-Manam-MassTamilan.io.mp3','Nee Yaaro.mp3','Enna Nadanthalum.mp3','Mayilaanjiye-MassTamilan.org.mp3','Pogadhe.mp3','Yellae-Lama.mp3','Kanna Veesi.mp3','Come on Girls - The Celebration of Love.mp3','Innum Konjam Naeram.mp3','Kan Irandil.mp3','Nee Paartha Vizhigal - The Touch of Love.mp3','Nenjukkul-Peidhidum-MassTamilan.com.mp3','Madura Jilla.mp3'];

list.sort();

const audioPlayer = document.getElementById('audioPlayer');
let index = Math.floor(Math.random()*list.length);
let range = document.querySelectorAll('.range');
let ctime = document.querySelectorAll(".ctime");
let time = document.querySelectorAll(".time");
let control = document.querySelector('.play');
let specific = document.querySelector(".specific");
let play_name = document.querySelector('.init');
let s_img = document.querySelector(".s_img");
let s_name = document.querySelector(".s_name");
let s_art = document.querySelector(".s_art");
let search_bar = document.querySelector('.search_bar');
let h1 = document.querySelector('h1');

for (let m = 0; m < list.length; m++) {
  let main = document.querySelector("main");
  let div = document.createElement("div");
  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined", "equalizer");
  div.appendChild(span);
  let text = document.createElement('div');
  text.classList.add('song-name');
  let h = document.createElement("h4");
  h.innerText = list[m].split('.')[0];
  text.appendChild(h);
  let p = document.createElement("p");
  p.innerText = list[m].split('.')[0];
  text.appendChild(p);
  div.appendChild(text);
  div.classList.add('song');
  if (m == list.length - 1) {
    div.style.marginBottom = '14vw';
  }
  main.appendChild(div);
}

let songs = document.querySelectorAll(".song");
let equalizer = document.querySelectorAll('.equalizer');
let play_pause = document.querySelectorAll(".play-pause");

function play(no = index) {
  control.classList.remove('hide');
  equalizer[index].innerText = "";
  equalizer[index].classList.remove('show_eq');
  index = no;
  audioPlayer.src = list[index];
  play_pause[0].innerText = "pause";
  play_pause[1].innerText = "pause";
  audioPlayer.play().catch(err => console.log());
  play_name.innerText = list[index].split('.')[0];
  equalizer[index].classList.add('show_eq');
  equalizer[index].innerText = "equalizer";
  s_name.innerText = play_name.innerText;
  processAudioFile(audioPlayer.src);
}

for (let i = 0; i < songs.length; i++) {
  songs[i].addEventListener("click", () => play(i));
}

audioPlayer.addEventListener("ended", function () {
  play((index + 1) % songs.length);
});

for(let i=0;i<2;i++)
{
    document.querySelectorAll('.next')[i].addEventListener('click', () => play((index + 1) % songs.length));
    document.querySelectorAll('.prev')[i].addEventListener('click', () => play((index + songs.length - 1) % songs.length));
}

let gesture = document.querySelector('.scroll');
let x1, x2;
for(let i = 0;i<2;i++){
    play_pause[i].addEventListener('click', () => {
  if (document.querySelector('.init').innerText == "Tap to Play") {
    play((index + 1) % songs.length);
    play_pause[0].innerText = "pause";
    play_pause[1].innerText = "pause";
  } else {
    if (!audioPlayer.paused) {
      audioPlayer.pause();
      play_pause[0].innerText = "play_arrow";
      play_pause[1].innerText = "play_arrow";
    } else {
          play_pause[0].innerText = "pause";
          play_pause[1].innerText = "pause";
      audioPlayer.play().catch(err => console.log());
    }
  }
});
}
audioPlayer.onloadedmetadata = function () {
  range[0].max = audioPlayer.duration;
  time[0].innerText = String(Math.floor(audioPlayer.duration / 60)).padStart(2, '0') + ':' + String(Math.floor(audioPlayer.duration % 60)).padStart(2, '0');
  range[1].max = audioPlayer.duration;
  time[1].innerText = String(Math.floor(audioPlayer.duration / 60)).padStart(2, '0') + ':' + String(Math.floor(audioPlayer.duration % 60)).padStart(2, '0');
};

setInterval(() => {
  range[0].value = audioPlayer.currentTime;
  ctime[0].innerText = String(Math.floor(audioPlayer.currentTime / 60)).padStart(2, '0') + ':' + String(Math.floor(audioPlayer.currentTime % 60)).padStart(2, '0');
  range[1].value = audioPlayer.currentTime;
  ctime[1].innerText = String(Math.floor(audioPlayer.currentTime / 60)).padStart(2, '0') + ':' + String(Math.floor(audioPlayer.currentTime % 60)).padStart(2, '0');
}, 1000);

range.onchange = () => {
  const newTime = parseFloat(range.value);
  audioPlayer.currentTime = newTime;
  range.value = newTime;
  console.log(range.value);
};

let y1,y2;

gesture.addEventListener('touchstart', (e) => {
  x1 = e.changedTouches[0].screenX;
});

gesture.addEventListener('touchend', (e) => {
  x2 = e.changedTouches[0].screenX;
  if (Math.abs(x1 - x2) > 30) {
    if (x1 > x2) {
      play((index + 1) % songs.length);
    } else if (x1 < x2) {
      play((index + songs.length - 1) % songs.length);
    }
    }
});

play_name.addEventListener('click', () => {
  specific.classList.remove('hide');
});

document.querySelector('.close').addEventListener("click", () => {
  specific.classList.add('hide');
  if (audioPlayer && audioPlayer.src) {
    processAudioFile(audioPlayer.src);
  }
});

async function processAudioFile(filePath) {
  try {
    const response = await fetch(filePath, { mode: "cors" });
    if (!response.ok) throw new Error("Fetch failed: " + response.statusText);

    const blob = await response.blob();
    window.jsmediatags.read(blob, {
      onSuccess: function (tag) {
        if (tag.tags.artist) {
          s_art.textContent = tag.tags.artist;
        } else {
          s_art.textContent = list[index].split('.')[0];
        }

        if (tag.tags.picture) {
          const picture = tag.tags.picture;
          const byteArray = new Uint8Array(picture.data);
          const blobPic = new Blob([byteArray], { type: picture.format || "image/jpeg" });
          const url = URL.createObjectURL(blobPic);
          s_img.src = url;
          s_img.onload = () => URL.revokeObjectURL(url);
        } else {
          s_img.src = "bg.jpg";
        }
      },
      onError: function (error) {
        console.error("Error reading tags:", error);
        s_art.textContent = list[index].split(".")[0];
        s_img.src = "bg.jpg";
      }
    });
  } catch (err) {
    console.error("Error processing audio file:", err);
  }
}
let s_y1,s_y2;
specific.addEventListener('touchstart', (e) => {
  s_y1 = e.changedTouches[0].screenY;
});

specific.addEventListener('touchend', (e) => {
  s_y2 = e.changedTouches[0].screenY;
  if (Math.abs(s_y1 - s_y2) > 60) {
    if (s_y1 < s_y2) {
      specific.classList.add('hide');
    }
  }
});
control.addEventListener('touchstart', (e) => {
  s_y1 = e.changedTouches[0].screenY;
});

control.addEventListener('touchend', (e) => {
  s_y2 = e.changedTouches[0].screenY;
  if (Math.abs(s_y1 - s_y2) > 60) {
    if (s_y1 > s_y2) {
      specific.classList.remove('hide');
    }
  }
});

let search = document.querySelector("#search");
let result = document.querySelector("#result")
let search_btn = document.querySelector(".search_btn");
let search_close = document.querySelector(".search_close"); 


search_btn.addEventListener('click',() =>{
    search_btn.classList.add("search_hide");
    search_bar.classList.remove("search_hide");
    h1.classList.add("search_hide");
    search.focus();
})

search_close.addEventListener('click',()=>{
    search_bar.classList.add("search_hide")
    h1.classList.remove("search_hide")
    search_btn.classList.remove("search_hide");
    search.value = ""
})
search.addEventListener("input", () => {
   let ul = document.createElement("ul");
   let found = false
   search_bar.classList.remove("search_hide");
   for (let i = 0; i < list.length; i++) {
       if (list[i].toLowerCase().includes(search.value.toLowerCase())) {
           let li = document.createElement('li');
           found = true
           li.innerText = list[i].split('.')[0];
           li.setAttribute("value", i);
           li.classList.add("search_el");
           li.addEventListener("click", () => {
              search_btn.classList.remove("search_hide") ;
              h1.classList.remove('search_hide')
              search.value = ""
              search_bar.classList.add('search_hide');
             play(parseInt(li.getAttribute("value")));
           });

           ul.appendChild(li);
       }
   }
   if (found ) {
       result.innerHTML = ""
       result.appendChild(ul);
   }
   else{
       result.innerHTML = "Not Found "
   }
   
});
