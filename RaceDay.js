let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly=true;
let runnersAge=18;
if(!registeredEarly && runnersAge>18)
{
  raceNumber+=1000;
}
if (runnersAge>18 && !registeredEarly){
  console.log(`Race will commence at 9:30am and your race number is ${raceNumber}`);
}
else if(runnersAge>18 && registeredEarly){
  console.log(`Race will commence at 11:00am and your race number is ${raceNumber}`);
}
else if (runnersAge<18)
  {
    console.log(`Race will commence at 12:30pm and your race number is ${raceNumber}`);
  }
else{
  console.log("See the registration desk");
}
