let list = ['Aathadi-Aathadi.mp3','En Kannodu.mp3','Adada-Mazhaida.mp3','Piravi.mp3','Anbe Anbe.mp3','Kannai Vittu.mp3','Kadhal Yen Kadhal.mp3','Chola-Chola-MassTamilan.dev.mp3','Poongatre-Poongatre.mp3','Porkanda-Singam-EDM-Version-(Additional-Song)-MassTamilan.dev.mp3','Oru Kal (Version 1).mp3','Usure.mp3','Ei Suzhali.mp3','Udhungada Sangu.mp3','Idhazhin Oram - The Innocence of Love.mp3','Daughter Feels - Background Score.mp3','Ennai Kollathey.mp3','Ava-Enna-Enna-MassTamilan.com.mp3','Yaarum-Illa-MassTamilan.dev.mp3','Innum-Enna-Thozha.mp3','Ponni-Nadhi-MassTamilan.dev.mp3','Seramal-Ponal-Vaazhamal-Poven-MassTamilan.com.mp3','Sirukki Vaasam.mp3','Enna Solla - The New Life of Tamizh.mp3','Indru Netru Naalai.mp3','Pudikale Pudikudhu.mp3','Venmegam.mp3','Usurae-Poguthey.mp3','Porkanda Singam.mp3','Oru Naalil.mp3','Kanave Kanave.mp3','Rayya Rayya(1).mp3','Ayyayo.mp3','Uyire Uyire.mp3','Azhage (feat. Thenuja).mp3','Ennodu Nee Irundhaal.mp3','Dhimu Dhimu.mp3','Thaarame-Thaarame-MassTamilan.io.mp3','Otha Sollaala.mp3','Yedho-Ondru-Ennai.mp3','Roja Kadale.mp3','Ennavaley.mp3','Feel My Love.mp3','Munch_Ad_Tamil_Boy_s_Hostel.mp3','Pinju-Pinju-Mazhai-MassTamilan.dev.mp3','En-Iniya-Thanimaye-MassTamilan.io.mp3','Unakku-Thaan-MassTamilan.dev.mp3','En-Kadhal-Solla.mp3','Arjunar-Villu.mp3','Silu-Silu.mp3','En-Rojaa-Neeye-MassTamilan.dev.mp3','Naan Aval Illai.mp3','Unnale.mp3','Naan-Gaali-MassTamilan.dev.mp3','Po Urave.mp3','Yennachu Yedhachu.mp3','Kangal-Edho-MassTamilan.dev.mp3','Naalu Pakkam(1).mp3','Thuli-Thuli-Mazhaiyaai.mp3','Namma-Satham-MassTamilan.dev(1).mp3','Pona Pogattum.mp3','Kadhalikathey.mp3','Yenna Solla Pore.mp3','Breakup Song.mp3','Piriyadha Enna.mp3','Po Nee Po - The Pain of Love.mp3','Anbenum-MassTamilan.dev.mp3','Marandhaye.mp3','Suthuthe-Suthuthe-Bhoomi.mp3','Kaadhal Endral.mp3','Nee-Singam-Dhan-MassTamilan.dev.mp3','Adi Penne.mp3','Pona Usuru Vanthurichu.mp3','Ennai Vittu - Yuvanshankar Raja Version.mp3','Devathaiya Kandein.mp3','Yolo-You-Only-Live-Once.mp3','Iravaaga Nee.mp3','Othayilae.mp3','Pogatha Yennavittu.mp3','Ava Enna.mp3','Bad Boy.mp3','Yamma-Yamma.mp3','Yaen Ennai Pirindhaai - Male.mp3','Pachai-Uduthiya-Kaadu.mp3','Pallikoodam - The Farewell Song.mp3','Vaadi Pulla Vaadi.mp3','Pirai Thedum.mp3','Yaaro Manathile.mp3','Thodu-Vaanam.mp3','Imaye Imaye.mp3','Danga-Maari-Oodhari.mp3','Deivangal-Ingae.mp3','Anbe-En-Anbe-MassTamilan.fm(1).mp3','Yendhan Kan Munne.mp3','Ayyayo-Nenju.mp3','Anbae-Peranbae-MassTamilan.org.mp3','Nanbiye-MassTamilan.io.mp3','Thoovaanam.mp3','enna-solla---the-new-life-of-tamizh.mp3','Vaa Vaathi.mp3','Elangaathu-Veesudhey.mp3','Engade Nee Ponae.mp3','Yaaro Yaaro.mp3','Kadal Vandal.mp3','En-Jeevan.mp3','Usure Pogudhey.mp3','Yathe Yathe.mp3','Kadhal-Valarthen.mp3','Ghost-Unmasked-(Background-Score)-MassTamilan.dev(1).mp3','Nanbiye.mp3','Hayyoda-MassTamilan.dev.mp3','Kannai-Vittu.mp3','oh-oh---the-first-love-of-tamizh.mp3','Enkeyoo Partha.mp3','Oh Oh - The First Love of Tamizh.mp3','Chekuthan (Reprise).mp3','En Iniya Thanimaye.mp3','Marappadhilai Nenje - Additional Song.mp3','Usure-MassTamilan.org.mp3','Local Boys.mp3','Nee Nenacha.mp3','Thalli Pogathey.mp3','Yamma Yamma.mp3','Kaadhal Vaithu.mp3','Katchi Sera(1).mp3','Sollamal Thottu Chellum Thendral.mp3','Ordinary-Person-MassTamilan.dev (1).mp3','Varum Aana Varaathu.mp3','Neeya Pesiyathu.mp3','Oru-Manam-MassTamilan.io.mp3','Nee Yaaro.mp3','Enna Nadanthalum.mp3','Mayilaanjiye-MassTamilan.org.mp3','Pogadhe.mp3','Yellae-Lama.mp3','Kanna Veesi.mp3','Come on Girls - The Celebration of Love.mp3','Innum Konjam Naeram.mp3','Kan Irandil.mp3','Nee Paartha Vizhigal - The Touch of Love.mp3','Nenjukkul-Peidhidum-MassTamilan.com.mp3','Madura Jilla.mp3'];

