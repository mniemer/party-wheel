var img = document.getElementById('wheel')
img.addEventListener('click', onClick, false);

function onClick() {
    this.removeAttribute('style');
    
    var deg = 500 + Math.round(Math.random() * 500);
    var css = '-webkit-transform: rotate(' + deg + 'deg);';
    this.setAttribute(
        'style', css
    );
}