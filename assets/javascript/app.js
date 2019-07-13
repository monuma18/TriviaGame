
var questionAnswers = [
  {
    question: "who is MJ?",
    answers: ["1. He is a footbal player", "2. He is a rock star", "3. He is the GOAT", "4. He is a pilot"],
    rightAnswer: "3. He is the GOAT",
    animate: "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp"
  },
  {
    question: "who won the world series in 2016?",
    answers: ["1. Blackhawks", "2. Cubs", "3. Bears", "4. White Soxs"],
    rightAnswer: "2. Cubs",
    animate: "https://giphy.com/gifs/mlb-dance-cubs-vol-7HsmAvlq6lDlm"
  },

  {
    question: "who won NBA finals?",
    answers: ["1. Blackhawks", "2. Cubs", "3. Bears", "4. Raptors"],
    rightAnswer: "4. Raptors",
    animate: "https://giphy.com/gifs/mlb-dance-cubs-vol-7HsmAvlq6lDlm"
  },

  {
    question: "who won the Superbowl?",
    answers: ["1. Patriots", "2. Cubs", "3. Bears", "4. White Soxs"],
    rightAnswer: "1. Patriots",
    animate: "https://giphy.com/gifs/mlb-dance-cubs-vol-7HsmAvlq6lDlm"
  }
]


var correctAnswers = 0;
var inCorrectAnswers = 0;
var unAnswers = 0;
var index = 0;
var timer = 10;

var setIntervalID;

$("#showResult").hide();

function countDown() {
  
  $("#showtimer").html("<b>Time:</b> " + timer);
  timer = timer - 1;
 
console.log(timer)
  if (timer === -1) {

    $("#showResult").append("Results: "+"<br>")
    unAnswers= questionAnswers.length - correctAnswers - inCorrectAnswers ;
    console.log( unAnswers)
    $("#showResult").empty();
    $("#showResult").append("Correct Answers: "+ correctAnswers+"<br>");
    $("#showResult").append("Incorrect Answers: "+ inCorrectAnswers+"<br>");
    $("#showResult").append("Unanswer: "+  unAnswers)+"<br>";
    $("#btn").show();
    $("#showResult").show();
    $("#startGameDiv").hide();
    timer = 10;
    clearInterval(setIntervalID);


  }
  
}

$("#btn").on("click", function () {
  $("#showResult").hide();
  $("#startGameDiv").show();
  
  setIntervalID = setInterval(countDown, 1000);
  showTrivia()
  
  $("#btn").hide();
})

function showTrivia() {
 correctAnswers=0;
 inCorrectAnswers=0;
 unAnswers=0;

  $("#showPossibleAnswers").empty();
  for (index = 0; index < questionAnswers.length; index++) {
    $("#showPossibleAnswers").append(questionAnswers[index].question + "<br>");
    for (var i = 0; i < questionAnswers[index].answers.length; i++) {

    
      $("#showPossibleAnswers").append(
        "<div class='form-check'>" +
        "<input class='form-check-input getRadioValue' type='radio' name='gridRadios"+index+"' data-rightAnswer='"+questionAnswers[index].rightAnswer  +"' id='gridRadios" + index + "' value='" + questionAnswers[index].answers[i] + "'>" +
        "<label class='form-check-label' for='gridRadios" + index + "'>" +
        questionAnswers[index].answers[i] + "<br><br>" +
        "</label></div>"

      )
    }
    
   

  }

}

$(document).on("click",".getRadioValue",function(){
            
 console.log($(this).val() +" "+ $(this).attr("data-rightAnswer"))
var possibleAns=$(this).val();
var rightAsnwer=$(this).attr("data-rightAnswer");

   if (possibleAns===rightAsnwer){
       correctAnswers=correctAnswers+1;
      
   }
   else{
       inCorrectAnswers=inCorrectAnswers+1;
       
   }

})