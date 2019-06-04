/* global draw ellipse rect p processing width height size background fill Processing text textSize noStroke strokeWeight stroke*/
function random(min,max) {
    Math.floor((Math.random() * max) + min);
}
function colourCheck(last,current) {
    if ((last > current && last - 25 < current) || (last < current && last + 25 > current)) {
        return true;
    }
    else {
        return false;
    }
}
var x3;
var y3 = 10;
var dir;
function movingCircle() {
    ellipse(x3,y3,10,10);
    if (dir = 0 && x3 > 10) {
        x3-=10;
    }
    else if (dir = 1 && x3 < 400) {
        x3+=10;
    }
    else if (x3 = 0) {
        dir = 1;
        x3+=10;
    }
    else if (x3=400) {
        dir = 0;
        x3-=10;
    }
}
function colouredStroke(fr,fg,fb) {
    strokeWeight(1);
    stroke((fr-10),(fg-10),(fb-10));
}
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
fill(0,0,0);
noStroke();
var x = 10;
var y = 10;
var r = random(0, 255);
var g = random(0, 255);
var b = random(0, 255);
var x2 = 390;
var y2 = 10;
var r2 = 0;
var g2 = 0;
var b2 = 0;
var r2_last = r;
var g2_last = g;
var b2_last = b;
draw = function() {
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    fill(r,g,b);
    //colouredStroke(r,g,b);
    ellipse(x,y,50,50);
    x+=10;
    y+=10;
    r2 = random(0,255);
    while (colourCheck(r2_last,r2) == false) {
        r2 = random(0,255);
    }
    g2 = random(0,255);
    while (colourCheck(g2_last,g2) == false) {
        g2 = random(0,255);
    }
    b2 = random(0,255);
    while (colourCheck(b2_last,b2) == false) {
        b2 = random(0,255);
    }
    fill(r2,g2,b2);
    r2_last = r2;
    g2_last = g2;
    b2_last = b2;
    //colouredStroke(r2,g2,b2);
    ellipse(x2,y2,50,50);
    x2-=10;
    y2+=10;
};
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
sketch = function(processing) {with(processing) {size(400, 400);background(255);
document.body.style.backgroundColor = 'white';
setTimeout(function() {background(0,0,0);}, 2000);
setTimeout(function() {document.body.style.backgroundColor = 'black'}, 2000);
setTimeout(function() {fill(255,255,255); textSize(40); text("Circles", 140, 200);}, 2000);
draw = function() {
    noStroke;
    setTimeout(function() {fill(random(0,255),random(0,255),random(0,255)); ellipse(200,200,400,400);}, 5000);
    setTimeout(function() {fill(random(0,255),random(0,255),random(0,255)); ellipse(200,200,300,300);}, 5000);
    setTimeout(function() {fill(random(0,255),random(0,255),random(0,255)); textSize(40); text("Circles", 140, 200);}, 5000);
    //setTimeout(movingCircle(), 2500);
};
}};var p = new Processing(document.getElementById("output-canvas"), sketch);