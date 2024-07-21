let progress = document.getElementById("progressbar");
let song = document.getElementById("song");
let ctrlBtn = document.getElementById("ctrl");
let img = document.getElementById("song-img");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function pp(){
    if(ctrlBtn.innerText=="pause"){
        ctrlBtn.innerText ="play_arrow";
        song.pause();
        img.style.animation = "";

    } else{
        ctrlBtn.innerText="pause";
        song.play();
        img.style.animation = "play-cd 10s infinite linear";
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    }, 200)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlBtn.innerText="pause";
}