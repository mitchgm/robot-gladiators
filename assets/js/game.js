var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;


// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
  // calculate the player attack
    enemyHealth = enemyHealth - playerAttack;
  // log a message to the console that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    )
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
        window.alert(playerName + " still has" + playerHealth + " health remaining");
    }
};

fight();















