document.addEventListener('DOMContentLoaded', function(){
    const topLeft = document.getElementById('top-left');
    const top = document.getElementById('top');
    const topRight = document.getElementById('top-right');
    const left = document.getElementById('left');
    const center = document.getElementById('center');
    const right = document.getElementById('right');
    const bottomLeft = document.getElementById('bottom-left');
    const bottom = document.getElementById('bottom');
    const bottomRight = document.getElementById('bottom-right');

    let play = 0;

    let circles = [];
    let crosses = [];

    topLeft.addEventListener('click', function() {
        placePlay(topLeft, play);
        play++;
    });

    top.addEventListener('click', function() {
        placePlay(top, play);
        play++;
    });

    topRight.addEventListener('click', function() {
        placePlay(topRight, play);
        play++;
    });

    left.addEventListener('click', function() {
        placePlay(left, play);
        play++;
    });

    center.addEventListener('click', function() {
        placePlay(center, play);
        play++;
    });

    right.addEventListener('click', function() {
        placePlay(right, play);
        play++;
    });

    bottomLeft.addEventListener('click', function() {
        placePlay(bottomLeft, play);
        play++;
    });

    bottom.addEventListener('click', function() {
        placePlay(bottom, play);
        play++;
    })

    bottomRight.addEventListener('click', function() {
        placePlay(bottomRight, play);
        play++;
    });



    function placePlay(square, play) {
        const img = document.createElement('img');
        if (play % 2 != 0) {
            img.setAttribute('src', 'images/x-80.png');
        } if (play % 2 == 0) {
            img.setAttribute('src', 'images/o-80.png');
        } else {
            console.log("Error. Invalid player");
        }

        square.appendChild(img);
    }






});