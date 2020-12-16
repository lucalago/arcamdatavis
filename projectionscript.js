var currentProjection;

// EXECUTE 00 - CHOOSE PATH FREE EXPLORE / GUIDED
function loadWelcomeModule (){
    document.getElementById('proj-welcome').style.display = 'block';
    currentProjection = 'proj-welcome';
}

function killWelcomeModule (){
    document.getElementById('proj-welcome').style.display = 'none';
}

// EXECUTE 00 - EXPERIENCE ALERT
function killExperienceAlertModule (){
    document.getElementById('proj-experience-alert').style.display = 'none';
}

// EXECUTE 0 - HELP GUIDE
function loadHelpGuideModule (){
    document.getElementById('proj-help-guide').style.display = 'block';
    currentProjection = 'proj-help-guide';
}

function killHelpGuideModule (){
    document.getElementById('proj-help-guide').style.display = 'none';
}

// EXECUTE 1 - INTRODUCTION - CIRCULARITY
function loadIntroductionModule (){
    document.getElementById('proj-intro-concept').style.display = 'block';
    var videoIntroCircular = document.getElementById('linear-circular-video');
    videoIntroCircular.pause();
    videoIntroCircular.currentTime = 0;
    setTimeout(function(){videoIntroCircular.play();}, 2000);
    currentProjection = 'proj-intro-concept';
}

function killIntroductionModule (){
    document.getElementById('proj-intro-concept').style.display = 'none';
}

// EXECUTE 2 - CITIZEN QUOTES - WOULD YOU DO THIS?
function loadCitizenModule (){
    document.getElementById('proj-citizen-quotes').style.display = 'block';
    currentProjection = 'proj-citizen-quotes';
}

function killCitizenModule (){
    document.getElementById('proj-citizen-quotes').style.display = 'none';
}

// EXECUTE 3 - INTRODUCING 3 VALUE CHAINS
function loadIntroValueChainsModule (){
    document.getElementById('proj-value-chains').style.display = 'block';
    var videovcs = document.getElementById('video-value-chains');
    videovcs.pause();
    videovcs.currentTime = 0;
    setTimeout(function(){videovcs.play();}, 2000);
    currentProjection = 'proj-value-chains';
}

function killIntroValueChainsModule (){
    document.getElementById('proj-value-chains').style.display = 'none';
}

// EXECUTE 4 - BROAD DATA OF 3 VALUE CHAINS
function loadBroadDataVcsModule (){
    document.getElementById('proj-broad-data-vcs').style.display = 'block';
    var videoBoats = document.getElementById('videoboats')
    videoBoats.pause();
    videoBoats.currentTime = 0;
    setTimeout(function(){videoBoats.play();}, 2000);
    currentProjection = 'proj-broad-data-vcs';
}

function killBroadDataVcsModule (){
    document.getElementById('proj-broad-data-vcs').style.display = 'none';
}

// EXECUTE 5 - CONSTRUCTION SECTOR
function loadConstructionSectorModule (){
    document.getElementById('proj-construction-sector').style.display = 'block';
    var videoconstru = document.getElementById('videoconstruction');
    videoconstru.pause();
    videoconstru.currentTime = 0;
    videoconstru.load();
    currentProjection = 'proj-construction-sector';
}

function killConstructionSectorModule (){
    document.getElementById('proj-construction-sector').style.display = 'none';
}

// EXECUTE 6 - FOOD SECTOR
function loadFoodSectorModule (){
    document.getElementById('proj-food-sector').style.display = 'block';
    var videofood = document.getElementById('videofood');
    videofood.pause();
    videofood.currentTime = 0;
    videofood.load();
    currentProjection = 'proj-food-sector';
}

function killFoodSectorModule (){
    document.getElementById('proj-food-sector').style.display = 'none';
}

// EXECUTE 7 - CONSUMER GOODS SECTOR
function loadConsumerGoodsSectorModule (){
    document.getElementById('proj-consumer-goods-sector').style.display = 'block';
    currentProjection = 'proj-consumer-goods-sector';
}

function killConsumerGoodsSectorModule (){
    document.getElementById('proj-consumer-goods-sector').style.display = 'none';
}

// EXECUTE 8 - SPECULATIVE FUTURE
function loadSpeculativeFutureModule (){
    document.getElementById('proj-speculative-future').style.display = 'block';
    currentProjection = 'proj-speculative-future';
}

function killSpeculativeFutureModule (){
    document.getElementById('proj-speculative-future').style.display = 'none';
}

// EXECUTE 9 - COMMITMENT TO FUTURE
function loadCommitFutureModule (){
    document.getElementById('proj-commit-future').style.display = 'block';
    currentProjection = 'proj-commit-future';
}

function killCommitFutureModule (){
    document.getElementById('proj-commit-future').style.display = 'none';
}

// EXECUTE 10 - THANK YOU / HOW TO GET INVOLVED / BACK TO START
function loadCommitedModule (){
    document.getElementById('proj-commited').style.display = 'block';
    currentProjection = 'proj-commited';
}

function killCommitedModule (){
    document.getElementById('proj-commited').style.display = 'none';
}

// EXECUTE 11 - MAIN PAGE DATA DISCOVERY
// function loadDataDashboardModule (){
//     document.getElementById('proj-data-dashboard').style.display = 'block';
//     currentProjection = 'proj-data-dashboard';
// }

// function killDataDashboardModule (){
//     document.getElementById('proj-data-dashboard').style.display = 'none';
// }

// function to load welcome screen

function startWelcomeModule(){
    loadWelcomeModule();
}

// functions for Guided Experience

function startExperienceAlertModule(){
    killWelcomeModule();
    loadHelpGuideModule();
}

function startIntroductionModule(){
    killHelpGuideModule();
    loadIntroductionModule();
}

function startCitizenQuotesModule(){
    killIntroductionModule();
    loadCitizenModule();
}

function startIntroValueChainsModule(){
    killCitizenModule();
    loadIntroValueChainsModule();
}

function startBroadDataVcsModule(){
    killIntroValueChainsModule();
    loadBroadDataVcsModule();
}

function startConstructionSectorModule(){
    killBroadDataVcsModule();
    loadConstructionSectorModule();
}

function startFoodSectorModule(){
    killConstructionSectorModule();
    loadFoodSectorModule();
}

function startConsumerGoodsSectorModule(){
    killFoodSectorModule();
    loadConsumerGoodsSectorModule();
}

function startSpeculativeFutureModule(){
    killConsumerGoodsSectorModule();
    loadSpeculativeFutureModule();
}

function startCommitFutureModule(){
    killSpeculativeFutureModule();
    loadCommitFutureModule();
}

function startCommitedModule(){
    killCommitFutureModule();
    loadCommitedModule();
}

function restartWelcomeModule(){
    killCommitedModule();
    loadWelcomeModule();
}

// functions of discovery data section

// function startDataDashboardModule(){
//     killWelcomeModule();
//     loadDataDashboardModule();
// }

// reset projection

function resetProjection(){
    document.getElementById(currentProjection).style.display = "none";
    loadWelcomeModule()
}