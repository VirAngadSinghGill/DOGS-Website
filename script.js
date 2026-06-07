var btn = document.getElementById("btn");

btn.addEventListener("bark", HandleClick);

function HandleClick() {
    new Audio("SFX/bark.mp3").play();
}

var btn1 = document.getElementById("btndog1");

btn1.addEventListener("german", Dog1);

function Dog1() {
    new Audio("SFX/german.mp3").play();
}

var btn2 = document.getElementById("btndog2");

btn2.addEventListener("golden", Dog2);

function Dog2() {
    new Audio("SFX/golden.mp3").play();
}

var btn3 = document.getElementById("btndog3");

btn3.addEventListener("poodle", Dog3);

function Dog3() {
    new Audio("SFX/poodle.mp3").play();
}

var btn4 = document.getElementById("btndog4");

btn4.addEventListener("chihuahua", Dog4);

function Dog4() {
    new Audio("SFX/chihuahua.mp3").play();
}

var btn5 = document.getElementById("btndog5");

btn5.addEventListener("bulldog", Dog5);

function Dog5() {
    new Audio("SFX/bulldog.mp3").play();
}

var btn6 = document.getElementById("btndog6");

btn6.addEventListener("dachshund", Dog6);

function Dog6() {
    new Audio("SFX/dachshund.mp3").play();
}