// Shafali Gupta
// SoftDev pd08
// K10 -- Ask Circles [Change || Die]
// 2019-03-14


var pic = document.getElementById('vimage');
var rect = pic.getBoundingClientRect();

var radius = 30;

var lastX = null;
var lastY = null;
var draw = function (e) {
  var xCord = e.clientX - rect.left;
  var yCord = e.clientY - rect.top;

  drawDot(xCord, yCord);
  lastX = xCord;
  lastY = yCord;
};

var drawDot = function (x, y){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", radius);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  c.addEventListener("click", changeC);
  pic.appendChild(c);
};
var changeC = function(e){
  this.setAttribute("fill", "blue");
  this.setAttribute("stroke", "black");
  e.stopPropagation();
  this.addEventListener("click", moveDot);
}

var moveDot = function(e){
  var randX = Math.floor(Math.random() * (pic.width.baseVal.value));
  var randY = Math.floor(Math.random() * (pic.height.baseVal.value));
  pic.removeChild(this);
  drawDot(randX, randY);
}

pic.addEventListener('click', draw);

var clear = function (e) {
  while (pic.lastChild){
    pic.removeChild(pic.lastChild);
  }
  var lastX = null;
  var lastY = null;
}

var but_clear = document.getElementById("but_clear");
but_clear.addEventListener('click', clear);
