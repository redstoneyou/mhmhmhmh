const startButton = document.getElementById("enter-btn");
const mainScreen = document.getElementById("main-screen");
const gallery = document.getElementById("gallery");
startButton.addEventListener("click",startGallery);

function startGallery(){
    mainScreen.classList.remove("active");
    gallery.classList.add("active");
}