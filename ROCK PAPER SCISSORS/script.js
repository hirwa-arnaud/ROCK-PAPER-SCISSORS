    const result = document.getElementById("result");
    const playerScoreEl = document.getElementById("playerScore");
    const computerScoreEl = document.getElementById("computerScore");

    const choices = ["rock", "paper", "scissors"];
    let playerScore = 0;
    let computerScore = 0;

    function play(playerChoice) {
      const computerChoice = choices[Math.floor(Math.random() * 3)];
      const winner = getWinner(playerChoice, computerChoice);

      if (winner === "player") {
        playerScore++;
        result.innerHTML = `You chose <strong>${playerChoice}</strong>, computer chose <strong>${computerChoice}</strong>. <span class="highlight">You win!</span>`;
      } else if (winner === "computer") {
        computerScore++;
        result.innerHTML = `You chose <strong>${playerChoice}</strong>, computer chose <strong>${computerChoice}</strong>. <span class="highlight">Computer wins!</span>`;
      } else {
        result.innerHTML = `You both chose <strong>${playerChoice}</strong>. <span class="highlight">It's a tie!</span>`;
      }

      playerScoreEl.textContent = playerScore;
      computerScoreEl.textContent = computerScore;
    }

    function getWinner(player, computer) {
      if (player === computer) return "tie";
      if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
      ) {
        return "player";
      }
      return "computer";
    }
