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
  };

  // Calling the inner functions!
  startGame();
};

// Starts the game function!
game();
