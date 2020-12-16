document.addEventListener('contextmenu', event => event.preventDefault());

var currentSectionId = 'init';
var homeSection = document.getElementById("welcome");

let sections = document.getElementsByTagName("section");
for (let section of sections) {
  section.style.display = 'none';
}
document.getElementById(currentSectionId).style.display = "block";

let links = document.getElementsByClassName("nav-button");

for (let link of links){
    link.addEventListener('click', function(e) {
      var newSectionId = link.getAttribute("href").slice(1, link.getAttribute("href").length);

      var newSection = document.getElementById(newSectionId);
      var currentSection = document.getElementById(currentSectionId);

      currentSection.style.display = 'none';
      newSection.style.display = 'block';
      currentSectionId = newSectionId;
    })
};

// TRANSITION FUNCTIONALITY
var transitionDiv1 = document.getElementById('revealerLayer1');
var pointerGif = document.getElementById('pointer-gif');
var pointerTitle = document.getElementById('pointer-title');

function showTransition() {
    transitionDiv1.style.width = "100%";
    setTimeout(
        function(){
            pointerGif.style.display = 'none'; //set to block
            pointerTitle.style.display = 'none'; //set to block
        }, 100);
    setTimeout(function(){hideTransition();}, 1); //set to 5000
}

function hideTransition() {
    pointerGif.style.display = 'none';
    pointerTitle.style.display = 'none';
    transitionDiv1.style.width = "0";
}

// PLAY VIDEO FUNCTIONALITY
var videoPlay = document.getElementById('play-video-btn');
var videoBroadData = document.getElementById('video-broad-value-chains');

videoPlay.addEventListener('click', videoTrigger);

function videoTrigger() {
    videoBroadData.play();
    videoPlay.style.opacity = '0';
};
function videoReset() {
    videoBroadData.pause();
    videoBroadData.currentTime = 0;
    videoPlay.style.opacity = '1';
}

// HELP SECTION FUNCTIONALITY

let helpSection = document.getElementById('help-dialogue');
let helpButton = document.getElementById('help-btn');
let closeHelpButton = document.getElementById('close-help-btn');

function showHelpDialogue() {
    helpSection.style.width = "50%";
}

function hideHelpDialogue() {
    helpSection.style.width = "0";
}

helpButton.addEventListener('click', showHelpDialogue);
closeHelpButton.addEventListener('click', hideHelpDialogue);

// HOME BUTTON FUNCTIONALITY

let homeButton = document.getElementById('home-btn');
let goHomeButton = document.getElementById('confirm-home-btn');
let closeHomeButton = document.getElementById('close-home-btn');
let homeDialogue = document.getElementById('home-dialogue');

homeButton.addEventListener('click', showHomeDialogue);
closeHomeButton.addEventListener('click', hideHomeDialogue);
goHomeButton.addEventListener('click', goHome);

function showHomeDialogue() {
    homeDialogue.style.display = "block";
}

function hideHomeDialogue() {
    homeDialogue.style.display ="none";
}

function goHome() {
    homeDialogue.style.display ="none";
    document.getElementById(currentSectionId).style.display = "none";
    document.getElementById('welcome').style.display = "block";
    currentSectionId = 'welcome';
    win2.resetProjection();
    resetQuizz()
}


//
// START OF SECONDARY WINDOW INTERACTION CODE
//
// Sets all the settings and the functions that must be run by the projectionscript.js

var win2;
var windowFeatures = 'scrollbars=no, toolbar=no, menubar=no,width=1280,height=800,left=0,top=0';

function openProjectionWindow() {
    if(win2 == null || win2.closed){
        win2 = window.open('index2.html', 'projectionWindow', windowFeatures);
    } else {
        win2.focus();
    }
}

function initFunction(){
    openProjectionWindow();
    startWelcomeModule();
}

// INITIALIZE ENTIRE SETUP
// EXECUTE 00 - CHOOSE PATH FREE EXPLORE / GUIDED
let initButton = document.getElementById('init-btn');
initButton.addEventListener('click', initFunction);

// EXECUTE 00 - EXPERIENCE ALERT
let experienceAlertButton = document.getElementById('alert-btn');
experienceAlertButton.addEventListener('click', function(){win2.startExperienceAlertModule()});

// EXECUTE 0 - HELP GUIDE
let helpguideButton = document.getElementById('ok-alert-btn');
helpguideButton.addEventListener('click', showTransition);
helpguideButton.addEventListener('click', function(){win2.startHelpGuideModule()});


