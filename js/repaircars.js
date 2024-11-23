let score, lives;
const gameTime = 100;
let timeLeft,gameRunning;
let musicOn = true, fxOn = true;

let bgMusic = document.querySelector("#bgmusic");
let doorSound = document.querySelector("#doorsound");
let washSound = document.querySelector("#washsound");
let petrolSound = document.querySelector("#petrolsound");
let hammerSound = document.querySelector("#hammersound");
let dangerSound = document.querySelector("#dangersound");
let krackerSound = document.querySelector("#krackersound");
let praiseSound = document.querySelector("#praisesound");
let loseSound = document.querySelector("#losesound");


document.querySelector("#musicToggle").addEventListener("click", toggleMusic);
document.querySelector("#fxToggle").addEventListener("click", toggleFX);


window.addEventListener("load", title);

function title() {
    console.log("title");
    hideAllScreens();
    document.querySelector("#title_screen").classList.remove("hidden");
    document.querySelector("#playgame").addEventListener("click", start);
    document.querySelector(".rules").addEventListener("click",rules);
}
function rules() {
    console.log("rules");
    hideAllScreens();
    document.querySelector("#instructions").classList.remove("hidden");
    document.querySelector(".back").addEventListener("click",title);
    document.querySelector(".startgame").addEventListener("click", start);
}
function hideAllScreens() {
    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#game_win").classList.add("hidden");
    document.querySelector("#screen").offsetHeight;
}
function start() {
    console.log("start");
    hideAllScreens();
    stopAllAudio();
    gameRunning = true;
    score = 0;
    lives = 5;
    timeLeft = gameTime;
    showTime();
    bgMusic.play();
    
    document.querySelector(".playagain1").addEventListener("click", restartGame);
    document.querySelector(".playagain2").addEventListener("click", restartGame);
    document.querySelector(".back2").addEventListener("click", title);
    document.querySelector(".back3").addEventListener("click", title);
    document.querySelector("#pausegame").addEventListener("click",pauseButton);
    


    document.querySelector("#game_container1").addEventListener("click", hitDoor);
    document.querySelector("#game_container1").addEventListener("animationiteration", squeezeCardoor);
    document.querySelector("#game_container2").addEventListener("click", washing);
    document.querySelector("#game_container2").addEventListener("animationiteration", squeezeWashing);
    document.querySelector("#game_container3").addEventListener("click",havePetrol);
    document.querySelector("#game_container3").addEventListener("animationiteration", squeezePetrolling);
    
    document.querySelector("#game_container4").addEventListener("click",avoidHammer);
    document.querySelector("#game_container4").addEventListener("animationiteration", squeezeHammer);
    document.querySelector("#game_container5").addEventListener("click",noDanger);
    document.querySelector("#game_container5").addEventListener("animationiteration", squeezeDanger);
    document.querySelector("#game_container6").addEventListener("click", noKracker);
    document.querySelector("#game_container6").addEventListener("animationiteration", squeezeKracker);



    let randomPositionNumber = generateRandomNumber();
    document.querySelector("#game_container1").classList.add("position" + randomPositionNumber);
    document.querySelector("#game_container1").classList.add("fallDown");
    document.querySelector("#game_container1").classList.add("speed" + randomPositionNumber);
    
    let randomPositionNumber2 = generateRandomNumber2();
    document.querySelector("#game_container2").classList.add("position" + randomPositionNumber);
    document.querySelector("#game_container2").classList.add("fallDown");
    document.querySelector("#game_container2").classList.add("speed" + randomPositionNumber);
    
    let randomPositionNumber3 = generateRandomNumber3();
    document.querySelector("#game_container3").classList.add("position" + randomPositionNumber);
    document.querySelector("#game_container3").classList.add("fallDown");
    document.querySelector("#game_container3").classList.add("speed" + randomPositionNumber);
    
    let randomPositionNumber4 = generateRandomNumber4();
    document.querySelector("#game_container4").classList.add("position" + randomPositionNumber);
    document.querySelector("#game_container4").classList.add("fallDown");
    document.querySelector("#game_container4").classList.add("speed" + randomPositionNumber);
    
    let randomPositionNumber5 = generateRandomNumber5();
    document.querySelector("#game_container5").classList.add("position" + randomPositionNumber);
    document.querySelector("#game_container5").classList.add("fallDown");
    document.querySelector("#game_container5").classList.add("speed" + randomPositionNumber);
    
    let randomPositionNumber6 = generateRandomNumber6();
    document.querySelector("#game_container6").classList.add("position" + randomPositionNumber);
    document.querySelector("#game_container6").classList.add("fallDown");
    document.querySelector("#game_container6").classList.add("speed" + randomPositionNumber);
   
    document.querySelector("#score_board").textContent="Score: "  + score;
    document.querySelector("#health_indicator").textContent="Lives: "  + lives;
}



