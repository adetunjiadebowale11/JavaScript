let input="a whale of a deal!";
const vowels = ['a','e','i','o','u'];
let resultArray=[];

for(let i=0;i<input.length;i++){
  for(let j=0;j<vowels.length;j++){
    if(input[i]===vowels[j]){
      resultArray.push(input[i]);
    }
    if(input[i]==="e" || input[i]==="u"){
      resultArray.push(input[i]);
    }
     // console.log(i+","+j);
  }
  //console.log("i is "+i);
}
console.log(resultArray);
//To make it a proper whale language with each word capitalized
console.log(resultArray.join('').toUpperCase());