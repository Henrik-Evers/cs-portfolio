/* global draw ellipse rect p processing width height size background fill Processing text textSize random quad triangle*/
var mouseX;
var mouseY;
function showCoords(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}
var sketch = function(processing) {with(processing) {size(1350,750);background(255);

draw = function() {
    //Top Right
    if (mouseX >= 675 && mouseY < 375) {
        background(0,0,0);
        fill(Math.floor(random(0,255)),Math.floor(random(0,255)),Math.floor(random(0,255)));
        ellipse(mouseX,mouseY,50,50);
    }
    //Bottom Right
    if (mouseX >= 675 && mouseY >= 375) {
        background(Math.floor(random(0,255)),Math.floor(random(0,255)),Math.floor(random(0,255)));
        fill(Math.floor(random(0,255)),Math.floor(random(0,255)),Math.floor(random(0,255)));
        textSize(40);
        text("CIRCLES",600,300);
    }
    //Top Left
    if (mouseX < 675 && mouseY < 375) {
        background(0,0,0);
        fill(255,255,255);
        quad(625,325,605,375,725,425,745,375);
        triangle(650,275,605,425,500,300);
        textSize(40);
        text("Sanity",500,500);
        textSize(18);
        text("Wait for it...",500,530);
        if (Math.floor((Math.random() * 250) + 1) == 1) {
            fill(103,0,107);
            ellipse(337.5,187.5,250,250);
        }
    }
    //Botom Left
    if (mouseX < 675 && mouseY >= 375) {
        background(0,0,0);
        for (var i=0; i<100; i++) {
            fill(Math.floor(random(0,255)),Math.floor(random(0,255)),Math.floor(random(0,255)));
            rect(Math.floor(random(-25,650)),Math.floor(random(350,725)),50,50);
        }
    }
};
}};p = new Processing(document.getElementById("output-canvas"), sketch);