const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Function to start the game!
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // Play a match!
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    // Computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        // The computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        // Here is where we call compare hands
        compareHands(this.textContent, computerChoice);
        // Update images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
      });
    });
  };

  // update Score
  const updatescore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  // Compare who is winning
  const compareHands = (playerChoice, computerChoice) => {
    // Update the text!
    const winner = document.querySelector(".winner");
    // Checking for a tie.
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie!";
      return;
    }

    // Check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Players wins!";
        pScore++;
        updatescore();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updatescore();
        return;
      }
    }

    // Check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer wins!";
        cScore++;
        return;
      } else {
        winner.textContent = "Player wins!";
        pScore++;
        updatescore();
        return;
      }
    }

    // Check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer wins!";
        cScore++;
        updatescore();
        return;
      } else {
        winner.textContent = "Player wins!";
        pScore++;
        updatescore();
        return;
      }
    }
  };

  // Calling the inner functions!
  startGame();
  playMatch();
};

// Starts the game function!
game();
