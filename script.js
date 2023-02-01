let fimg = document.getElementById("img1");
let simg = document.getElementById("img2");
let timg = document.getElementById("img3");
let uimg = document.getElementById("img4");                             
fimg.addEventListener('click', formAppears)
function formAppears(e){
    window.location.href="./login.html"
}
simg.addEventListener('click',registeredPerson)
function registeredPerson(e){
    console.log(e);
    window.location.href="./registered.html"
}
timg.addEventListener('click', diceGame)
function diceGame(e){
    console.log(e);
    window.location.href="./dice.html"
}
uimg.addEventListener('click', couponText)
function couponText(e){
    console.log(e);
    window.location.href="./coupon.html";
}