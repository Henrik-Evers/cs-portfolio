/* global draw ellipse mouseClicked rect p processing width height size background fill Processing text textSize noStroke strokeWeight stroke random*/
var canvasWidth = 1350;
var canvasHeight = 750;
var mouseX;
var mouseY;
var clicks = 0;
var lastClick;
function showCoords(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}
var sketch = function(processing) {with(processing) {size(canvasWidth, canvasHeight);background(255);
mouseClicked = function() {
    drawThing(mouseX,mouseY);
}
function drawThing(x,y) {
    for (var i = 5; i > 1; i-=1) {
        fill(random(0,255));
        ellipse(x,y,i*10,i*10);
    }
    clicks++;
    lastClick = Date.now();
}
draw = function() {
    if (clicks >= 15 && Date.now()-lastClick >= 1000) {
        background(random(0,255),random(0,255),random(0,255));
        for (var i = 0; i < 25; i++) {
            for (var j = 5; j > 1; j-=1) {
                fill(random(0,255));
                ellipse(random(0,1350),random(0,750),j*10,j*10);
            }
        }
    }
};

}};var p = new Processing(document.getElementById("output-canvas"), sketch);