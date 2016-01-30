function playgame ()
{
  var playerName = prompt ("Please enter your name:");
  var random = Math.floor((Math.random() * 10) + 1);
  var guess = parseInt (prompt ("Please guess a number between 1 and 100."));
  var numTries = 1;
  do
  {
    if (random > guess )
    {
      guess = parseInt(prompt ("Too low, try again."));
      numTries = numTries + 1;
      if (numTries === 8)
      {
        alert ("Too many tries, GAMEOVER");
      }
    }
    else if (random < guess)
    {
      guess = parseInt(prompt ("Too high, try again."));
      numTries = numTries + 1;
      if (numTries === 8)
      {
        alert ("Too many tries, GAMEOVER");
      }
    }
  } while (random != guess && numTries <= 7);
  if (random === guess)
  {
    alert ("Great job" + playerName + "!");
  }
}



//This code works, but is inefficient//
function playgame ()
{
  var playerName = prompt("Please enter your name:");
  var random = Math.floor((Math.random() * 100) + 1);
  var numTries = 1;
  do
  {
    var guess = parseInt (prompt ("Please guess a number between 1 and 100."));
    if (isNaN(guess) || guess > 100 || guess < 1)
    {
      alert ("Please enter a valid number.");
    }
    else if (random === guess )
    {
      alert ("Great job "+playerName+"!");
    }
    else if (random > guess )
    {
      alert ("Too low");
      numTries = numTries + 1;
      if (numTries === 8)
      {
        alert ("Too many tries, GAMEOVER");
      }
    }
    else
    {
      alert ("Too high");
      numTries = numTries + 1;
      if (numTries === 8)
      {
        alert ("Too many tries, GAMEOVER");
      }
    }
  }
  while (random != guess && numTries <= 7) ;
}


//Fizz Buzz//

function fizzBuzz()
{
  var integer = 1;
  while (integer < 101)
  {
    if (integer%3 === 0 && integer%5 === 0)
    {
      console.log("FizzBuzz");
    }
    else if (integer%3 === 0)
    {
      console.log("Fizz");
    }
    else if (integer%5 === 0)
    {
      console.log("Buzz");
    }
    else {
      console.log(integer);
    }
    integer++;
  }
}

//What number's bigger?

function greaterNum(numOne , numTwo)
{
  if (numOne > numTwo)
  {
    console.log(numOne + " is the greater number.");
  }
  else if (numOne < numTwo)
  {
    console.log(numTwo + " is the greater number.");
  }
  else
  {
    console.log(numOne + " and " + numTwo + " are equal.");
  }
}


//World Translator//

function helloWorld (language)
{
  if (language === "de")
  {
    console.log("Hallo, Welt");
  }
  else if (language === "es")
  {
    console.log("Hola, Mundo");
  }
  else {
    console.log("Hello, World.");
  }
}

//Grade Assigner//

function assignGrade (score)
{
  if (score > 89)
  {
    console.log("You got an A!");
  }
  else if (score > 79)
  {
    console.log("You got a B!");
  }
  else if (score > 69)
  {
    console.log("You got a C!");
  }
  else if (score > 59)
  {
    console.log("You got a D");
  }
  else
  {
    console.log("You are a failure");
  }
}
