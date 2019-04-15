function randVal(){
  return Math.floor(Math.random() * 13);
};
function randSuit(){
  return Math.floor(Math.random() * 4);
};


function dealUser(value, suit, suitName, valueName){
  var imagePath = ["spade", "diam", "heart", "club"];
    $("ul.user").append("<li><img src = 'img/" + imagePath[suit] + value + ".jpg'" + " of " + suitName[suit] + "</li>");
};
function dealDeal(value, suit, suitName, valueName){
  var totalDeal = 0;
  var imagePath = ["spade", "diam", "heart", "club"];
  $("ul.deal").append("<li><img src = 'img/" + imagePath[suit] + value + ".jpg'" + " of " + suitName[suit] + "</li>");
};
function addCard(rngVal){
  if(rngVal <= 8){
    return (rngVal + 2);
  }else if(rngVal > 8 && rngVal <= 11){
     return 10;
  }else if(rngVal === 12){
    return 11;
  };
};

function checkWin(totalUser, totalDeal){
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

$(function(){
    var suitName = ["Spades" , "Hearts", "Diamonds", "Clubs"];
    var valueName = [2, 3, 4, 5, 6, 7 ,8 ,9, 10, "Jack", "Queen", "King", "Ace"];
    //               0  1  2  3  4  5  6  7  8     9        10      11      12
    var totalUser = 0;
    var totalDeal = 0;
    var win = 0;
    var rngVal = 0;
    var rngSuit = 0;
    $("button#dealC").click(function(){
      $("button#dealC").hide();
      $("button#hit").show();
      $("button#stay").show();
        rngVal = randVal();
        totalUser += addCard(rngVal);
        rngSuit = randSuit();
        dealUser(rngVal, rngSuit, suitName, valueName);
        rngVal = randVal();
        totalUser += addCard(rngVal);
        rngSuit = randSuit();
        dealUser(rngVal, rngSuit, suitName, valueName);
        rngVal = randVal();
        totalDeal += addCard(rngVal);
        rngSuit = randSuit();
        dealDeal(rngVal, rngSuit, suitName, valueName);
      });
      $("button#hit").click(function(){
        if(totalUser <= 21){
        rngVal = randVal();
        totalUser += addCard(rngVal);
        rngSuit = randSuit();
        dealUser(rngVal, rngSuit, suitName, valueName);
        };
      });
      $("button#stay").click(function(){
        while(totalDeal <= 16){
        rngVal = randVal();
        totalDeal += addCard(rngVal);
        rngSuit = randSuit();
        dealDeal(rngVal, rngSuit, suitName, valueName);
      };
      checkWin(totalUser, totalDeal);
      });


});
