let userName="Adebowale";
userName? console.log(`Hello, ${userName}!`) : console.log("Hello!");
const userQuestion = "Will I become a werewolf tonight";
console.log(`${userName} asked ${userQuestion}`);
const randomNumber=Math.floor(Math.random()*8);
var eightBall="";
switch (randomNumber){
  case 0:
    console.log(eightBall+="It is certain");
    break;
  case 1: 
    console.log(eightBall+="It is decidedly so");
    break;
  case 2: 
    console.log(eightBall+="Reply hazy try again");
    break;
  case 3: 
    console.log(eightBall+="Cannot predict now");
    break;
  case 4:
    console.log(eightBall+="Do not count on it");
    break;
  case 5:
    console.log(eightBall+="My sources say no");
    break;
  case 6:
    console.log(eightBall+="Outlook not so good");
    break;
  case 7:
    console.log(eightBall+="Signs point to yes");
    break;
  
}
console.log(`The eight ball answered: ${eightBall}`);