function hitDoor() {
  //console.log("hitDoor");
  document.querySelector("#game_container1").classList.add("stop");
  document.querySelector("#cardoor").classList.add("rotateAndDisappear");
  document.querySelector("#cardoor").addEventListener("animationend", restartDoor);
  getPoint();
  doorSound.currentTime = 0;
  doorSound.play();
}
function washing() {
    //console.log("washing");
    document.querySelector("#game_container2").classList.add("stop");
    document.querySelector("#carwash").classList.add("rotateAndDisappear");
    document.querySelector("#carwash").addEventListener("animationend", restartWash);
    getPoint();
    washSound.currentTime = 0;
    washSound.play();
}
function havePetrol() {
    //console.log("havePetrol");
    document.querySelector("#game_container3").classList.add("stop");
    document.querySelector("#petrol").classList.add("rotateAndDisappear");
    document.querySelector("#petrol").addEventListener("animationend", restartPetrol);
    getPoint();
    petrolSound.currentTime = 0;
    petrolSound.play();
}

function avoidHammer() {
    //console.log("avoidHammer");
    document.querySelector("#game_container4").classList.add("stop");
    document.querySelector("#hammer").classList.add("rotateAndDisappear");
    document.querySelector("#hammer").addEventListener("animationend", restartHammer);
    loseLife();
    hammerSound.currentTime = 0;
    hammerSound.play();
}
function noDanger() {
    //console.log("noDanger");
    document.querySelector("#game_container5").classList.add("stop");
    document.querySelector("#danger").classList.add("rotateAndDisappear");
    document.querySelector("#danger").addEventListener("animationend", restartDanger);
    loseLife();
    dangerSound.currentTime = 0;
    dangerSound.play();
}
function noKracker() {
    //console.log("nokracker");
    document.querySelector("#game_container6").classList.add("stop");
    document.querySelector("#kracker").classList.add("rotateAndDisappear");
    document.querySelector("#kracker").addEventListener("animationend", restartKracker);
    loseLife();
    krackerSound.currentTime = 0;
    krackerSound.play();
}
  


function restartDoor() {
  //console.log("retartDoor");
  document.querySelector("#game_container1").classList.value = "";
  document.querySelector("#cardoor").classList.value = "";
  document.querySelector("html").offsetHeight;

  let randomPositionNumber = generateRandomNumber();
  document.querySelector("#game_container1").classList.add("position" + randomPositionNumber);   
  document.querySelector("#game_container1").classList.add("fallDown");
  randomPositionNumber = generateRandomNumber();
  document.querySelector("#game_container1").classList.add("speed" + randomPositionNumber);
}
function restartWash() {
    //console.log("retartWash");
    document.querySelector("#game_container2").classList.value = "";
    document.querySelector("#carwash").classList.value = "";
    document.querySelector("html").offsetHeight;
  
    randomPositionNumber2 = generateRandomNumber2();
    document.querySelector("#game_container2").classList.add("position" + randomPositionNumber);  
    document.querySelector("#game_container2").classList.add("fallDown");
    randomPositionNumber2 = generateRandomNumber2();
    document.querySelector("#game_container2").classList.add("speed" + randomPositionNumber);  
}
function restartPetrol() {
    //console.log("retartPetrol");
    document.querySelector("#game_container3").classList.value = "";
    document.querySelector("#petrol").classList.value = "";
    document.querySelector("html").offsetHeight;
  
    randomPositionNumber3 = generateRandomNumber3();
    document.querySelector("#game_container3").classList.add("position" + randomPositionNumber3);  
    document.querySelector("#game_container3").classList.add("fallDown");
    randomPositionNumber3 = generateRandomNumber3();
    document.querySelector("#game_container3").classList.add("speed" + randomPositionNumber3);
}

