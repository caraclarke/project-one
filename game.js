'use strict';

$(document).ready( function () {
  getPlayers();
});

var turn = "X";

function getPlayers () {
  var playerOne = prompt("What is your name?");
  var playerTwo = prompt("What is your name?");

  if (playerOne && playerTwo) {
    $("#playerOne").html("<p>" + playerOne + " - You are Player X! Your turn is first.</p>");
    $("#playerTwo").html("<p>" + playerTwo + " - You are Player O!</p>");
  }
};

$("td").on("click", function(cell){

  var cellElement = $(cell);

  if (cellElement.html != "X" && cellElement.html != "O") {
    cellElement.html = turn;
    if (turn === "X") {
      turn = "O";
      addEventOutputTracking("Player Two", " - it is your turn. ", "Don't screw this up." + " X is up next.");
    } else {
      turn = "X";
      addEventOutputTracking("Player One", " - it is your turn. ", "Don't screw this up." + " O is up next.");
    }
    check();
  }
});

// function move(cell) {


// };

function check() {
  var cell1 = $("#1").html,
  cell2 = $("#2").html,
  cell3 = $("#3").html,
  cell4 = $("#4").html,
  cell5 = $("#5").html,
  cell6 = $("#6").html,
  cell7 = $("#7").html,
  cell8 = $("#8").html,
  cell9 = $("#9").html;

  if (cell1 == cell2 && cell2 == cell3 && cell1 == cell3 && cell1 != "") {
    prompt(cell1 + " Wins!");
    addEventOutputTracking(cell1, " wins this round!", " Hooray.");
  } else if (cell4 == cell5 && cell5 == cell6 && cell4 == cell6 && cell4 != "") {
    prompt(cell4 + " Wins!");
    addEventOutputTracking(cell4, " wins this round!", " Hooray.");
  } else if (cell7 == cell8 && cell8 == cell9 && cell7 == cell9 && cell7 != "") {
    prompt(cell7 + " Wins!");
    addEventOutputTracking(cell7, " wins this round!", " Hooray.");
  } else if (cell1 == cell4 && cell4 == cell7 && cell1 == cell7 && cell1 != "") {
    prompt(cell1 + " Wins!");
    addEventOutputTracking(cell1, " wins this round!", " Hooray.");
  } else if (cell2 == cell5 && cell5 == cell8 && cell2 == cell8 && cell2 != "") {
    prompt(cell2 + " Wins!");
    addEventOutputTracking(cell2, " wins this round!", " Hooray.");
  } else if (cell3 == cell6 && cell6 == cell9 && cell3 == cell9 && cell3 != "") {
    prompt(cell3 + " Wins!");
    addEventOutputTracking(cell3, " wins this round!", " Hooray.");
  } else if (cell1 == cell5 && cell5 == cell9 && cell1 == cell9 && cell1 != "") {
    prompt(cell1 + " Wins!");
    addEventOutputTracking(cell1, " wins this round!", " Hooray.");
  } else if (cell3 == cell5 && cell5 == cell7 && cell3 == cell7 && cell3 != "") {
    prompt(cell3 + " Wins!");
    addEventOutputTracking(cell3, " wins this round!", " Hooray.");
  } else if (cell1 != "" && cell2 != "" && cell3 != "" && cell4 != "" && cell5 != "" && cell6 != "" && cell7 != "" && cell8 != "" && cell9 != "") {
    prompt("Tie!");
    addEventOutputTracking("Nobody wins!", " It's a cats game, ", " try harder next time.");
  }
}


$('#clear').on('click', function() {
  for (var i = 1; i < 10; i++) {
    $('#').html("");
  }
});

function addEventOutputTracking (eventName, outputText, extraText) {
  var node;
  var pChildNode = $("<p></p>").text; // .text

  node = $("#eventOutput");
  node.append(pChildNode);
  pChildNode.append($.appendTo("User Event: " + eventName + outputText + extraText));
};
