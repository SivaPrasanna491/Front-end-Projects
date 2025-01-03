function generateComputerChoice(){
    let choices = ["Bat", "Ball", "Stump"];
    return choices[Math.floor(Math.random() * 3)];
}
function generateUserChoice(callback){
    const choices = document.querySelectorAll(".gameChoices");  
    choices.forEach((choice) => {
        choice.addEventListener("click",() => {
            const choiceId = choice.getAttribute("id");
            console.log(`Your choice is ${choiceId}`);
            callback(choiceId);

        });
    });
}
function playGame(userChoice){
    const choiceOfComputer = generateComputerChoice();
    console.log(`The choice of computer is ${choiceOfComputer}`);
    if(userChoice == choiceOfComputer){
        document.querySelector("#winnerOfMatch").innerText = `It's a tie`;
        document.querySelector("#winnerOfMatch").style.backgroundColor = '#012951';
    } else if((userChoice == 'Bat' && choiceOfComputer == 'Ball') || (userChoice == 'Ball' && choiceOfComputer == 'Stump') || (userChoice == 'Stump' && choiceOfComputer == 'Bat')){
        document.querySelector("#winnerOfMatch").innerText= `User won!`;
        document.querySelector("#winnerOfMatch").style.backgroundColor = 'green';
    } else {
        document.querySelector("#winnerOfMatch").innerText = `Computer won!`;
        document.querySelector("#winnerOfMatch").style.backgroundColor = 'red';
    }
    
}
generateUserChoice(playGame);
