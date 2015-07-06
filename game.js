'use strict';

window.onload = function () {
  getPlayers();
  addEventOutputTracking();
}

// var $ = require("jQuery");

var turn = "X";

function getPlayers () {

  for (var i = 1; i <= 2; i++) {
    var userName = prompt("What is your name?");

    if (userName) {
      addEventOutputTracking("Nice to meet you " + userName + "! You are Player " + i);
    }
  }
};

function move(cell) {
  var cellElement = document.getElementById(cell);

  if (cellElement.innerHTML != "X" && cellElement.innerHTML != "O") {
    cellElement.innerHTML = turn;
    if (turn == "X") {
      turn = "O";
    } else {
      turn = "X";
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
  } else if (cell4 == cell5 && cell5 == cell6 && cell4 == cell6 && cell4 != "") {
      alert(cell4 + " Wins!");
    } else if (cell7 == cell8 && cell8 == cell9 && cell7 == cell9 && cell7 != "") {
        alert(cell7 + " Wins!");
      } else if (cell1 == cell4 && cell4 == cell7 && cell1 == cell7 && cell1 != "") {
          alert(cell1 + " Wins!");
        } else if (cell2 == cell5 && cell5 == cell8 && cell2 == cell8 && cell2 != "") {
            alert(cell2 + " Wins!");
          } else if (cell3 == cell6 && cell6 == cell9 && cell3 == cell9 && cell3 != "") {
              alert(cell3 + " Wins!");
            } else if (cell1 == cell5 && cell5 == cell9 && cell1 == cell9 && cell1 != "") {
                alert(cell1 + " Wins!");
              } else if (cell3 == cell5 && cell5 == cell7 && cell3 == cell7 && cell3 != "") {
                  alert(cell3 + " Wins!");
                } else if (cell1 != "" && cell2 != "" && cell3 != "" && cell4 != "" && cell5 != "" && cell6 != "" && cell7 != "" && cell8 != "" && cell9 != "") {
                    alert("Tie!");
                  }
  }

$('#clear').on('click', function() {
  for (var i = 1; i < 10; i++) {
    document.getElementById(i).innerHTML = "";
  }
});

function addEventOutputTracking (eventName, outputText, extraText) {
  var node;
  var pChildNode = document.createElement("p");

    node = document.getElementById("eventOutput");
    node.appendChild(pChildNode);
    pChildNode.appendChild(document.createTextNode("User Event: " + eventName + " - " + outputText + " " + extraText));
  }
