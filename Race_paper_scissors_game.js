//create a function that takes a single parameter
const getUserChoice=(userInput)=> {
  //converts user input to lowercase
  userInput=userInput.toLowerCase();
  //control statement to check for errors
  if(userInput==="rock" || userInput==="paper"|| userInput==="scissors" || userInput==="bomb"){
    return userInput;
  }
  else{
    console.log("Error: Please enter rock or paper or scissors!");
  }
}
// To test the control ==>console.log(getUserChoice("biro"));
//The program for the computer's choice
const getComputerChoice=()=> {
  let randomNumber=Math.floor(Math.random()*3);
  switch (randomNumber){
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "invalid entry: enter a number btw 0 & 2";
      break;
  }
}
// To test the computer //choice==>console.log(getComputerChoice());
//To determine the winner of the game
const determineWinner=(userChoice,computerChoice)=>{
  if(userChoice==="bomb"){ // a cheat code so that whenever the //user enters-bomb....he/she always wins.
    return "The user WON!"
  }
  if(userChoice===computerChoice){
    return "Game was a tie";
  }
if (userChoice==='rock'){
  if(computerChoice==='paper'){
    return "The computer won";
  } else { return "The user won!";}
}
  if(userChoice==="paper"){
    if(computerChoice==="scissors"){
      return "The computer won!";
    }else {
      return "The user won!";
    }
  }
    if(userChoice==="scissors"){
    if(computerChoice==="rock"){
      return "The computer won!";
    }else {
      return "The user won!";
    }
  }
}
//testing the winner function
//console.log(determineWinner("rock","scissors"));
//Function to play game
function playGame(){
  const userChoice=getUserChoice("bomb");
  console.log("Your threw: "+userChoice);
  const computerChoice=getComputerChoice();
  console.log("The computer threw:"+computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
  
}
playGame();
//
