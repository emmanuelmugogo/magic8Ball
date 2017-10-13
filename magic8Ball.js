

$(document).ready(function() {
            $("#triangle").hide();
            $("#answerContainer").hide();

            $("#button").click(function(){
               $(".sphere").effect( "shake", {times:4}, 1000 );
               $("#number8").hide().delay(4500).fadeIn();
               $("#triangle").show(1000).delay(3000).fadeOut();
               $("#answerContainer").show(1000).delay(1500).fadeOut();
               $("input:text").fadeOut(1000);
               $("input:text").fadeIn(2000);

               var answer = answers[Math.floor(Math.random() * answers.length)];
              document.getElementById('answerContainer').innerHTML = answer;
            });

          
        
         });


var answers = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
  ];

// document.getElementById('answerButton').onclick = function () {
// var answer = answers[Math.floor(Math.random() * answers.length)];
//     document.getElementById('answerContainer').innerHTML = answer;
// };
