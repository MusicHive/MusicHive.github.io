
let audio = new Audio();
let currentTrack = "";

const tracks=[
{name:"Sample Track 1",file:"track1.mp3"},
{name:"Sample Track 2",file:"track2.mp3"}
];

const trackContainer=document.getElementById("tracks");

if(trackContainer){
tracks.forEach(t=>{
let div=document.createElement("div");
div.className="track";
div.innerHTML=`${t.name} 
<button onclick="playTrack('${t.file}','${t.name}')">Play</button>
<button onclick="likeTrack('${t.name}')">❤</button>
<button onclick="showLyrics('${t.name}')">Lyrics</button>`;
trackContainer.appendChild(div);
});
}

function playTrack(file,name){
currentTrack=name;
audio.src=file;
audio.play();
document.getElementById("nowPlaying").innerText="Сейчас играет: "+name;
}

function togglePlay(){
if(audio.paused) audio.play();
else audio.pause();
}

function likeTrack(name){
alert("Лайк поставлен: "+name);
}

function showLyrics(name){
alert("Lyrics для "+name+" (можно подключить API)");
}

function search(){
let q=document.getElementById("searchInput").value;
let r=document.getElementById("results");
r.innerHTML=`
<p>Результат YouTube для: <b>${q}</b></p>
<iframe width="400" height="225"
src="https://www.youtube.com/embed?listType=search&list=${q}">
</iframe>`;
}

if('serviceWorker' in navigator){
navigator.serviceWorker.register('sw.js');
}
