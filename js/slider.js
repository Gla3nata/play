var pictures = [
        "url(../promo/promo/2_CHARS/2_CHARS_bg_Isolda.jpg)",
        "url(../promo/promo/2_CHARS/2_CHARS_bg_Lleyn.jpg)",
        "url(../promo/promo/2_CHARS/2_CHARS_bg_Pamela.jpg)"
    ];

var currentPosition = 0;
var maxIndex = pictures.length - 1;

var style = document.getElementsByClassName('chars')[0].style;

style.backgroundImage = pictures[currentPosition];

var left = document.querySelector('#left');
left.onclick = changePicture;

var right = document.querySelector('#right');
right.onclick = changePicture;

for (let pos = 0; pos < pictures.length; pos++) {
    let link = document.createElement("a");
//    link.className = 'carusel-pagination-item'
    link.onclick = () => changeClass(pos);
}

function changePicture(event) {
    switch (event.target) {
        case left:
            currentPosition = currentPosition - 1 < 0 ? maxIndex : currentPosition - 1;
            break;
        case right:
            currentPosition = currentPosition + 1 > maxIndex ? 0 : currentPosition + 1;
            break;
    }
    style.backgroundImage = pictures[currentPosition];
}