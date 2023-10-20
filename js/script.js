document.addEventListener("DOMContentLoaded", init);

function init() {
    const luauBeat = document.querySelector(".luau-beat");
    const dolphins = document.querySelector(".dolphins");
    const ff = document.getElementById("ff");
    const slo = document.getElementById("slo");
    const normal = document.getElementById("normal");
    const pick = document.getElementById("pick");
    var myVideo = document.getElementById("video"); 

    // video elements //

    // set volume
    dolphins.volume = 0.5;
    
    //button controls
    function playPause() { 
    if (myVideo.paused) 
        myVideo.play(); 
    else 
        myVideo.pause(); 
    } 
    
    // audio elements //
    
    //prepare to play
    luauBeat.src = "audio/luau-beat.mp3";
    luauBeat.load();
    luauBeat.volume = 0.5;

    // button controls
    ff.addEventListener("click", (e) => {
        luauBeat.playbackRate = 2;
    });

    slo.addEventListener("click", (e) => {
        luauBeat.playbackRate = 0.5;
    });

    normal.addEventListener("click", (e) => {
        luauBeat.playbackRate = 1;
    });

    // adding change event
    pick.addEventListener("change", (e) => {
        // keep log of song time
        let time = luauBeat.currentTime;

        luauBeat.src = e.target.value;
        luauBeat.load();
        luauBeat.play();

        // start song at time as prev song stopped
        luauBeat.currentTime = time;
    });
} 

