
$(function(){
    var suit = ["Spades" , "Hearts", "Diamonds", "Clubs"];
    var values = [2, 3, 4, 5, 6, 7 ,8 ,9, 10, "Jack", "Queen", "King", "Ace"];
    //            0  1  2  3  4  5  6  7  8     9        10      11      12
    // var rngVal = Math.floor(Math.random() * 13);
    // var rngSuit = Math.floor(Math.random() * 4);


      $("button#spades").click(function(){

          for(var i = 0; i <= 3; i += 1){
            var x = 0;
            while(x < values.length){

              $("ul." + suit[i]).prepend("<li>"+ values[x] + " of " + suit[i] + "</li>")
              x += 1;
            };
          };
      });
});