list.sort();

const audioPlayer = document.getElementById('audioPlayer');
let index = Math.floor(Math.random()*list.length);

for(let m = 0;m<list.length;m++)
{
    let main = document.querySelector("main");
    let div = document.createElement("div");
    
    let img = document.createElement("img")
    img.classList.add("logo");
    img.setAttribute('src','bg.jpg') 
    
    
    div.appendChild(img)
    
    let text = document.createElement('div');
    text.classList.add('song-name')
    
    let h = document.createElement("h4");
    h.innerText = list[m].split('.')[0];
    text.appendChild(h);
    
    let p = document.createElement("p");
    p.innerText = list[m].split('.')[0];
    text.appendChild(p);
    // Function to fetch the file and then read its tags
    async function processAudioFile(filePath) {
  try {
    // 1. Fetch the audio file from the server
    const response = await fetch(filePath);

    // Check if the fetch was successful
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }

    // 2. Get the file as a Blob object
    const audioBlob = await response.blob();

    // 3. Read the tags from the Blob
    window.jsmediatags.read(audioBlob, {
      onSuccess: function(tag) {
        if (tag.tags.artist) {
          p.textContent = tag.tags.artist; // Show artist name
        }

        if (tag.tags.picture) {
          const picture = tag.tags.picture;
          const byteArray = new Uint8Array(picture.data);
          const blob = new Blob([byteArray], { type: picture.format || 'image/jpeg' });
          const url = URL.createObjectURL(blob);
          img.src = url;
          img.onload = () => URL.revokeObjectURL(url);
        } else {
          img.src = 'bg.jpg'; // fallback image
        }
      },
      onError: function(error) {
        console.error('Error reading tags:', error);
        p.textContent = list[m].split('.')[0]; // fallback title
        img.src = 'bg.jpg'; // fallback image
      }
    });
  } catch (error) {
    console.error('Error fetching or processing file:', error);
    p.textContent = list[m].split('.')[0]; // fallback title
    img.src = 'bg.jpg'; // fallback image
  }
}


// Call the function with your file path
processAudioFile(list[m]);

    div.appendChild(text) 
    
    span = document.createElement("span"); span.classList.add("material-symbols-outlined");
    span.classList.add("equalizer")
    div.appendChild(span);
    
    div.classList.add('song');
    
    if(m==list.length-1)
    {
        div.style.marginBottom = '120px'
    }
    main.appendChild(div);
}


let songs = document.querySelectorAll(".song");
let equalizer = document.querySelectorAll('.equalizer');
let play_pause = document.querySelector(".play-pause")

let logo = document.querySelectorAll('.logo');

function play(no = index) {
    equalizer[index].innerText = "";
    equalizer[index].classList.remove('show');
    index = no;
    audioPlayer.src = list[index]; 
    play_pause.innerText = "pause"
    audioPlayer.play().catch(err => alert("Please wait, media is loading. \nThe song will play within 15 seconds..."));  
    
    document.querySelector('.init').innerText = list[index].split('.')[0] ;
    equalizer[index].classList.add('show');
    equalizer[index].innerText = "equalizer";
    document.querySelector('.clogo').src = logo[index].src
    
}


for(let i = 0;i<songs.length;i++)
{
    
     songs[i].addEventListener("click", () => play(i)); 
    
}

audioPlayer.addEventListener("ended",function (){
        play((index + 1)%songs.length );
    })
    

document.querySelector('.next').addEventListener('click', () => play((index + 1)%songs.length ));
document.querySelector('.prev').addEventListener('click', () => play((index + songs.length - 1)%songs.length ));

let gesture = document.querySelector('.play');
let x1,x2;

play_pause.addEventListener('click',() => {
    if ( document.querySelector('.init').innerText == "Tap to Play" )
    {
        play((index + 1)%songs.length );
        play_pause.innerText = "pause"
    }
    
    else{
        if(!audioPlayer.paused)
        {
            audioPlayer.pause();
            play_pause.innerText = "play_arrow"
        }
        else{
            play_pause.innerText = "pause"
            audioPlayer.play().catch(err => console.log()); 
        }
    }     
})

audioPlayer.onloadedmetadata = function (){
    alert(audioPlayer.duration)
}

gesture.addEventListener('touchstart',(e) => {
    x1 = e.changedTouches[0].screenX;
})

gesture.addEventListener('touchend',(e) => {
    x2 = e.changedTouches[0].screenX;
    if ( Math.abs(x1 - x2) > 10)
    {
        if (x1 > x2) {
            play((index + 1)%songs.length );
        }else if(x1 < x2){
            play((index + songs.length - 1)%songs.length ) ;
        }
    }  
})
 
