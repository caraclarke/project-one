'use strict';

var $ = require('jQuery');

$(document).ready( function () {
  getPlayers();
  gameClick();

  $('.clear').on('click', function() {
    $("td.cell").html("");
    $("#eventOutput").html("<h1>User Output</h1>");
  }); // end clear

 // left side bar buttons

 $('.randomPlay').on('click', function() {
  alert("Wow you must have a sense of adventure. This button makes a random move but it may not necessarily be a move for you. Hit OK to continue ya daredevil.");

  var playRandom = Math.random();
  var cellElement = $("#cell");

  if (cellElement.html() !== "X" && cellElement.html() !== "O") {
    if (playRandom < 0.11) {
      $("#4").html("O");
    } else if (0.12 < playRandom < 0.2) {
      $("#7").html("O");
    } else if (0.2 < playRandom < 0.3) {
      $("#3").html("X");
    } else if (0.3 < playRandom < 0.4) {
      $("#6").html("O");
    } else if (0.4 < playRandom < 0.5) {
      $("#8").html("O");
    } else if (0.5 < playRandom < 0.6) {
      alert("Don't be a pansy, just pick a square!");
    } else if (0.6 < playRandom < 0.7) {
      $("#9").html("X");
    } else if (0.7 < playRandom < 0.8) {
      $("#4").html("O");
    } else if (0.8 < playRandom < 0.9) {
      $("#2").html("X");
    } else if (0.9 < playRandom < 1) {
      $("#1").html("O");
    } // end else if
    check();
  }

}); // end randomPlay

$('.newGame').on('click', function() {
  $(".playerHistory").html("<h3>Winner History</h3>");
  var newUsers = prompt("Do you want to enter new users? Respond yes or no.");

  if (newUsers.length === 3) {
    alert("Well aren't we popular.");
    getPlayers();
  } else if (newUsers.length === 2) {
    alert("Must not have a lot of friends.");
    $("td.cell").html("");
    $(".aside").html("<h1>User Output</h1>");
  } else {
    alert("Your input wasn't recognized. It's a simple yes or no question dipshit.");
  }
}); // end newGame

setTimeout(function(){
  $("body").on("mousedown", function() {
    var stop = prompt("For $8,000 a month I will stop. Yes or no?");

    if (stop.length === 3) {
      stopAnimation();
      $("body").off("mousedown");
    } else if (stop.length === 2) {
      alert("Have it your way you sicko.");
    } else {
      alert("Your input wasn't recognized. It's a simple yes or no question dipshit.");
    }
  });
}, 11500); // changed from 11500

}); // end document.ready

function getPlayers () {
  var playerOne = prompt("Welcome Player One! Enter your name below.");
  var playerTwo = prompt("Welcome Player Two! Enter your name below.");

  if (playerOne && playerTwo) {
    $(".playerOne").html("<h2>" + playerOne + "</h2><p>You are X! Your turn is first.</p>");
    $(".playerTwo").html("<h2>" + playerTwo + "</h2><p>You are O!</p>");
  }
}

function gameClick () {
  var turn = "X";

  $("td.cell").on("click", function(cell){
    var cellElement = $("#cell");

    if (cellElement.html() != "X" && cellElement.html() != "O") {
      cellElement.html(turn);
      if (turn == "X"){
        $(this).html("X");
        turn = "O";
        alert("Wow cool move.");
        addEventOutputTracking("Player One", " - it is your turn. ", "Don't screw this up." + "<br>" + " O is up next.");
      } else{
        $(this).html("O");
        turn = "X";
        alert("Wow cool move.");
        addEventOutputTracking("Player Two", " - it is your turn. ", "Don't screw this up." + "<br>" + " X is up next.");
      }
      check();
      alert("Did you win yet?");
    }

  }); // end td
}

