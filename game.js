"use strict";

$(document).ready( function () {

  var tokenToPlayer = {'X':'','Y':''};
  var turn = "X";

  var getPlayers = function() {
    var playerOne = prompt("Welcome Player One! Enter your name below.");
    var playerTwo = prompt("Welcome Player Two! Enter your name below.");
    tokenToPlayer.X = playerOne;
    tokenToPlayer.Y = playerTwo;

    if (playerOne && playerTwo) {
      $(".playerOne").html("<h2>" + playerOne + "</h2><p>You are X! Your turn is first.</p>");
      $(".playerTwo").html("<h2>" + playerTwo + "</h2><p>You are O!</p>");
    }
  };

  getPlayers();

  var playerTurn = function () {
    $("td.cell").on("click", function(cell){
      var cellElement = $("#cell");

      if (cellElement.html() != "X" && cellElement.html() != "O") {
        cellElement.html(turn);
        if (turn == "X"){
          $(this).html("X");
          turn = "O";
          alert("Wow cool move.");
          addEventOutputTracking("Player One", " - it is your turn. <br>" + " O is up next.");
        } else {
          $(this).html("O");
          turn = "X";
          alert("Wow cool move.");
          addEventOutputTracking("Player Two", " - it is your turn. <br>" + " X is up next.");
        }
        check();
      }
    }); // end td
  }; // end playerTurn

  playerTurn();

  $('.clear').on('click', function() {
    $("td.cell").html("");
    $("#eventOutput").html("<h1>User Output</h1>");
  }); // end clear

  setTimeout(function(){
  $("body").on("mousedown", function() {
    var stop = prompt("For $8,000 a month I will stop. Yes or no?");

    if (stop.length === 3) {
      stopAnimation();
      $("body").off("mousedown");
    } else if (stop.length === 2) {
      alert("Enjoy.");
    } else {
      alert("Your input wasn't recognized. Please enter yes or no.");
    }
  });
}, 11500);

 // left side bar buttons

  $('.randomPlay').on('click', function() {
    alert("Wow you must have a sense of adventure.");

    // Check if board is full
    var found = false;
    while (!found) {
      var randomCellNumber = parseInt(Math.random() * 9) + 1;
      var cellElement = $("#" + randomCellNumber);

      if (cellElement.html() !== "X" && cellElement.html() !== "O") {
        if (turn == "X") {
          cellElement.html(turn);
          found = true;
          turn = "O";
        } else if (turn == "O") {
          cellElement.html(turn);
          found = true;
          turn = "X";
        }
      }
    }
  });

 $('.newGame').on('click', function() {
  $(".playerHistory").html("<h3>Winner History</h3>");
  var newUsers = prompt("Do you want to enter new users? Respond yes or no.");

  if (newUsers.length === 3) {
    getPlayers();
  } else if (newUsers.length === 2) {
    $("td.cell").html("");
    $(".aside").html("<h1>User Output</h1>");
  } else {
    alert("Your input wasn't recognized. Please enter yes or no.");
  }
}); // end newGame

 var check = function() {
  var win = false;
  var winnerName = "";
  var cells = [ [$("#1").html(),  $("#2").html(),   $("#3").html()],
              [$("#4").html(),  $("#5").html(),   $("#6").html()],
              [$("#7").html(),  $("#8").html(),   $("#9").html()]];

  // Tie
  var full = true;
  for (var i = 0; i < cells.length; i++) {
    for (var j = 0; j < cells[i].length; j++) {
      if (cells[i][j] === "") {
        full = false;
      }
    }
  }

  if (full) {
    alert("Tie!");
    addEventOutputTracking("<strong>Nobody wins!</strong>");
    gameHistory("Nobody won the game.");
    return;
  }

  for (var i = 0; i < cells.length && !win; i++) {
    // Check Horizontal, i means rows
    if (cells[i][0] !== "" && cells[i][0] == cells[i][1] && cells[i][1] == cells[i][2]) {
      win = true;
      winnerName = tokenToPlayer[cells[i][0]];
    } else { // Check Vertical
      // i now means columns
      win = (cells[0][i] !== "" && cells[0][i] == cells[1][i] && cells[1][i] == cells[2][i]);
      winnerName = tokenToPlayer[cells[0][i]];
    }
  }
  if (!win) {
    if (cells[1][1] !== "" && cells[0][0] == cells[1][1] && cells[1][1] == cells[2][2]) {
      win = true;
      winnerName = tokenToPlayer[cells[1][1]];
    } else if (cells[1][1] !== "" && cells[0][2]== cells[1][1] && cells[1][1] == cells[2][0]) {
      win = true;
      winnerName = tokenToPlayer[cells[1][1]];
    }
  }

  if (win) {
    alert(winnerName + " Wins!");
    addEventOutputTracking("<strong>" + winnerName, " wins this round!", " Oh yeah " + winnerName + ".</strong>");
    gameHistory(winnerName, " won.");
  }
} // end check

}); // end document.ready

var stopAnimation = function (element) {
  $("*").css("animation", "none");
}; // end stop animation

var addEventOutputTracking = function (eventName, outputText) {
  var node = $(".aside");
  var pChildNode = $("<p>");

  pChildNode.html(eventName + outputText);
  node.append(pChildNode);
}; // end AEOT

var gameHistory = function (winner, outputText) {
  var node = $(".playerHistory");
  var pChildNode = $("<p>");

  pChildNode.html(winner + outputText);
  node.append(pChildNode);
}; // end GH
