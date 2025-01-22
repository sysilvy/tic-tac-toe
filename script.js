let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let winnerMessageContainer = document.querySelector("#winner-message-container");
let winnerMessage = document.querySelector("#winner-message");

let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Check for a winner
function checkWinner() {
    let board = Array.from(boxes).map(box => box.innerText);
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            displayWinner(board[a]);
            return true;
        }
    }
    return false;
}

// Display the winner message
function displayWinner(winner) {
    winnerMessage.innerText = `Player ${winner} wins!`;
    winnerMessageContainer.classList.remove("hidden");
    boxes.forEach(box => box.disabled = true);
}

// Add click event to each box
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.innerText) return;

        box.innerText = turnO ? "O" : "X";
        box.disabled = true;
        if (checkWinner()) return;
        turnO = !turnO;
    });
});

// New game button functionality
newGame.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = '';
        box.disabled = false;
    });
    winnerMessageContainer.classList.add("hidden");
    turnO = true;
});

// Reset button functionality
reset.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = '';
        box.disabled = false;
    });
    winnerMessageContainer.classList.add("hidden");
    turnO = true;
});