function restartHammer() {
    //console.log("retartHammer");
    document.querySelector("#game_container4").classList.value = "";
    document.querySelector("#hammer").classList.value = "";
    document.querySelector("html").offsetHeight;
  
    randomPositionNumber4 = generateRandomNumber4();
    document.querySelector("#game_container4").classList.add("position" + randomPositionNumber4);  
    document.querySelector("#game_container4").classList.add("fallDown");
    randomPositionNumber4 = generateRandomNumber4();
    document.querySelector("#game_container4").classList.add("speed" + randomPositionNumber4);  
}
function restartDanger() {
    //console.log("retartDanger");
    document.querySelector("#game_container5").classList.value = "";
    document.querySelector("#danger").classList.value = "";
    document.querySelector("html").offsetHeight;
  
    randomPositionNumber5 = generateRandomNumber5();
    document.querySelector("#game_container5").classList.add("position" + randomPositionNumber5);  
    document.querySelector("#game_container5").classList.add("fallDown");
    randomPositionNumber5 = generateRandomNumber5();
    document.querySelector("#game_container5").classList.add("speed" + randomPositionNumber5);  
}
function restartKracker() {
    //console.log("retartKracker");
    document.querySelector("#game_container6").classList.value = "";
    document.querySelector("#kracker").classList.value = "";
    document.querySelector("html").offsetHeight;
  
    randomPositionNumber6 = generateRandomNumber6();
    document.querySelector("#game_container6").classList.add("position" + randomPositionNumber6);  
    document.querySelector("#game_container6").classList.add("fallDown");
    randomPositionNumber6 = generateRandomNumber6();
    document.querySelector("#game_container6").classList.add("speed" + randomPositionNumber6); 
}



function squeezeCardoor() {
  //console.log("squeezeCardoor");
  restartDoor();
  randomPositionNumber = generateRandomNumber();
  document.querySelector("#game_container1").classList.add("position" + randomPositionNumber);  
  document.querySelector("#game_container1").classList.add("speed" + randomPositionNumber);  
}
function squeezeWashing() {
    //console.log("squeezeWashing");
    randomPositionNumber = generateRandomNumber();
    document.querySelector("#game_container2").classList.add("position" + randomPositionNumber);  
    document.querySelector("#game_container2").classList.add("speed" + randomPositionNumber);  
}
function squeezePetrolling() {
    //console.log("squeezePetrolling");
    randomPositionNumber3 = generateRandomNumber3();
    document.querySelector("#game_container3").classList.add("position" + randomPositionNumber3);  
    document.querySelector("#game_container3").classList.add("speed" + randomPositionNumber3);  
}

function squeezeHammer() {
    //console.log("squeezeHammer");
    restartHammer();
    randomPositionNumber = generateRandomNumber();
    document.querySelector("#game_container4").classList.add("position" + randomPositionNumber4);  
    document.querySelector("#game_container4").classList.add("speed" + randomPositionNumber4);  
}
function squeezeDanger() {
    //console.log("squeezeDanger");
    restartDanger();
    randomPositionNumber = generateRandomNumber();
    document.querySelector("#game_container5").classList.add("position" + randomPositionNumber5);  
    document.querySelector("#game_container5").classList.add("speed" + randomPositionNumber5);  
}
function squeezeKracker() {
    //console.log("squeezeKracker");
    restartKracker();
    randomPositionNumber6 = generateRandomNumber6();
    document.querySelector("#game_container6").classList.add("position" + randomPositionNumber6);  
    document.querySelector("#game_container6").classList.add("speed" + randomPositionNumber6);  
}



function generateRandomNumber() {
  //console.log("generateRandomNumber");
  let rndNo = Math.floor(Math.random() * 6 + 1);
  //console.log(rndNo);
  return rndNo;
}
function generateRandomNumber2() {
    //console.log("generateRandomNumber2");
    let rndNo = Math.floor(Math.random() * 1 + 1);
    //console.log(rndNo);
    return rndNo;
}
function generateRandomNumber3() {
    //console.log("generateRandomNumber3");
    let rndNo = Math.floor(Math.random() * 5 + 1);
    //console.log(rndNo);
    return rndNo;
}
function generateRandomNumber4() {
    //console.log("generateRandomNumber4");
    let rndNo = Math.floor(Math.random() * 9 + 1);
    //console.log(rndNo);
    return rndNo;
}
function generateRandomNumber5() {
    //console.log("generateRandomNumber5");
    let rndNo = Math.floor(Math.random() * 2 + 1);
    //console.log(rndNo);
    return rndNo;
}
function generateRandomNumber6() {
    //console.log("generateRandomNumber6");
    let rndNo = Math.floor(Math.random() * 3 + 1);
    //console.log(rndNo);
    return rndNo;
}



function getPoint() {
    //console.log("getPoint");
    score++;
    if(score > 25) {
        gameOver();
    } 
    document.querySelector("#score_board").textContent = "Score:" + score;
}

function loseLife() {
    //console.log("loselife");
    lives--;
    console.log(lives);
    if(lives < 1) {
        gameOver();
    }
    document.querySelector("#health_indicator").textContent = "Lives: " + lives;
}

function loseGame() {
    console.log("loseGame");
    gameRunning = false;
    document.querySelector("#game_over").classList.remove("hidden");
    stopAllAudio();
    loseSound.play();
}

