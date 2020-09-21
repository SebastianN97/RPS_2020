
const rps = () => {


    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        const computerOptions = ["rock", "paper", "scissor"]
      
        options.forEach( option => {
            option.addEventListener("click", function() {
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            });
        });
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        
        // Getting a tie
        if(playerChoice === computerChoice) {
            winner.textContent = "You got tie!";
            return;
        };

        // Player have rock
        if(playerChoice === "rock") {
            if(computerChoice === "scissor") {
                winner.textContent = "You won!";
                return;
            }
            else {
                winner.textContent = "You lost!";
                return;
            };
        };

        // Player have paper
        if(playerChoice === "paper") {
            if(computerChoice === "scissor") {
                winner.textContent = "You lost!"
                return;
            }
            else {
                winner.textContent = "You won!"
                return;
            };
        };

        // Player have scissor
        if(playerChoice === "scissor") {
            if(computerChoice === "rock") {
                winner.textContent = "You lost!"
                return;
            };
            else {
                winner.textContent = "You won!"
                return;
            };
        };



    };

    playMatch();
    
};

// start rps 
rps();

