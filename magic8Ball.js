

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
  'Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.',
  'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
  'I hope so.', 'Never!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Pfft.',
  'Sorry, bucko.', 'Hell, yes.', 'Hell to the no.', 'The future is bleak.',
  'The future is uncertain.', 'I would rather not say.', 'Who cares?',
  'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!'];

// document.getElementById('answerButton').onclick = function () {
// var answer = answers[Math.floor(Math.random() * answers.length)];
//     document.getElementById('answerContainer').innerHTML = answer;
// };