// EXECUTE 1 - INTRODUCTION - CIRCULARITY
let introButton = document.getElementById('begin-guided-btn');
introButton.addEventListener('click', showTransition);
introButton.addEventListener('click', function(){win2.startIntroductionModule()});


// EXECUTE 2 - CITIZEN QUOTES - WOULD YOU DO THIS?
let citizenQuotesButton = document.getElementById('citizen-quotes-btn');
citizenQuotesButton.addEventListener('click', showTransition);
citizenQuotesButton.addEventListener('click', resetQuizz);
citizenQuotesButton.addEventListener('click', function(){win2.startCitizenQuotesModule()});


// EXECUTE 3 - INTRODUCING 3 VALUE CHAINS
let introduceValueChainsButton = document.getElementById('introduce-value-chains-btn');
introduceValueChainsButton.addEventListener('click', showTransition);
introduceValueChainsButton.addEventListener('click', function(){win2.startIntroValueChainsModule()});
introduceValueChainsButton.addEventListener('click', resetLikes);


// EXECUTE 4 - BROAD DATA OF 3 VALUE CHAINS
let broadDataVcsButton = document.getElementById('broad-data-vcs-btn');
broadDataVcsButton.addEventListener('click', showTransition);
broadDataVcsButton.addEventListener('click', function(){win2.startBroadDataVcsModule()});


// EXECUTE 5 - CONSTRUCTION SECTOR
let constructionSectorButton = document.getElementById('construc-sector-btn');
constructionSectorButton.addEventListener('click', showTransition);
constructionSectorButton.addEventListener('click', function(){win2.startConstructionSectorModule()});


// EXECUTE 6 - FOOD SECTOR
let foodSectorButton = document.getElementById('food-sector-btn');
foodSectorButton.addEventListener('click', showTransition);
foodSectorButton.addEventListener('click', function(){win2.startFoodSectorModule()});


// EXECUTE 7 - CONSUMER GOODS SECTOR
let consumerGoodsButton = document.getElementById('consumer-goods-btn');
consumerGoodsButton.addEventListener('click', showTransition);
consumerGoodsButton.addEventListener('click', function(){win2.startConsumerGoodsSectorModule()});


// EXECUTE 8 - SPECULATIVE FUTURE
let speculativeFutureButton = document.getElementById('speculative-future-btn');
speculativeFutureButton.addEventListener('click', showTransition);
speculativeFutureButton.addEventListener('click', function(){win2.startSpeculativeFutureModule()});


// EXECUTE 9 - COMMITMENT TO FUTURE
let commitFutureButton = document.getElementById('commit-future-btn');
commitFutureButton.addEventListener('click', showTransition);
commitFutureButton.addEventListener('click', function(){win2.startCommitFutureModule()});


// EXECUTE 10 - THANK YOU / HOW TO GET INVOLVED / BACK TO START
let getInvolvedButton = document.getElementById('get-involved-btn');
getInvolvedButton.addEventListener('click', function(){win2.startGetInvolvedModule()});
let toHomeButton = document.getElementById('to-home-btn');
toHomeButton.addEventListener('click', function(){win2.resetProjection()});


// EXECUTE 11 - MAIN PAGE DATA DISCOVERY
// let dataDiscoveryButton = document.getElementById('data-discovery-btn');
// dataDiscoveryButton.addEventListener('click', function(){win2.startDataDashboardModule()});


// remember to add number to the end of the BTN so you can extract that
// from an array of items, to facilitate the code
// loop for the button pressing

// QUIZZ FUNCTIONALITY

let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let wrongLabel1 = document.getElementById('wrong-label1');
let wrongLabel2 = document.getElementById('wrong-label2');
let correctLabel = document.getElementById('correct-label');

answer1.addEventListener('click', wrongAnswer1);
answer2.addEventListener('click', correctAnswer);
answer3.addEventListener('click', wrongAnswer2);

function correctAnswer(){
    answer2.classList.add('correctanswer');
    answer1.classList.add('wronganswer1');
    answer3.classList.add('wronganswer2');
    correctLabel.classList.add('label-display');
}

function wrongAnswer1(){
    answer1.classList.add('wronganswer1');
    answer2.classList.add('correctanswer');
    answer3.classList.add('wronganswer2');
    answer3.classList.add('not-clickable');
    correctLabel.classList.add('label-display');
    wrongLabel1.classList.add('label-display');
}

function wrongAnswer2(){
    answer1.classList.add('wronganswer1');
    answer1.classList.add('not-clickable');
    answer3.classList.add('wronganswer2');
    answer2.classList.add('correctanswer');
    correctLabel.classList.add('label-display');
    wrongLabel2.classList.add('label-display');
}

