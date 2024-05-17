
function changeText() {
    let btn = document.getElementById("mute");
    let touch = document.getElementById("brickBreakSound");
    // touch.play()
    if (btn.value == "Mute") {
        btn.value = "Unmute";
        btn.innerHTML = "Unmute";
        touch.pause()
        // touch.muted=true;
    } else {
        btn.value = "Mute";
        btn.innerHTML = "Mute";
        touch.play()
        // touch.muted=false;
    }
}
// document.addEventListener('DOMContentLoaded', function() {
//     var audio = document.getElementById('brickBreakSound');
    
//     if (audio && audio.play) {
//       var playPromise = audio.play();
//       console.log('Hello')
      
//       if (playPromise !== undefined) {
//         playPromise.then(_ => {
//           console.log('Audio playback started!');
//         })
//         .catch(error => {
//           console.error('Auto-play prevented:', error);
//         });
//       }
//     }
//   });
//   const muteButton = document.getElementById("mute");
//   const audio = document.getElementById("brickTouchSound");
//   muteButton.addEventListener("click", () => {
//     if (audio.muted) {
//       audio.muted = false; // Unmute
//       muteButton.innerHTML = "Unmute";
//     } else {
//         audio.muted = true; // Mute
//         muteButton.innerHTML = "Mute";
//     }
//   });

