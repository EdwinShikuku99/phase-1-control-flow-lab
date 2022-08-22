
function scuberGreetingForFeet(randomValue){
  // Write your code here!
 let result;
 if (randomValue<=400){
  result = 'This one is on me!';
  return result;
 }
else if (randomValue>=2000 && randomValue<=2500){
  result = 'I will gladly take your thirty bucks.';
  return result;
}
else if (randomValue>2500){
  result = 'No can do.';
  return result;
}
  }


function ternaryCheckCity(city){
  // Write your code here!
  
   return city === "NYC" ? "Ok, sounds good."  : "No go." ;
 
}

function switchOnCharmFromTip(tip){
  // Write your code here!
 
  switch (tip){ 
    case "generous":
      return 'Thank you so much.';
          case "not as generous":
      return 'Thank you.';
          default:
      return 'Bye.';
      
  }
};

