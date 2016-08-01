var Memory = require('./../js/memory-model.js').memoryModule;

$(document).ready(function() {
  var memory = new Memory(5);
  var value1 = 0;
  var value2 = 0;
  var winCounter = 0;
  memory.createArray();
  var shuffledArray = memory.shuffle();
  shuffledArray.forEach(function(element){
    $(".output").append("<button type='button' value='"+ element +"' class='btn " + element + "'><span class='hidden'>" + element + "</span></div>");
  });
  $(".btn").click(function(){
    if ($(this).find('> span').hasClass('hidden')) {
      $(this).find('> span').addClass("show");
      $(this).find('> span').removeClass("hidden");
      if (value1 === 0) {
        value1 = parseInt($(this).val());
      } else {
        value2 = parseInt($(this).val());
      }
      if (value1 !== 0 && value2 !== 0) {
        if (value1 !== value2) {
          alert('try again');
          $(".show").addClass("hidden");
          $(".show").removeClass("show");
        } else {
          $(".show").removeClass("show");
          winCounter+=1;
          if (winCounter === memory.number) {
            alert('you win');
          }
        }
        value1 = 0;
        value2 = 0;
      }
    }
  });
});
