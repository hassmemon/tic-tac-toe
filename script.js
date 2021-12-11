let score = 0;
let player = 'O';
let victory = false;
box1 = 9;
box2 = 9;
box3 = 9;
box4 = 9;
box5 = 9;
box6 = 9;
box7 = 9;
box8 = 9;
box9 = 9;


 
document.querySelector('#box1').addEventListener("click", function(event) {
    if (box1 != 9) {
        alert("This box is taken.")
    }
    else {
    playerSelector()
    event.target.textContent = `${player}`;
    playTurn()
    if (player == "O") {
        box1 = 0} 
    else {
            box1 = 1
        }
    victoryCheck() 
    drawCheck()
    } 
})

document.querySelector('#box2').addEventListener("click", function(event) {
    if (box2 != 9) {
        alert("This box is taken.")
    }
    else {
    playerSelector()
    event.target.textContent = `${player}`;
    playTurn()
    if (player == "O") {
        box2 = 0} 
    else {
        box2 = 1
        }
    victoryCheck() 
    drawCheck()
    }
})

document.querySelector('#box3').addEventListener("click", function(event) {
    if (box3 != 9) {
        alert("This box is taken.")
    }
    else {
    playerSelector()
    event.target.textContent = `${player}`;
    playTurn()
    if (player == "O") {
        box3 = 0} 
    else {
        box3 = 1
        }
    victoryCheck() 
    drawCheck()
    }
})

document.querySelector('#box4').addEventListener("click", function(event) {
    if (box4 != 9) {
        alert("This box is taken.")
    }
    else {
    playerSelector()
    event.target.textContent = `${player}`;
    playTurn()
    if (player == "O") {
        box4 = 0} 
    else {
        box4 = 1
        }
    victoryCheck() 
    drawCheck()
    }
})

document.querySelector('#box5').addEventListener("click", function(event) {
    if (box5 != 9) {
        alert("This box is taken.")
    }
    else {
    playerSelector()
    event.target.textContent = `${player}`;
    playTurn()
    if (player == "O") {
        box5 = 0} 
    else {
        box5 = 1
        }
    victoryCheck() 
    drawCheck()
    }
})

document.querySelector('#box6').addEventListener("click", function(event) {
    if (box6 != 9) {
        alert("This box is taken.")
    }
    else {
    playerSelector()
    event.target.textContent = `${player}`;
    playTurn()
    if (player == "O") {
        box6 = 0} 
    else {
        box6 = 1
        }
    victoryCheck() 
    drawCheck()
    }
})

document.querySelector('#box7').addEventListener("click", function(event) {
    if (box7 != 9) {
        alert("This box is taken.")
    }
    else {
    playerSelector()
    event.target.textContent = `${player}`;
    playTurn()
    if (player == "O") {
        box7 = 0} 
    else {
        box7 = 1
        }
    victoryCheck() 
    drawCheck()
    }
 })

document.querySelector('#box8').addEventListener("click", function(event) {
    if (box8 != 9) {
        alert("This box is taken.")
    }
    else {
    playerSelector()
    event.target.textContent = `${player}`;
    playTurn()
    if (player == "O") {
        box8 = 0} 
    else {
        box8 = 1
        }
    victoryCheck() 
    drawCheck()
    }
})

document.querySelector('#box9').addEventListener("click", function(event) {
    if (box9 != 9) {
        alert("This box is taken.")
    }
    else {
    playerSelector()
    event.target.textContent = `${player}`;
    playTurn()
        if (player == "O") {
        box9 = 0} 
    else {
        box9 = 1
        }
    victoryCheck() 
    drawCheck()
    }
})

document.querySelector('#reset').addEventListener("click", function(event) {
    location.reload()
})


function playerSelector() {
    if (score % 2 == 1) {
        player = "X"
    } else {
        player = "O"
    }
}

function playTurn() {
    score += 1;
}

function victoryCheck() {
    if (box1 == 0 && box2 == 0 && box3 == 0 || box4 == 0 && box5 == 0 && box6 == 0 || box7 == 0 && box8 == 0 && box9 == 0 
    || box1 == 0 && box5 == 0 && box9 == 0  || box3 == 0 && box5 == 0 && box7 == 0
    || box1 == 0 && box4 == 0 && box7 == 0  || box2 == 0 && box5 == 0 && box8 == 0 || box3 == 0 && box6 == 0 && box9 == 0) {
    victory = true
    if (prompt('Noughts Wins! Play Again? Y/N') == "Y" || "y") {
        location.reload()
    }
    }
    else  if (box1 == 1 && box2 == 1 && box3 == 1 || box4 == 1 && box5 == 1 && box6 == 1 || box7 == 1 && box8 == 1 && box9 == 1 
    || box1 == 1 && box5 == 1 && box9 == 1  || box3 == 1 && box5 == 1 && box7 == 1
    || box1 == 1 && box4 == 1 && box7 == 1  || box2 == 1 && box5 == 1 && box8 == 1 || box3 == 1 && box6 == 1 && box9 == 1) {
    victory = true
    if (prompt('Cross Wins! Play Again? Y/N') == "Y" || "y") {
    location.reload()
    }
    }
}

function drawCheck() {
    if (score == 8 && victory == false) {
        if (prompt('Draw! Play Again? Y/N') == "Y" || "y") {
            location.reload()
    }
}}