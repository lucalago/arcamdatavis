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
// EXECUTE 0 - CHOOSE PATH FREE EXPLORE / GUIDED
let initButton = document.getElementById('init-btn');
initButton.addEventListener('click', initFunction);

// EXECUTE 1 - INTRODUCTION - CIRCULARITY
let introButton = document.getElementById('intro-btn');
introButton.addEventListener('click', function(){win2.startIntroductionModule()});

// EXECUTE 2 - CITIZEN QUOTES - WOULD YOU DO THIS?
let citizenQuotesButton = document.getElementById('citizen-quotes-btn');
citizenQuotesButton.addEventListener('click', function(){win2.startCitizenQuotesModule()});

// EXECUTE 3 - INTRODUCING 3 VALUE CHAINS
let introduceValueChainsButton = document.getElementById('introduce-value-chains-btn');
introduceValueChainsButton.addEventListener('click', function(){win2.startIntroValueChainsModule()});

// EXECUTE 4 - BROAD DATA OF 3 VALUE CHAINS
let broadDataVcsButton = document.getElementById('broad-data-vcs-btn');
broadDataVcsButton.addEventListener('click', function(){win2.startBroadDataVcsModule()});

// EXECUTE 5 - CONSTRUCTION SECTOR
let constructionSectorButton = document.getElementById('construc-sector-btn');
constructionSectorButton.addEventListener('click', function(){win2.startConstructionSectorModule()});

// EXECUTE 6 - FOOD SECTOR
let foodSectorButton = document.getElementById('food-sector-btn');
foodSectorButton.addEventListener('click', function(){win2.startFoodSectorModule()});

// EXECUTE 7 - CONSUMER GOODS SECTOR
let consumerGoodsButton = document.getElementById('consumer-goods-btn');
consumerGoodsButton.addEventListener('click', function(){win2.startConsumerGoodsSectorModule()});

// EXECUTE 8 - SPECULATIVE FUTURE
let speculativeFutureButton = document.getElementById('speculative-future-btn');
speculativeFutureButton.addEventListener('click', function(){win2.startSpeculativeFutureModule()});

// EXECUTE 9 - COMMITMENT TO FUTURE
let commitFutureButton = document.getElementById('commit-future-btn');
commitFutureButton.addEventListener('click', function(){win2.startCommitFutureModule()});

// EXECUTE 10 - THANK YOU / HOW TO GET INVOLVED / BACK TO START
let getInvolvedButton = document.getElementById('get-involved-btn');
getInvolvedButton.addEventListener('click', function(){win2.startGetInvolvedModule()});
let toHomeButton = document.getElementById('to-home-btn');
toHomeButton.addEventListener('click', function(){win2.resetProjection()});


// EXECUTE 11 - MAIN PAGE DATA DISCOVERY
let dataDiscoveryButton = document.getElementById('data-discovery-btn');
dataDiscoveryButton.addEventListener('click', function(){win2.startDataDashboardModule()});


// remember to add number to the end of the BTN so you can extract that
// from an array of items, to facilitate the code
// loop for the button pressing