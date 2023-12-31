console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
    let songs=[
        {songName:"Hona tha Pyaar",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
        {songName:"Kaise Mujhe",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
        {songName:"Choo Lo",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
        {songName:"Dil Mere",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
        {songName:"Lamhey",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"}
        ]
        songItems.forEach((element, i)=>{ 
            element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
            element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
        })
         

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-solidfa-circle-play");
        masterPlay.classList.add('fa-solidfa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-solidfa-circle-pause");
       masterPlay.classList.add("fa-solidfa-circle-play");
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{ 
    // Update Seekbar
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100); 
   myProgressBar.value=progress; 
})

myProgressBar.addEventListener('change',  ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})



