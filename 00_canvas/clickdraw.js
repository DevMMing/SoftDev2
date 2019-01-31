var c = document.getElementById('slate')
var context = c.getContext("2d")
var cleS = document.getElementById("cle")
var swi = document.getElementById("draw_state")
var state = 0;

var clear.addEventListener("click",function (e){
  ctx.clearRect(0,0,c.width,c.height);
});

var rectangle = function make_rect(x, y) {
    context.fillStyle = "#ffffff"
    context.fillRect(x, y, 100, 200)
    state = 1
};

var dot = function make_dot(x, y) {
    context.fillStyle = "#00ff00"
    context.beginPath()
    context.ellipse(x, y, 10, 10, 360, 0, 360)
    context.fill()
    state = 0
};

c.addEventListener('click', function(e) {
    if (state==0) {
        rectangle(e.clientX, e.ClientY)
    }
    else{
        dot(e.ClientX, e.ClientY)
    }
})
swi.addEventListener('click', function() {
  if (state==0) {
        swi.innerHTML = "Draw dot"
    }
    else{
        swi.innerHTML = "Draw rect"
    }
})