function winGame() {
    console.log("winGame");
    gameRunning = false;
    document.querySelector("#game_win").classList.remove("hidden");
    stopAllAudio();
    praiseSound.play();
}

function showTime() {
    //console.log("showTime");
    timeLeft--;
    document.querySelector("#timer").textContent = "Countdown: " + timeLeft;
    startTimer();
}

function startTimer() {
    //console.log("startTimer");
    if(gameRunning) {
        if(timeLeft > 0) {
        setTimeout(showTime, 500);
    } else {
        gameOver()
    }
    }
}

function gameOver() {
    console.log("gameOver");
    gameRunning = false;
    document.querySelector("#game_container1").classList.value = "";
    document.querySelector("#game_container2").classList.value = "";
    document.querySelector("#game_container3").classList.value = "";
    document.querySelector("#game_container4").classList.value = "";
    document.querySelector("#game_container5").classList.value = "";
    document.querySelector("#game_container6").classList.value = "";
    
    document.querySelector("#game_container1").removeEventListener("animationiteration",squeezeCardoor);
    document.querySelector("#game_container2").removeEventListener("animationiteration",squeezeWashing);
    document.querySelector("#game_container3").removeEventListener("animationiteration",squeezePetrolling);
    document.querySelector("#game_container4").removeEventListener("animationiteration",squeezeHammer);
    document.querySelector("#game_container5").removeEventListener("animationiteration",squeezeDanger);
    document.querySelector("#game_container6").removeEventListener("animationiteration",squeezeKracker);
 
    if (score > 25) {
        winGame();
    }    else {
            loseGame();
        }
}

function restartGame() {
    console.log("restartGame");
    hideAllScreens();
    lives = 5;
    score = 0;
    start();
} 
function stopAllAudio() {
    bgMusic.pause();
    doorSound.pause();
    washSound.pause();
    petrolSound.pause();
    hammerSound.pause();
    dangerSound.pause();
    krackerSound.pause();
    praiseSound.pause();
    loseSound.pause();

    bgMusic.currentTime = 0;
    doorSound.currentTime = 0;
    washSound.currentTime = 0;
    petrolSound.currentTime = 0;
    hammerSound.currentTime = 0;
    dangerSound.currentTime = 0;
    krackerSound.currentTime = 0;
    praiseSound.currentTime = 0;
    loseSound.currentTime = 0;

}
function pauseButton () {
    if (gameRunning === true){
        document.querySelector("#game_container1").classList.add("stop");
        document.querySelector("#game_container2").classList.add("stop");
        document.querySelector("#game_container3").classList.add("stop");
        document.querySelector("#game_container4").classList.add("stop");
        document.querySelector("#game_container5").classList.add("stop");
        document.querySelector("#game_container6").classList.add("stop");
        
        gameRunning = false;
        
    }
        else if (gameRunning === false){
        document.querySelector("#game_container1").classList.remove("stop");
        document.querySelector("#game_container2").classList.remove("stop");
        document.querySelector("#game_container3").classList.remove("stop");
        document.querySelector("#game_container4").classList.remove("stop");
        document.querySelector("#game_container5").classList.remove("stop");
        document.querySelector("#game_container6").classList.remove("stop");
        gameRunning = true;
        setTimeout(showTime,500);
        document.querySelector(".startgame").classList.add("hidden");
        document.querySelector("#play_button_container").classList.add("hidden");
        
    
    }
}

function toggleFX() {
    console.log("toggleFX");
    if (fxOn) {
        fxOn = false;
        doorSound.muted = true;
        washSound.muted = true;
        petrolSound.muted = true;
        hammerSound.muted = true;
        dangerSound.muted = true;
        krackerSound.muted = true;
        praiseSound.muted = true;
        loseSound.muted = true;
        document.querySelector("#fxToggle").classList.add("dimmed");
    } else {
        fxOn = true;
        doorSound.muted = false;
        washSound.muted = false;
        petrolSound.muted = false;
        hammerSound.muted = false;
        dangerSound.muted = false;
        krackerSound.muted = false;
        praiseSound.muted = false;
        loseSound.muted = false;
        document.querySelector("#fxToggle").classList.remove("dimmed");
    }
}

function toggleMusic() {
    console.log("toggleMusic");
    if (musicOn) {
    musicOn = false;
    // mute music
    bgMusic.muted = true;
    document.querySelector("#musicToggle").classList.add("dimmed");
} else {
    musicOn = true;
    // unmute music
    bgMusic.muted = false;
    document.querySelector("#musicToggle").classList.remove("dimmed");
}
    
}

    






    










