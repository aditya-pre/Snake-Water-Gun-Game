let score = 100;
function check() {
    if ((100 - score) < 5) {
        return "Contrats You Guessed very quickly";
    }
    else{
        return "";
    }
}

function makeChoice(choice) {
    score = score - 1;
    var computerChoice = generateComputerChoice();
    var resultText = document.getElementById("resultText");

    if (choice === computerChoice) {
        resultText.textContent = "It's a tie!";
    } else if (
        (choice === "snake" && computerChoice === "water") ||
        (choice === "water" && computerChoice === "gun") ||
        (choice === "gun" && computerChoice === "snake")
    ) {
        resultText.textContent = `You win! in ${100 - score} attempts ${check()}`;

    } else {
        resultText.textContent = "You lose!";
    }

    document.getElementById("playerSelection").style.display = "none";
    document.getElementById("result").style.display = "block";
}

function resetGame() {
    document.getElementById("playerSelection").style.display = "flex";
    document.getElementById("result").style.display = "none";
}

function generateComputerChoice() {
    var choices = ["snake", "water", "gun"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
