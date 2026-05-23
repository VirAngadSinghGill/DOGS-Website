var btn = document.getElementById("btn");

btn.addEventListener("bark", HandleClick);

function HandleClick() {
    new Audio("SFX/bark.mp3").play();
}