'use strict';

window.onload = function () {
  getPlayers();
  // addEventOutputTracking();
}

// var $ = require("jQuery");

var turn = "X";

function getPlayers () {
    var playerOne = prompt("What is your name?");
    var playerTwo = prompt("What is your name?");


    if (playerOne && playerTwo) {
      document.getElementById("playerOne").innerHTML = playerOne + " - You are Player X! Your turn is first.";
      document.getElementById("playerTwo").innerHTML = playerTwo + " - You are Player O!";
    }
};

function move(cell) {
  var cellElement = document.getElementById(cell);

  if (cellElement.innerHTML != "X" && cellElement.innerHTML != "O") {
    cellElement.innerHTML = turn;
    if (turn == "X") {
      turn = "O";
      addEventOutputTracking("Player Two", " - it is your turn. ", "Don't screw this up." + " X is up next.");
    } else {
      turn = "X";
      addEventOutputTracking("Player One", " - it is your turn. ", "Don't screw this up." + " O is up next.");
    }
    check();
  }

}

function check() {
  var cell1 = document.getElementById("1").innerHTML,
    cell2 = document.getElementById("2").innerHTML,
    cell3 = document.getElementById("3").innerHTML,
    cell4 = document.getElementById("4").innerHTML,
    cell5 = document.getElementById("5").innerHTML,
    cell6 = document.getElementById("6").innerHTML,
    cell7 = document.getElementById("7").innerHTML,
    cell8 = document.getElementById("8").innerHTML,
    cell9 = document.getElementById("9").innerHTML;

  if (cell1 == cell2 && cell2 == cell3 && cell1 == cell3 && cell1 != "") {
    alert(cell1 + " Wins!");
    addEventOutputTracking(cell1, " wins this round!", " Hooray.");
  } else if (cell4 == cell5 && cell5 == cell6 && cell4 == cell6 && cell4 != "") {
      alert(cell4 + " Wins!");
      addEventOutputTracking(cell4, " wins this round!", " Hooray.");
    } else if (cell7 == cell8 && cell8 == cell9 && cell7 == cell9 && cell7 != "") {
        alert(cell7 + " Wins!");
        addEventOutputTracking(cell7, " wins this round!", " Hooray.");
      } else if (cell1 == cell4 && cell4 == cell7 && cell1 == cell7 && cell1 != "") {
          alert(cell1 + " Wins!");
          addEventOutputTracking(cell1, " wins this round!", " Hooray.");
        } else if (cell2 == cell5 && cell5 == cell8 && cell2 == cell8 && cell2 != "") {
            alert(cell2 + " Wins!");
            addEventOutputTracking(cell2, " wins this round!", " Hooray.");
          } else if (cell3 == cell6 && cell6 == cell9 && cell3 == cell9 && cell3 != "") {
              alert(cell3 + " Wins!");
              addEventOutputTracking(cell3, " wins this round!", " Hooray.");
            } else if (cell1 == cell5 && cell5 == cell9 && cell1 == cell9 && cell1 != "") {
                alert(cell1 + " Wins!");
                addEventOutputTracking(cell1, " wins this round!", " Hooray.");
              } else if (cell3 == cell5 && cell5 == cell7 && cell3 == cell7 && cell3 != "") {
                  alert(cell3 + " Wins!");
                  addEventOutputTracking(cell3, " wins this round!", " Hooray.");
                } else if (cell1 != "" && cell2 != "" && cell3 != "" && cell4 != "" && cell5 != "" && cell6 != "" && cell7 != "" && cell8 != "" && cell9 != "") {
                    alert("Tie!");
                    addEventOutputTracking("Nobody wins!", " It's a cats game, ", " try harder next time.");
                  }
  }


// $('#clear').on('click', function() {
//   for (var i = 1; i < 10; i++) {
//     document.getElementById("gameboard").innerHTML = "";
//   }
// });

function addEventOutputTracking (eventName, outputText, extraText) {
  var node;
  var pChildNode = document.createElement("p");

    node = document.getElementById("eventOutput");
    node.appendChild(pChildNode);
    pChildNode.appendChild(document.createTextNode("User Event: " + eventName + outputText + extraText));
  }
