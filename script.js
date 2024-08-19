// Get the video element
var video = document.getElementById("Attractions");

// Function to request full-screen mode
function requestFullScreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
}

// Function to autoplay and enter full-screen mode when the page loads
window.onload = function() {
    requestFullScreen();
    video.play();
};