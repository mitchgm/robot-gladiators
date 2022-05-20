var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
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
    }
  // calculate the enemy attack
        playerHealth = playerHealth - enemyAttack;
  //log a message to the console that it worked
        console.log(
            enemyName + " has attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )
    if (playerHealth <= 0){
        window.alert(playerName + " has died!");
    }    
    else {
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
};
fight();















