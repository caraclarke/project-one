'use strict';

$(document).ready( function () {
  var turn = "X";
  getPlayers();

  $('#clear').on('click', function() {
    $("td.cell").html("");
  }); // end clear

  $("td.cell").on("click", function(cell){
    var cellElement = $("#cell");

    if (cellElement.html() != "X" && cellElement.html() != "O"){
      cellElement.html(turn);
      if (turn == "X"){
        $(this).html("X");
        turn = "O";
        addEventOutputTracking("Player Two", " - it is your turn. ", "Don't screw this up." + " X is up next.");
      } else{
        $(this).html("O");
        turn = "X";
        addEventOutputTracking("Player One", " - it is your turn. ", "Don't screw this up." + " O is up next.");
      }
      check();
    }

}); // end td

}); // end document.ready

function getPlayers () {
  var playerOne = prompt("What is your name?");
  var playerTwo = prompt("What is your name?");

  if (playerOne && playerTwo) {
    $("#playerOne").html("<p>" + playerOne + " - You are Player X! Your turn is first.</p>");
    $("#playerTwo").html("<p>" + playerTwo + " - You are Player O!</p>");
  }
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
    console.log("winner");
    addEventOutputTracking(cell1, " wins this round!", " Hooray.");
  } else if (cell4 == cell5 && cell5 == cell6 && cell4 == cell6 && cell4 !== "") {
    alert(cell4 + " Wins!");
    console.log("winner");
    addEventOutputTracking(cell4, " wins this round!", " Hooray.");
  } else if (cell7 == cell8 && cell8 == cell9 && cell7 == cell9 && cell7 !== "") {
    alert(cell7 + " Wins!");
    console.log("winner");
    addEventOutputTracking(cell7, " wins this round!", " Hooray.");
  } else if (cell1 == cell4 && cell4 == cell7 && cell1 == cell7 && cell1 !== "") {
    alert(cell1 + " Wins!");
    console.log("winner");
    addEventOutputTracking(cell1, " wins this round!", " Hooray.");
  } else if (cell2 == cell5 && cell5 == cell8 && cell2 == cell8 && cell2 !== "") {
    alert(cell2 + " Wins!");
    console.log("winner");
    addEventOutputTracking(cell2, " wins this round!", " Hooray.");
  } else if (cell3 == cell6 && cell6 == cell9 && cell3 == cell9 && cell3 !== "") {
    alert(cell3 + " Wins!");
    console.log("winner");
    addEventOutputTracking(cell3, " wins this round!", " Hooray.");
  } else if (cell1 == cell5 && cell5 == cell9 && cell1 == cell9 && cell1 !== "") {
    alert(cell1 + " Wins!");
    console.log("winner");
    addEventOutputTracking(cell1, " wins this round!", " Hooray.");
  } else if (cell3 == cell5 && cell5 == cell7 && cell3 == cell7 && cell3 !== "") {
    alert(cell3 + " Wins!");
    console.log("winner");
    addEventOutputTracking(cell3, " wins this round!", " Hooray.");
  } else if (cell1 !== "" && cell2 !== "" && cell3 !== "" && cell4 !== "" && cell5 !== "" && cell6 !== "" && cell7 !== "" && cell8 !== "" && cell9 !== "") {
    alert("Tie!");
    console.log("winner");
    addEventOutputTracking("Nobody wins!", " It's a cats game, ", " try harder next time.");
  }
}

function addEventOutputTracking (eventName, outputText, extraText) {
  var node;
  var pChildNode = document.createElement("p");

  node = document.getElementById("eventOutput");
  node.appendChild(pChildNode);
  pChildNode.appendChild(document.createTextNode("User Event: " + eventName + outputText + extraText));
}
