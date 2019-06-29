//------------button to enable the directions to appear and disappear on the screen.
function rules() {
    var x = document.getElementById("rules");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function collected() {
    var x = document.getElementById("collection");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//---------Array of Images------------

paintings = ["Baby.jpg", "caspar.jpg", "composition.jpg", "Dali.jpg", "Fishermen.jpg", "Frida.jpg", "Klimit.jpg", "koi.jpg", "Kyu-Hak.jpg", "Monet.jpg", "Night.jpg", "Perez.jpg", "Picasso.jpg", "Scream.jpg", "Starry.jpg", "Suikoden.jpg", "Warhol.jpg", "Wassily.jpg", "Wave.jpg", "Xu.jpg"];

//----------Global Variables----------
var random=[];
var completePrice;
var log = console.log;
var win = 0;
var loss = 0;
var add = 0;
var randPaint;
var museum = [];

//----------Start Game---------
function startGame(){
  
  $(".critic").empty();

  add = 0;
  random=[];
  num = 0;

//randomize the bidder values
	for(var i=0; i<10; i++){
        current = Math.floor(Math.random()*11) + 1;

        if(random.indexOf(current) < 0) {
            random.push(current);
        }
    }

//randomize the asking price
log(random);
    completePrice = Math.floor(Math.random()* 70) +30;
    $("#completePrice").html(completePrice);
    console.log(completePrice);

    //randomize the paintings each round
    randPaint = Math.floor(Math.random() * paintings.length);
    log ("Paint ID: " + paintings[randPaint]);
    $('#paintId').attr('src', "assets/images/"+paintings[randPaint]);


    playGame();
  }


function playGame() {

    $("#c1").attr("value", random[0]);
    console.log($('#c1').attr('value'));
    $("#c2").attr("value", random[1]);
    console.log($('#c2').attr('value'));
    $("#c3").attr("value", random[2]);
    console.log($('#c3').attr('value'));
    $("#c4").attr("value", random[3]);
    console.log($('#c4').attr('value'));
    
 $(".critic").on('click',function() {
   console.log($(this).value);
   var num = parseInt($(this).attr('value'));
   log("parseInt: " + num);
   log ("add before function: "+ add)
   add += num;
   console.log("this is the click add: " + add);
  $("#bidPrice").html(add);


  if(add > completePrice) {
    log("You lose add: " + add);
    //reset
    add = 0;
    $("#bidPrice").html(add);
    log("This isn't working correctly: " +add+"close");

    //create pop-up loser screen
    $("#losing-popup, .popup-loser-content").addClass("active");
    
    loss ++; 
    log(loss);
    $('#loser').text(loss);
    startGame();
  }

  else if (add === completePrice) {
    //reset
    add = 0;
    $("#bidPrice").html(add);
    log("This isn't working correctly: " +add +"close");
   
    //create pop-up winner screen
    $("#winning-popup, .popup-winner-content").addClass("active");

    win++;
    $('#winner').text(win);
    log(win);
    museumCollection();
    startGame();
  }
 });
}

function museumCollection() {

    log("You should see this 1st")
    $('#museumCollection').append('<img src="assets/images/'+paintings[randPaint]+'" ><br>');
    museum = paintings[randPaint];
}

//----------Run Functions--------
startGame();



//----------Pop Up functions--------
//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function() {
  $(".popup-overlay, .popup-content").removeClass("active");
});