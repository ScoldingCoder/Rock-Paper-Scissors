// Your JavaScript goes here!
pScore =0;
cScore =0;

const buttons = document.querySelectorAll('button');


{

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
  result= game(button.id); //Plays round when player clicks on rock,paper or scissors

/* Checks for winner of each round, gives points to winner,
repeats game round until player or computer wins five rounds
*/
  checkResultW = result.search("Won")
  checkResultL = result.search("Lose")

   if(checkResultW != -1){
    pScore+=1;
  }

   if(checkResultL != -1){
    cScore+=1;
  }

 document.getElementById("playerScore").innerHTML = pScore;
 document.getElementById("computerScore").innerHTML = cScore;

 if(pScore==5){
    
    alert("Congratualtions, You're the Champion!");
    pScore = 0;
    cScore = 0;
    document.getElementById("playerScore").innerHTML = pScore;
    document.getElementById("computerScore").innerHTML = cScore;
   
    }
    if(cScore==5){
    
        alert("Better luck next time!");
        pScore = 0;
        cScore = 0;
        document.getElementById("playerScore").innerHTML = pScore;
        document.getElementById("computerScore").innerHTML = cScore;
       
        }
  
     
       
      });
   });
}

//Random Number Generator
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/*Function for step 4.1 : computerPlay:
Inputs:None
Returns: The Computers's option */
function computerPlay(){
//Generate a random number between 0 and 2
randomInt = getRandomInt(3);
//if the number is 0, return paper ,if the number is 1 ,return scissors ,if the number is 2, return rock

switch (randomInt){
    case 0:
    computerOption ="paper";
    break;

    case 1:
    computerOption ="scissors";
    break;

    case 2:
    computerOption ="rock";
    break;


}

return computerOption;

}

/*Function :playRound
Inputs:the Computers's option , The player's option
Returns: The result of the round*/
function playRound(User,Computer){
    
//If Computer chose rock then;
if (Computer == "rock") {
//If Player chose paper then
	//return You Won!
    if (User =="paper"){
        return ("You Won!");
    }
	//Else if Player choses rock then
	//return Tie!
    else if (User =="rock"){
        return ("Tie!");
    }
    //Else 
	//return You Lose! Rock beats Scissor!
    else {
        return "You Lose! Rock beats Scissors!"
    }
        
}

//If Computer chose paper then
if (Computer == "paper") {
//If Player chose paper then
	//return Tie!
    if (User =="paper"){
        return ("Tie!");
    }
	//Else if Player choses rock then
	//return "You Lose! Paper beats Rock!"
    else if (User =="rock"){
        return ("You Lose! Paper beats Rock!");
    }
    //Else 
	//return You Won!
    else {
        return ("You Won!")
    }
        
}

//If Computer chose scissors then
if (Computer == "scissors") {
//If Player chose paper then
	//return You Lose! Scissors beats Paper!
    if (User =="paper"){
        return ("You Lose! Scissors beats Paper!");
    }
	//Else if Player choses rock then
	//return You Won!
    else if (User =="rock"){
        return ("You Won!");
    }
    //Else 
	//return Tie!
    else {
        return ("Tie!")
    }
        
}

}
	
/*Function :game
Inputs:The player's option
Generates Computer's Option, Compares to player's option
Returns: The result of the round*/
function game(playerChoice){
userSelect =playerChoice;
computerSelect = computerPlay();
result = playRound(userSelect,computerSelect);
alert("You played: " + userSelect + "\nThe computer played: "+ computerSelect + "\n" + result);

return result;

}






