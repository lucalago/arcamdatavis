// TRANSITION FUNCTIONALITY
var transitionDiv1 = document.getElementById('revealerLayer1');
var transitionDiv2 = document.getElementById('revealerLayer2');

function showTransition() {
    transitionDiv1.style.width = "100%";
    transitionDiv2.style.width = "100%";
    setTimeout(function(){hideTransition();}, 5000);
}

function hideTransition() {
    transitionDiv2.style.width = "0";
    transitionDiv1.style.width = "0";
}