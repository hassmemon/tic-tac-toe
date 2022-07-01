let turns = 0;
let player = 'O';
let victory = false;
let boxes = [9, 9, 9, 9, 9, 9, 9, 9, 9];
const boxDivs = document.querySelectorAll('.box');

for (let i = 0; i < boxDivs.length; i++) {
    boxDivs[i].addEventListener('click', function (event) {
        const boxIndex = parseInt(event.target.dataset.index);
        if (boxes[boxIndex] != 9) {
            alert('This box is taken.');
        } else {
            playerSelector();
            event.target.textContent = `${player}`;
            playTurn();
            if (player == 'O') {
                boxes[boxIndex] = 0;
                document.querySelector('#player').innerHTML =
                    '<h2>Player 2, your turn. Place X in an empty box</h2>';
            } else {
                boxes[boxIndex] = 1;
                document.querySelector('#player').innerHTML =
                    '<h2>Player 1, your turn. Place O in an empty box</h2>';
            }
            victoryCheck();
            drawCheck();
        }
    });
}

document.querySelector('#reset').addEventListener('click', function (event) {
    location.reload();
});

function playerSelector() {
    if (turns == 0) {
        player = 'O';
    } else if (turns % 2 == 1) {
        player = 'X';
    } else {
        player = 'O';
    }
}

function playTurn() {
    turns += 1;
}

function victoryCheck() {
    if (
        (boxes[0] == 0 && boxes[1] == 0 && boxes[2] == 0) ||
        (boxes[3] == 0 && boxes[4] == 0 && boxes[5] == 0) ||
        (boxes[6] == 0 && boxes[7] == 0 && boxes[9] == 0) ||
        (boxes[0] == 0 && boxes[4] == 0 && boxes[8] == 0) ||
        (boxes[2] == 0 && boxes[4] == 0 && boxes[6] == 0) ||
        (boxes[0] == 0 && boxes[3] == 0 && boxes[6] == 0) ||
        (boxes[1] == 0 && boxes[4] == 0 && boxes[7] == 0) ||
        (boxes[2] == 0 && boxes[5] == 0 && boxes[8] == 0)
    ) {
        victory = true;
        if (prompt('Naughts wins. Play Again? Y/N') == 'Y' || 'y') {
            location.reload();
        }
    } else if (
        (boxes[0] == 1 && boxes[1] == 1 && boxes[2] == 1) ||
        (boxes[3] == 1 && boxes[4] == 1 && boxes[5] == 1) ||
        (boxes[6] == 1 && boxes[7] == 1 && boxes[9] == 1) ||
        (boxes[0] == 1 && boxes[4] == 1 && boxes[8] == 1) ||
        (boxes[2] == 1 && boxes[4] == 1 && boxes[6] == 1) ||
        (boxes[0] == 1 && boxes[3] == 1 && boxes[6] == 1) ||
        (boxes[1] == 1 && boxes[4] == 1 && boxes[7] == 1) ||
        (boxes[2] == 1 && boxes[5] == 1 && boxes[8] == 1)
    ) {
        victory = true;
        if (prompt('Cross wins. Play Again? Y/N') == 'Y' || 'y') {
            location.reload();
        }
    }
}

function drawCheck() {
    if (turns > 8 && victory == false) {
        if (prompt('Draw! Play Again? Y/N') == 'Y' || 'y') {
            location.reload();
        }
    }
}
