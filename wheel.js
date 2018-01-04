var img = document.getElementById('wheel');
var count = 0;
img.addEventListener('click', spinWheel, false);

function spinWheel() {
    count = count + 2;
    this.removeAttribute('style');
    var deg = (count*365) + Math.round(Math.random() * 365);
    var css = 'transform: rotate(' + deg + 'deg);';
    this.setAttribute(
        'style', css
    );
}

function openTab(evt, tabName) {
    var i, tabContent, tabButton;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabButton = document.getElementsByClassName("tabButton");
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].className = tabButton[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}