var c = document.getElementById('slate')
var context = c.getContext("2d")
var cleS = document.getElementById("cle")
var swi = document.getElementById("draw_state")
var state = 0;


var clear = function clr_canvas() {
    context.clearRect(0, 0, c.width, c.height)
}


var rectangle = function make_rect(x, y) {

    context.fillStyle = "#ff0000"
    context.fillRect(x, y, 100, 200)
};

var dot = function make_dot(x, y) {

    context.fillStyle = "#00ff00"
    context.beginPath()
    context.ellipse(x, y, 10, 10, 360, 0, 360)
    context.fill()
    console.log("ellipse made")

};
cleS.addEventListener("click", clear )


c.addEventListener('click', function(e) {
    if (state==0) {
      rectangle(e.offsetX, e.offsetY)
    }
    else{
      dot(e.offsetX, e.offsetY)
    }
})
swi.addEventListener('click', function() {
  if (state==0) {
        swi.innerHTML = "Draw dot"
        state = 1
    }
    else{
        swi.innerHTML = "Draw rect"
        state = 0
    }
})
