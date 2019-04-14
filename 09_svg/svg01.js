var pic = document.getElementById("vimage")

var c = document.createElementNS(
  "http://www.w3.org/2000/svg", "circle"
);
c.setAttribute( "cx", 0);
//cx = center of circle, x coordinate
c.setAttribute( "cy", 0);
//cx = center of circle, y coordinate

c.setAttribute( "r", "100");
// r = radius
c.setAttribute( "fill", "red");
c.setAttribte( "stroke", "black");

pic.appendChild(c);

//pic.addEventListener("click", clear );

//var clear = function clr_canvas(evt) {
  //pic.selectAll("*").remove();

//}
