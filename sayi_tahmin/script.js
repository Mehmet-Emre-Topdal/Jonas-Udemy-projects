"use strict";

const secretNumber = Math.trunc(Math.random() * 5) + 1;

let message = document.querySelector(".message");

let score = 5;

let highscore = 0;


/**
 * addEventListener(olay, fonksiyon ) ile elemanın hangi olayda hangi fonksiyonu çalıştıracağını söylüyoruz
 */
const updateGame = function () {
  //başlangıçta deper string olarak alınır
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  /**Tahmin girilip girilmediğini kontrol etme:
   *tahmin girilmediyse boş string döndürülür biz onu numbera çevirdiğimiz için 0
    0 olarak döndü
   */
  if (guess === 0) {
    document.querySelector(".message").textContent = "no input";
  }
  else if(guess === secretNumber){//sayıyı bulduk
    document.querySelector(".message").textContent = "EVET BİLDİNİZ";
    document.querySelector("body").style.backgroundColor = "rgba(0,255,0)";
    document.querySelector(".number").textContent = secretNumber;
    highscore = highscore > score ? highscore : score;
    document.querySelector(".highscore").textContent = highscore;
  }
  else{
    if(guess > secretNumber){
      message.textContent = "HIGH";
    }
    if(guess < secretNumber){
      message.textContent = "LOW";
    }

    score--;
    document.querySelector(".score").textContent = score;

    if(score === 0){
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "rgba(255,0,0)";
      message.textContent = `IDIOT ALERT!!! ANSWER WAS ${secretNumber}`;
      document.querySelector(".check").disabled = true;
    }
  }
};


document.querySelector(".check").addEventListener("click", updateGame);
/*VEYA

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
});*/


const playAgain = function(){
  document.querySelector("body").style.backgroundColor = "#222";
  score = 5;
  message.textContent = "Start guessing..."
  document.querySelector(".number").textContent = "?";
  document.querySelector(".check").disabled = false; 
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
};

document.querySelector(".again").addEventListener("click", playAgain);