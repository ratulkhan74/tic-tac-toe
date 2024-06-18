let boxs = document.querySelectorAll('.box');
let newGameBtn = document.querySelector('#new-game');
let winneingMessage = document.querySelector('#winneing_message');

let playerOne = true;

const winnigPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxs.forEach(function (box) {
    box.addEventListener('click', function () {
        if (playerOne) {
            this.innerText = 'X';
            playerOne = false;
        } else {
            this.innerText = 'O';
            playerOne = true;
        }
        this.style.pointerEvents = 'none';
        this.style.borderColor = 'red';

        // Check winner
        checkWinner();
    })
});

function winner(player) {
    let message = `Congratulations ${player} is winner`;
    winneingMessage.classList.remove('hide');
    winneingMessage.innerText = message;
    disabledEmptyBoxes();
}

function disabledEmptyBoxes() {
    for (let box of boxs) {
        box.style.pointerEvents = 'none';
        box.style.borderColor = 'red';
    }
}

function checkWinner() {
    for (let pattern of winnigPattern) {
        let posValOne = boxs[pattern[0]].innerText;
        let posValTwo = boxs[pattern[1]].innerText;
        let posValThree = boxs[pattern[2]].innerText;

        if (posValOne !== "" && posValTwo !== "" && posValThree !== "") {
            if (posValOne === posValTwo && posValTwo === posValThree) {
                if (posValOne === 'X') {
                    winner('player one');
                } else {
                    winner('player two');
                }
            }
        }
    }
}

function resetGame() {
    playerOne = true;
    boxs.forEach(function (box) {
        box.innerText = '';
        box.style.pointerEvents = '';
        box.style.borderColor = 'transparent';
        winneingMessage.classList.add('hide');
    })
}
newGameBtn.addEventListener('click', resetGame);
