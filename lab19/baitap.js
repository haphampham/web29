const studio = [
    {
        title:"Applause",
        audio:"./applause/audio.mp3",
    },
    {
        title:"Applause",
        audio:"./applause/audio.mp3",
    },
    {
        title:"Applause",
        audio:"./applause/audio.mp3",
    },
    {
        title:"Applause",
        audio:"./applause/audio.mp3",
    },
    {
        title:"Applause",
        audio:"./applause/audio.mp3",
    }
];
let isPlaying = false

// window.onclick = function(){
//     const audio = new Audio("./applause/audio.mp3");

//     audio.loap = true;
//     audio.play();
// };

const soundCards = document.querySelector(".suond-card");
function play(){
    const audio = new Audio(this.dataset.audio)
    audio.play();
}
function createElement(sound){
    const btn = document.createElement("div");

    btn.innerText = sound.title;
    btn.dataset.audio = sound.audio;

    btn.onclick = play;
}