let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");

const user_score = document.querySelector("#userPara");
const comp_score = document.querySelector("#compPara");

const generateCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const showWinner = (userwin,userChoice,compChoice) => {
    if (userwin) {
        userScore++;
        user_score.innerText=userScore;
        console.log("you won!");
        message.innerText = `you won ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    }
    else {
        compScore++;
        comp_score.innerText=compScore;
        console.log("You Lose!");
        message.innerText = `you Lose ${userChoice} beaten by ${compChoice}`;
        message.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    console.log("userchoice:",userChoice);
    // generate comp. choice
    const compChoice = generateCompChoice();
    console.log(compChoice);
    if (userChoice === compChoice) {
        console.log("Game Drawn!");
        message.innerText= `Same Same`;
        message.style.backgroundColor = "#081b31";

    }
    else {
        let userwin = true;
        if (userChoice === "rock") {
            // comp must have either paper or scissor
            userwin = compChoice === "scissor" ? true : false;
        }

        else if (userChoice === "paper") {
            userwin = compChoice === "rock" ? true : false;
        }
        else {
            userwin = compChoice === "paper" ? true : false;
        }
        showWinner(userwin,userChoice,compChoice);

    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //    console.log(`${userChoice} is clicked`);
        playGame(userChoice);
    })
})