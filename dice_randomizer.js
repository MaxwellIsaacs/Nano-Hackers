  <p>Roll The Dice</p>

<button onclick="myFunction()">Click Me!</button>

<p id="roll"></p>

function myFunction() {
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("roll").innerHTML = x;
}
=