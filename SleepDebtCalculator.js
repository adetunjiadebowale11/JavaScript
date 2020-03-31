const getSleepHours=(day)=>{
  switch(day){
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 4;
      break;
    case "saturday":
      return 4;
      break;
    case "sunday":
      return 3;
      break;
  }
}

// Testing>>>>console.log(getSleepHours("tuesday"));

const getActualSleepHours = () =>  getSleepHours("monday") + getSleepHours("tuesday")+getSleepHours("wednesday")+getSleepHours('thursday')+getSleepHours("friday")+getSleepHours("saturday")+getSleepHours("sunday");

//Testing>>>console.log(getActualSleepHours());

const getIdealSleepHours=()=> {
  let idealHours=3;
  return idealHours*7;
}
const calculateSleepDebt=()=> {
  const actualSleepHours=getActualSleepHours();
  const idealSleepHours=getIdealSleepHours();
  if(actualSleepHours===idealSleepHours){
    console.log("Perfect amount of sleep");
  }
  else if(actualSleepHours>idealSleepHours){
    console.log("More sleep than needed. You over slept for: "+(actualSleepHours-idealSleepHours)+"hours");
  }
  else {
    console.log("Some rest gotten. You need still to sleep for: "+(idealSleepHours-actualSleepHours)+'hours');
    
  }
}
calculateSleepDebt();