function check() {
  var cell1 = $("#1").html();
  var cell2 = $("#2").html();
  var cell3 = $("#3").html();
  var cell4 = $("#4").html();
  var cell5 = $("#5").html();
  var cell6 = $("#6").html();
  var cell7 = $("#7").html();
  var cell8 = $("#8").html();
  var cell9 = $("#9").html();

  if (cell1 == cell2 && cell2 == cell3 && cell1 == cell3 && cell1 !== "") {
    alert(cell1 + " Wins!");
    addEventOutputTracking("<strong>" + cell1, " wins this round!", " Fuck yeah " + cell1 + ".</strong>");
    gameHistory(cell1, " won. Suck it.");
  } else if (cell4 == cell5 && cell5 == cell6 && cell4 == cell6 && cell4 !== "") {
    alert(cell4 + " Wins!");
    addEventOutputTracking("<strong>" + cell4, " wins this round!", " Fuck yeah " + cell4 + ".</strong>");
    gameHistory(cell4, " won. Suck it.");
  } else if (cell7 == cell8 && cell8 == cell9 && cell7 == cell9 && cell7 !== "") {
    alert(cell7 + " Wins!");
    addEventOutputTracking("<strong>" + cell7, " wins this round!", " Fuck yeah " + cell7 + ".</strong>");
    gameHistory(cell7, " won. Suck it.");
  } else if (cell1 == cell4 && cell4 == cell7 && cell1 == cell7 && cell1 !== "") {
    alert(cell1 + " Wins!");
    addEventOutputTracking("<strong>" + cell1, " wins this round!", " Fuck yeah " + cell1 + ".</strong>");
    gameHistory(cell1, " won. Suck it.");
  } else if (cell2 == cell5 && cell5 == cell8 && cell2 == cell8 && cell2 !== "") {
    alert(cell2 + " Wins!");
    addEventOutputTracking("<strong>" + cell2, " wins this round!", " Fuck yeah " + cell2 + ".</strong>");
    gameHistory(cell2, " won. Suck it.");
  } else if (cell3 == cell6 && cell6 == cell9 && cell3 == cell9 && cell3 !== "") {
    alert(cell3 + " Wins!");
    addEventOutputTracking("<strong>" + cell3, " wins this round!", " Fuck yeah " + cell3 + ".</strong>");
    gameHistory(cell3, " won. Suck it.");
  } else if (cell1 == cell5 && cell5 == cell9 && cell1 == cell9 && cell1 !== "") {
    alert(cell1 + " Wins!");
    addEventOutputTracking("<strong>" + cell1, " wins this round!", " Fuck yeah " + cell1 + ".</strong>");
    gameHistory(cell1, " won. Suck it.");
  } else if (cell3 == cell5 && cell5 == cell7 && cell3 == cell7 && cell3 !== "") {
    alert(cell3 + " Wins!");
    addEventOutputTracking("<strong>" + cell3, " wins this round!", " Fuck yeah " + cell3 + ".</strong>");
    gameHistory(cell3, " won. Suck it.");
  } else if (cell1 !== "" && cell2 !== "" && cell3 !== "" && cell4 !== "" && cell5 !== "" && cell6 !== "" && cell7 !== "" && cell8 !== "" && cell9 !== "") {
    alert("Tie!");
    addEventOutputTracking("<strong>Nobody wins!", " Put some fucking effort in next time.", "</strong>");
    gameHistory("Nobody won the game. ", "Get it the fuck together.");
  }
} // end check

function stopAnimation (element) {
  $("*").css("animation", "none");
} // end stop animation

function addEventOutputTracking (eventName, outputText, extraText) {
  var node = $(".aside");
  var pChildNode = $("<p>");

  pChildNode.html(eventName + outputText + extraText);
  node.append(pChildNode);
} // end AEOT

function gameHistory (winner, outputText, extraText) {
  var node = $(".playerHistory");
  var pChildNode = $("<p>");

  pChildNode.html(winner + outputText);
  node.append(pChildNode);
} // end GH

