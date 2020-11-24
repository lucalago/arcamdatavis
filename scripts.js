var currentSectionId = 'init';

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

var win2;
var windowFeatures = 'scrollbars=no,width=600,height=600,right=0,top=0';

function openProjectionWindow() {
    if(win2 == null || win2.closed){
        win2 = window.open('/index2.html', 'projectionWindow', windowFeatures);
    } else {
        win2.focus();
    }
}

function loadWasteModule (){
    document.getElementById('proj-mainscreen').style.display = 'none';
    document.getElementById('proj-wastemodule').style.display = 'block';
}

function initFunction(){
    openProjectionWindow();
}

let initButton = document.getElementById('init-btn');
initButton.addEventListener('click', initFunction);

let wasteButton = document.getElementById('proj-wastemodule');
wasteButton.addEventListener('click', win2.loadWasteModule());