function resetQuizz(){
    answer1.classList.remove('wronganswer1');
    answer3.classList.remove('wronganswer2');
    answer2.classList.remove('correctanswer');
    answer1.classList.remove('not-clickable');
    answer2.classList.remove('not-clickable');
    answer3.classList.remove('not-clickable');
    correctLabel.classList.remove('label-display');
    wrongLabel1.classList.remove('label-display');
    wrongLabel2.classList.remove('label-display');
}

// Like Button Functionalities
var liked = {heart1:false, heart2:false, heart3:false, heart4:false, heart5:false, heart6:false, heart7:false, heart8:false, heart9:false};

var heart1 = document.getElementById('heartimg1');
var heart2 = document.getElementById('heartimg2');
var heart3 = document.getElementById('heartimg3');
var heart4 = document.getElementById('heartimg4');
var heart5 = document.getElementById('heartimg5');
var heart6 = document.getElementById('heartimg6');
var heart7 = document.getElementById('heartimg7');
var heart8 = document.getElementById('heartimg8');
var heart9 = document.getElementById('heartimg9');

heart1.addEventListener('click', likeImage1);
heart2.addEventListener('click', likeImage2);
heart3.addEventListener('click', likeImage3);
heart4.addEventListener('click', likeImage4);
heart5.addEventListener('click', likeImage5);
heart6.addEventListener('click', likeImage6);
heart7.addEventListener('click', likeImage7);
heart8.addEventListener('click', likeImage8);
heart9.addEventListener('click', likeImage9);

function likeImage1() {
    if (liked.heart1 == false){
        heart1.src = 'assets/heart-solid.svg';
        liked.heart1 = true
    } else if (liked.heart1 == true){
        heart1.src = 'assets/heart.svg';
        liked.heart1 = false;
    }
}
function likeImage2() {
    if (liked.heart2 == false){
        heart2.src = 'assets/heart-solid.svg';
        liked.heart2 = true;
    } else if (liked.heart2 == true){
        heart2.src = 'assets/heart.svg';
        liked.heart2 = false;
    }
}
function likeImage3() {
    if (liked.heart3 == false){
        heart3.src = 'assets/heart-solid.svg';
        liked.heart3 = true
    } else if (liked.heart3 == true){
        heart3.src = 'assets/heart.svg';
        liked.heart3 = false;
    }
}
function likeImage4() {
    if (liked.heart4 == false){
        heart4.src = 'assets/heart-solid.svg';
        liked.heart4 = true
    } else if (liked.heart4 == true){
        heart4.src = 'assets/heart.svg';
        liked.heart4 = false;
    }
}
function likeImage5() {
    if (liked.heart5 == false){
        heart5.src = 'assets/heart-solid.svg';
        liked.heart5 = true
    } else if (liked.heart5 == true){
        heart5.src = 'assets/heart.svg';
        liked.heart5 = false;
    }
}
function likeImage6() {
    if (liked.heart6 == false){
        heart6.src = 'assets/heart-solid.svg';
        liked.heart6 = true
    } else if (liked.heart6 == true){
        heart6.src = 'assets/heart.svg';
        liked.heart6 = false;
    }
}
function likeImage7() {
    if (liked.heart7 == false){
        heart7.src = 'assets/heart-solid.svg';
        liked.heart7 = true
    } else if (liked.heart7 == true){
        heart7.src = 'assets/heart.svg';
        liked.heart7 = false;
    }
}
function likeImage8() {
    if (liked.heart8 == false){
        heart8.src = 'assets/heart-solid.svg';
        liked.heart8 = true
    } else if (liked.heart8 == true){
        heart8.src = 'assets/heart.svg';
        liked.heart8 = false;
    }
}
function likeImage9() {
    if (liked.heart9 == false){
        heart9.src = 'assets/heart-solid.svg';
        liked.heart9 = true
    } else if (liked.heart9 == true){
        heart9.src = 'assets/heart.svg';
        liked.heart9 = false;
    }
}
function resetLikes(){
    heart1.src = 'assets/heart.svg';
    heart2.src = 'assets/heart.svg';
    heart3.src = 'assets/heart.svg';
    heart4.src = 'assets/heart.svg';
    heart5.src = 'assets/heart.svg';
    heart6.src = 'assets/heart.svg';
    heart7.src = 'assets/heart.svg';
    heart8.src = 'assets/heart.svg';
    heart9.src = 'assets/heart.svg';
    for(var i = 0; i < liked.length; i++){
        liked.heart[i] = false;
    }
}
