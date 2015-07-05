  function addEventOutputTracking (eventName, outputText, extraText) {
    var node;
    var pChildNode = document.createElement("p");

    node = document.getElementById("eventOutput");
    node.appendChild(pChildNode);
    pChildNode.appendChild(document.createTextNode("User Event: " + eventName + " - " + outputText + " " + extraText));
  }
