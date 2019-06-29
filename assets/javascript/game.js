//button to enable the directions to appear and disappear on the screen.
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

//----------Global Variables----------
var random=[];
var completePrice;
var log = console.log;
var win = 0;
var loss = 0;
var add = 0;

//----------Start Game---------
function startGame(){
  
  $(".critic").empty();

  add = 0;
  random=[];
  num = 0

	for(var i=0; i<10; i++){
        current = Math.floor(Math.random()*11) + 1;

        if(random.indexOf(current) < 0) {
            random.push(current);
        }
    }

log(random);
    completePrice = Math.floor(Math.random()* 70) +30;
    $("#completePrice").html(completePrice);
    console.log(completePrice);

    playGame();
  }

function playGame() {

    $("#c1").attr("value", random[0]);
    console.log($('#c1').attr('value'))
    $("#c2").attr("value", random[1]);
    console.log($('#c2').attr('value'))
    $("#c3").attr("value", random[2]);
    console.log($('#c3').attr('value'))
    $("#c4").attr("value", random[3]);
    console.log($('#c4').attr('value'))
    
 $(".critic").on('click',function() {
   console.log($(this).value);
   var num = parseInt($(this).attr('value'));
   add += num;
   console.log(add)
  $("#bidPrice").html(add);


  if(add > completePrice) {
    add = 0;
    $("bidPrice").html(add);
    alert("You Lose the Game!")
    loss ++; 
    log(loss);
    $('#loser').text(loss);
    startGame();
  }
  else if (add === completePrice) {
    add = 0;
    $("bidPrice").html(add);
    alert("You Win the Game!")
    win++
    $('#winner').text(win);
    log(win);
    startGame();
  }
 });
}

//----------Run Functions-------
startGame();