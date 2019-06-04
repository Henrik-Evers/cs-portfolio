/* global draw ellipse rect p processing width height size background fill Processing text textSize noStroke strokeWeight stroke random*/
var canvasWidth = 1350;
var canvasHeight = 750;
var r;
var g;
var b;
var con;
var w;
var wLast = 45;
function colourCheck(last,current,tolerance) {
    if (tolerance == undefined) {
        tolerance = 10;
    }
    if ((last >= current && last - tolerance <= current) || (last <= current && last + tolerance >= current)) {
        return true;
    }
    else {
        return false;
    }
}
var sketch = function(processing) {with(processing) {size(canvasWidth, canvasHeight);background(255);

var rLast = Math.floor(random(0,255));
var gLast = Math.floor(random(0,255));
var bLast = Math.floor(random(0,255));

var i=2;
var j=2;
for (i=1;i<(canvasWidth/50);i++) {
    for (j=1;j<(canvasHeight/50);j++) {
        r = Math.floor(random(0,255));
        con = colourCheck(rLast,r);
        while (con == false) {
            r = Math.floor(random(0,255));
            con = colourCheck(rLast,r);
        }
        g = Math.floor(random(0,255));
        con = colourCheck(gLast,g);
        while (con == false) {
            g = Math.floor(random(0,255));
            con = colourCheck(rLast,r);
        }
        b = Math.floor(random(0,255));
        con = colourCheck(bLast,b);
        while (con == false) {
            b = Math.floor(random(0,255));
            con = colourCheck(rLast,r);
        }
        rLast = r;
        gLast = g;
        bLast = b;
        fill(r,g,b);
        w = wLast * Math.floor(random(80,120))/100;
        noStroke();
        ellipse(i*50,j*50,w,w);
    }
}
}};var p = new Processing(document.getElementById("output-canvas"), sketch);