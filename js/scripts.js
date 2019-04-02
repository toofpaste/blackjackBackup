
$(function(){
    var suit = ["Spades" , "Hearts", "Diamonds", "Clubs"];
    var values = [2, 3, 4, 5, 6, 7 ,8 ,9, 10, "Jack", "Queen", "King", "Ace"];
    //            0  1  2  3  4  5  6  7  8     9        10      11      12
    var userCard = [];
    var dealCard =[];
    var totalUser = 0;
    var totalDeal = 0;

    var win = 0;



      $("button#spades").click(function(){

            var x = 0;
            while(x < 2){
              var rngVal = Math.floor(Math.random() * 13);
              var rngSuit = Math.floor(Math.random() * 4);
              if (rngVal > 8 && rngVal < 12){
                userCard.push(10);
              }else if (rngVal === 12){
                userCard.push(11);
              }else if (rngVal <= 8){
                userCard.push(rngVal + 2);
              };

              $("ul." + suit[0]).prepend("<li>"+ values[rngVal] + " of " + suit[rngSuit] + "</li>")
              x += 1;
            };

              var rngVal = Math.floor(Math.random() * 13);
              var rngSuit = Math.floor(Math.random() * 4);
              if (rngVal > 8 && rngVal < 12){
                dealCard.push(10);
              }else if (rngVal === 12){
                dealCard.push(11);
              }else if (rngVal <= 8){
                dealCard.push(rngVal + 2);
              };

              $("ul." + suit[1]).prepend("<li>"+ values[rngVal] + " of " + suit[rngSuit] + "</li>");

              $("button#hit").click(function(){
                  var rngVal = Math.floor(Math.random() * 13);
                  var rngSuit = Math.floor(Math.random() * 4);
                  if (rngVal > 8 && rngVal < 12){
                    userCard.push(10);
                  }else if (rngVal === 12){
                    userCard.push(11);
                  }else if (rngVal <= 8){
                    userCard.push(rngVal + 2);
                  };
                  totalUser += userCard[(userCard.length - 1)];
                  $("ul." + suit[0]).prepend("<li>"+ values[rngVal] + " of " + suit[rngSuit] + "</li>");

              });
              for(var u = 0; u < userCard.length; u += 1){
                totalUser += userCard[u];
              };

              for(var d = 0; d < dealCard.length; d += 1){
                totalDeal += dealCard[d];
              };
              $("button#stay").click(function(){
                  var rngVal = Math.floor(Math.random() * 13);
                  var rngSuit = Math.floor(Math.random() * 4);
                  if (rngVal > 8 && rngVal < 12){
                    dealCard.push(10);
                  }else if (rngVal === 12){
                    dealCard.push(11);
                  }else if (rngVal <= 8){
                    dealCard.push(rngVal + 2);
                  };






                   while(totalDeal < 17){
                     var rngVal = Math.floor(Math.random() * 13);
                     var rngSuit = Math.floor(Math.random() * 4);
                     if (rngVal > 8 && rngVal < 12){
                       dealCard.push(10);
                     }else if (rngVal === 12){
                       dealCard.push(11);
                     }else if (rngVal <= 8){
                       dealCard.push(rngVal + 2);
                     };
                     $("ul." + suit[1]).prepend("<li>"+ values[rngVal] + " of " + suit[rngSuit] + "</li>");
                     totalDeal += dealCard[(dealCard.length - 1)];
                   };


                  if(totalDeal >= 17){

                   if (totalUser >= 22){
                     alert("   User: " + totalUser + "    BUST - - - - Dealer Wins")
                   };
                   if (totalUser === totalDeal){
                     alert("Dealer: " + totalDeal + "  /User: " + totalUser + "    TIE TIE TIE TIE TIE")
                   };
                   if (totalUser > totalDeal && totalUser <= 21){
                     alert("Dealer: " + totalDeal + "   /User: " + totalUser + "    USER WINS")
                   };
                   if (totalDeal > totalUser && totalDeal <= 21){
                     alert("Dealer: " + totalDeal + "   /User: " + totalUser + "    DEALER WINS HAHAHA");
                   };
                   if(totalDeal > 21 && totalUser <= 21){
                     alert("Dealer: " + totalDeal + "   /User: " + totalUser + "    USER WINS:  DEALER BUST");
                   };
                 };




              });



          });

});
