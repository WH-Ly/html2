function myFunction(event) {
  var x = event.keyCode;    
  var y = String.fromCharCode(x);
  document.getElementById("number").innerHTML = + y;
}