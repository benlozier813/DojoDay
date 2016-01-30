var answerArray = ["Yes", "Maybe", "No", "Bury your head in the sand instead", "You suck", "Try again later"]
//var userInput = prompt("Ask me a question")


function magicAnswer(userA){
  num = Math.floor(Math.random()*answerArray.length);
    alert(userA + " " + answerArray[num])}

function magicEight(){
  var userInput = ""

    do{userInput = prompt("Ask me a question");
    if(userInput.toLowerCase() != "stop"){
      magicAnswer(userInput)
    }
  } while(userInput.toLowerCase() != "stop");
}
