// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less



var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Andorid", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
window.alert("Welcome to Robot Gladiators!");


  var fight = function(enemyName){
      // repeat and execute as long as enemy is alive
      while(enemyHealth > 0){
        var  promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
        if (promptFight.toLowerCase() == "fight"){
            
      // calculate the player attack
        enemyHealth = enemyHealth - playerAttack;
      // log a message to the console that it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        
      // check enemy health
         if (enemyHealth <= 0){
          window.alert(enemyName + " has died!");
        }  
         else {
          window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
          playerHealth = playerHealth - enemyAttack;
          // calculate the enemy attack
        }
      
            
      
        if (playerHealth <= 0){
            window.alert(playerName + " has died!");
        }    
        else {
            //log a message to the console that it worked
            console.log(
                enemyName + " has attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            )
            window.alert(playerName + " still has " + playerHealth + " health remaining");
        }
    
    
    // if player chooses to skip
    } else if (promptFight.toLocaleLowerCase() == "skip") {
        // confirm chocie to skip fight
        var confirmSkip = window.confirm("Are you sure you want to skip this fight?")
        // if yes, leave fight
                if (confirmSkip){
        window.alert(playerName + " has decdied to skip this fight. Goodbye!");
        // subtract monies from player
        playerMoney = playerMoney - 2;
        window.alert(playerName + " now has $" + playerMoney + " remaining")
    }
    // if no, ask again if they want to fight
                else {
        fight();
    }
    
       
      }
    else {
        window.alert("You need to choose a valid option. Try again!");
      }
      }
  }





for(var i = 0; i , enemyNames.length; i++){
   var pickedEnemyName = enemyNames[i];
   enemyHealth = 50;
    fight(enemyNames[i]);
}



if (enemyHealth > 0); // if the enemy-robot has health points, continue to fight



























