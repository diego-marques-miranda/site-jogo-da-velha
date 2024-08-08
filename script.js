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
    let lock = false;
    let squareNumber;

    let plays = [false, false, false, false, false, false, false, false, false];
    let circles = [false, false, false, false, false, false, false, false, false];
    let crosses = [false, false, false, false, false, false, false, false, false];

    topLeft.addEventListener('click', function() {
        if (plays[0] == false) {
            squareNumber = 0;
            placePlay(topLeft, play);
            plays[0] = true;
            play++;
            
        }

    });

    top.addEventListener('click', function() {
        if (plays[1] == false) {
            squareNumber = 1;
            placePlay(top, play);
            plays[1] = true;
            play++;
        }
    });

    topRight.addEventListener('click', function() {
        if (plays[2] == false) {
            squareNumber = 2;
            placePlay(topRight, play);
            plays[2] = true;
            play++;
        }
    });

    left.addEventListener('click', function() {
        if (plays[3] == false) {
            squareNumber = 3;
            placePlay(left, play);
            plays[3] = true;
            play++;
        }
    });

    center.addEventListener('click', function() {
        if (plays[4] == false) {
            squareNumber = 4;
            placePlay(center, play);
            plays[4] = true;
            play++;
        }
    });

    right.addEventListener('click', function() {
        if (plays[5] == false) {
            squareNumber = 5;
            placePlay(right, play);
            plays[5] = true;
            play++;
        }
    });

    bottomLeft.addEventListener('click', function() {
        if (plays[6] == false) {
            squareNumber = 6;
            placePlay(bottomLeft, play);
            plays[6] = true;
            play++;
        }
    });

    bottom.addEventListener('click', function() {
        if (plays[7] == false) {
            squareNumber = 7;
            placePlay(bottom, play);
            plays[7] = true;
            play++;
        }
    })

    bottomRight.addEventListener('click', function() {
        if (plays[8] == false) {
            squareNumber = 8;
            placePlay(bottomRight, play);
            plays[8] = true;
            play++;
        }
    });



    function placePlay(square, play) {
        
        if (lock) {
            return;
        }

        const img = document.createElement('img');

        checkWin();

        if (play % 2 != 0) {
            img.setAttribute('src', 'images/x-80.png');
            crosses[squareNumber] = true;
            img.classList.add('fade-in');

            img.offsetHeight;

            requestAnimationFrame(() => {
                img.classList.add('visible');
            });

        } if (play % 2 == 0) {
            img.setAttribute('src', 'images/o-80.png');
            circles[squareNumber] = true;
            img.classList.add('fade-in');
            img.offsetHeight;

            requestAnimationFrame(() => {
                img.classList.add('visible');
            });

        } else {
            console.log("Error. Invalid player");
        }

        checkWin();

        square.appendChild(img);
    }

    function checkWin() {
        const result = document.getElementById('result');

        if (circles[0] && circles[1] && circles[2])
        {
            const win = document.createElement('p');

            topLeft.style.backgroundColor = 'green';
            top.style.backgroundColor = 'green';
            topRight.style.backgroundColor = 'green';

            win.textContent = 'Player 1 won';

            lock = true;

            result.appendChild(win);
        }

        if (crosses[0] && crosses[1] && crosses[2])
        {
            const win = document.createElement('p');

            topLeft.style.backgroundColor = 'green';
            top.style.backgroundColor = 'green';
            topRight.style.backgroundColor = 'green';

            win.textContent = 'Player 2 won';

            lock = true;

            result.appendChild(win);
        }

        if (circles[3] && circles[4] && circles[5])
        {
            const win = document.createElement('p');

            left.style.backgroundColor = 'green';
            center.style.backgroundColor = 'green';
            right.style.backgroundColor = 'green';

            win.textContent = 'Player 1 won';            
            
            lock = true;

            result.appendChild(win);
        }

        if (crosses[3] && crosses[4] && crosses[5])
        {
            const win = document.createElement('p');

            left.style.backgroundColor = 'green';
            center.style.backgroundColor = 'green';
            right.style.backgroundColor = 'green';

            win.textContent = 'Player 2 won';

            lock = true;

            result.appendChild(win);
        }

        if (circles[6] && circles[7] && circles[8])
        {
            const win = document.createElement('p');

            bottomLeft.style.backgroundColor = 'green';
            bottom.style.backgroundColor = 'green';
            bottomRight.style.backgroundColor = 'green';

            win.textContent = 'Player 1 won';
            lock = true;

            result.appendChild(win);
        }

        if (crosses[6] && crosses[7] && crosses[8])
        {
            const win = document.createElement('p');

            bottomLeft.style.backgroundColor = 'green';
            bottom.style.backgroundColor = 'green';
            bottomRight.style.backgroundColor = 'green';

            win.textContent = 'Player 2 won';

            lock = true;

            result.appendChild(win);
        }

        if (circles[0] && circles[3] && circles[6])
        {
            const win = document.createElement('p');

            topLeft.style.backgroundColor = 'green';
            left.style.backgroundColor = 'green';
            bottomLeft.style.backgroundColor = 'green';

            win.textContent = 'Player 1 won';

            lock = true;

            result.appendChild(win);
        }

        if (circles[1] && circles[4] && circles[7])
        {
            const win = document.createElement('p');

            top.style.backgroundColor = 'green';
            center.style.backgroundColor = 'green';
            bottom.style.backgroundColor = 'green';

            win.textContent = 'Player 1 won';

            lock = true;

            result.appendChild(win);
        }

        if (circles[2] && circles[5] && circles[8])
        {
            const win = document.createElement('p');

            topRight.style.backgroundColor = 'green';
            right.style.backgroundColor = 'green';
            bottomRight.style.backgroundColor = 'green';

            win.textContent = 'Player 1 won';

            lock = true;

            result.appendChild(win);
        }

        if (crosses[0] && crosses[3] && crosses[6])
        {
            const win = document.createElement('p');

            topLeft.style.backgroundColor = 'green';
            left.style.backgroundColor = 'green';
            bottomLeft.style.backgroundColor = 'green';

            win.textContent = 'Player 2 won';

            lock = true;

            result.appendChild(win);
        }

        if (crosses[1] && crosses[4] && crosses[7])
        {
            const win = document.createElement('p');

            top.style.backgroundColor = 'green';
            center.style.backgroundColor = 'green';
            bottom.style.backgroundColor = 'green';

            win.textContent = 'Player 2 won';

            lock = true;

            result.appendChild(win);
        }

        if (crosses[2] && crosses[5] && crosses[8])
        {
            const win = document.createElement('p');

            topRight.style.backgroundColor = 'green';
            right.style.backgroundColor = 'green';
            bottomRight.style.backgroundColor = 'green';

            win.textContent = 'Player 2 won';

            lock = true;

            result.appendChild(win);
        }

        if (circles[0] && circles[4] && circles[8])
        {
            const win = document.createElement('p');

            topLeft.style.backgroundColor = 'green';
            center.style.backgroundColor = 'green';
            bottomRight.style.backgroundColor = 'green';

            win.textContent = 'Player 1 won';

            lock = true;

            result.appendChild(win);
        }

        if (circles[2] && circles[4] && circles[6])
        {
            const win = document.createElement('p');

            topRight.style.backgroundColor = 'green';
            center.style.backgroundColor = 'green';
            bottomLeft.style.backgroundColor = 'green';


            win.textContent = 'Player 1 won';

            lock = true;

            result.appendChild(win);
        }

        if (crosses[0] && crosses[4] && crosses[8])
        {
            const win = document.createElement('p');

            topLeft.style.backgroundColor = 'green';
            center.style.backgroundColor = 'green';
            bottomRight.style.backgroundColor = 'green';

            win.textContent = 'Player 2 won';

            lock = true;

            result.appendChild(win);
        }

        if (crosses[2] && crosses[4] && crosses[6])
        {
            const win = document.createElement('p');

            topRight.style.backgroundColor = 'green';
            center.style.backgroundColor = 'green';
            bottomLeft.style.backgroundColor = 'green';

            win.textContent = 'Player 2 won';

            lock = true;

            result.appendChild(win);
        }


    }




});