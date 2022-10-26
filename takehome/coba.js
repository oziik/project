const skor1 = document.querySelector(".skor1"); // skor kolom pemain 1
const skor2 = document.querySelector(".skor2"); // skor kolom pemain 2

const btnhome = document.querySelector(".btn-home"); // tombol poin pemain 1
const btnaway = document.querySelector(".btn-away"); // tombol poin pemain 2

const newgame = document.querySelector(".newgame"); // tombol newgame / reset
const endgame = document.querySelector(".endgame") // tombol endgame / menenukan pemenang

const pemain1bg = document.querySelector(".pemain1-bg"); // menentukan bg kolom pemain 1 saat menang atau imbang
const pemain2bg = document.querySelector(".pemain2-bg"); // menentukan bg kolom pemain 2 saat menang atau imbang

const info = document.querySelector(".info"); // muncul tulisan pemenang 

const btn1 = document.querySelectorAll(".btn1"); 
const btn2 = document.querySelectorAll(".btn2");

let hard = true;
let pemain1skor = 0;
let pemain2skor = 0;

btnhome.addEventListener("click", function () { //tombol poin pemain 1
    if (hard) {
        pemain1skor += 1;
        skor1.textContent = pemain1skor;
    }
});
btnaway.addEventListener("click", function () {  //tombol poin pemain 2
    if (hard) {
        pemain2skor +=1;
        skor2.textContent = pemain2skor;
    }
});

endgame.addEventListener("click", function () { //tombol end game
    if (pemain1skor > pemain2skor) {
        pemain2bg.classList.remove("winner");
        pemain1bg.classList.add("winner");
        btn2.forEach((y) => {
            y.style.backgroundColor = "black";
        });
        btn1.forEach((x) => {
            x.style.backgroundColor = "gold";
        });
        info.textContent = "L CHONG WEI WINS";
        hard = false;
    } else if (pemain1skor === pemain2skor) {
        pemain2bg.classList.add("draw");
        btn2.forEach((y) => {
            y.style.backgroundColor = "blueviolet";
        });
        pemain1bg.classList.add("draw");
        btn1.forEach((y) => {
            y.style.backgroundColor = "blueviolet";
        });
        info.textContent = "DRAW";
        hard = false;
    } else {
        pemain1bg.classList.remove("winner");
        pemain2bg.classList.add("winner");
        btn1.forEach((y) => {
            y.style.backgroundColor = "black";
        });
        btn2.forEach((x) => {
            x.style.backgroundColor = "gold";
        });
        info.textContent = "LIN DAN WINS";
        hard = false;
    }
});

newgame.addEventListener("click" ,  function () {
    if (!hard) {
        info.textContent = "";
        pemain1skor = 0;
        pemain2skor = 0;
        pemain1bg.classList.remove("winner");
        pemain2bg.classList.remove("winner");
        btn1.forEach((y) => {
            y.style.backgroundColor = "black";
        });
        btn2.forEach((x) => {
            x.style.backgroundColor = "black";
        });
        pemain1bg.classList.remove("draw");
        pemain2bg.classList.remove("draw");
        skor1.textContent = pemain1skor;
        skor2.textContent = pemain2skor;
    }
    hard = true ;
});

