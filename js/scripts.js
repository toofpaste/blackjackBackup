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
     console.log("   User: " + totalUser + "    BUST - - - - Dealer Wins");
   };
   if (totalUser === totalDeal){
     console.log("Dealer: " + totalDeal + "  /User: " + totalUser + "    TIE TIE TIE TIE TIE");
   };
   if (totalUser > totalDeal && totalUser <= 21){
     console.log("Dealer: " + totalDeal + "   /User: " + totalUser + "    USER WINS");
   };
   if (totalDeal > totalUser && totalDeal <= 21){
     console.log("Dealer: " + totalDeal + "   /User: " + totalUser + "    DEALER WINS HAHAHA");
   };
   if(totalDeal > 21 && totalUser <= 21){
     console.log("Dealer: " + totalDeal + "   /User: " + totalUser + "    USER WINS:  DEALER BUST");
   };
};

function bet(num, betTotal){


  $("#printBet").text("NO BET");
  $("#plus1").click(function(){
    $("button#dealC").show();
    num=1;
    betTotal+=1
    $("#printBet").text("BET: $" + betTotal);
    // takeMoney(num, betTotal);
  })

  $("#plus5").click(function(){
    $("button#dealC").show();
    num=5;
    betTotal+=5
    $("#printBet").text("BET: $" + betTotal);
    // takeMoney(num, betTotal);
  })

  $("#plus10").click(function(){
    $("button#dealC").show();
    num=10;
    betTotal+=10
    $("#printBet").text("BET: $" + betTotal);
    // takeMoney(num, betTotal);
    return betTotal;
  })

  $("#plus50").click(function(){
    $("button#dealC").show();
    num=50;
    betTotal+=50
    $("#printBet").text("BET: $" + betTotal);
    // takeMoney(num, betTotal);
  })

  $("#plus100").click(function(){
    $("button#dealC").show();
    num=100;
    betTotal+=100
    $("#printBet").text("BET: $" + betTotal);
    // takeMoney(num, betTotal);
  })
}


$(function(){
    var suitName = ["Spades" , "Hearts", "Diamonds", "Clubs"];
    var valueName = [2, 3, 4, 5, 6, 7 ,8 ,9, 10, "Jack", "Queen", "King", "Ace"];
    //               0  1  2  3  4  5  6  7  8     9        10      11      12

    var playerBank =1000;
    var totalUser = 0;
    var totalDeal = 0;
    var win = 0;
    var rngVal = 0;
    var rngSuit = 0;
    var num = 0;
    var betTotal = 0;
    
    bet(num, betTotal);


    $("button#dealC").click(function(){
      console.log(betTotal)
      $("#plus1").hide();
      $("#plus5").hide();
      $("#plus10").hide();
      $("#plus50").hide();
      $("#plus100").hide();
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
