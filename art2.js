/* global draw ellipse rect p processing width height size background fill Processing text textSize noStroke strokeWeight stroke random*/
var canvasWidth = 1360;
var canvasHeight = 760;
var mouseX = 0;
var mouseY = 0;
var mousePixelX = 0;
var mousePixelY = 0;
var pixelScreenSize = 20;
var pixelSize = 20;
var pixelWidth = canvasWidth / pixelScreenSize;
var pixelHeight = canvasHeight / pixelScreenSize;
var pixels = [];
function showCoords(event) { // Finds the mouse coordinates in Pixels (on display) and Pixels (my precious little rectangles)
    mouseX = event.clientX;
    mouseY = event.clientY;
    mousePixelX = Math.round(mouseX/pixelScreenSize)-1;
    mousePixelY = Math.round(mouseY/pixelScreenSize)-1;
}
var sketch = function(processing) {with(processing) {size(canvasWidth, canvasHeight);background(255);
var Pixel;
Pixel = function(x1,y1,w,h,type) { // Constructor for Pixels
    this.x = x1;
    this.y = y1;
    this.w = w;
    this.h = h;
    this.type = type;
    if (type == 'water') {
        this.r = random(50,55);
        this.g = random(50,60);
        this.b = random(230,255);
    }
    else if (type == 'sand') {
        this.r = 255;
        this.g = random(204,230);
        this.b = random(38,147);
    }
    else if (type == 'forest') {
        this.r = random(0,50);
        this.g = random(110,130);
        this.b = random(0,75);
    }
};
for (var i = 0; i < pixelWidth; i++) {
    for (var j = 0; j < pixelHeight; j++) {
        // fill(0);
        // rect(i*pixelScreenSize,j*pixelScreenSize,pixelScreenSize,pixelScreenSize);
        noStroke();
        var pixelType;
        var x = Math.floor(random(0,150));
        if (j > 0 && i > 0) {
            if (Math.floor(random(0,100)) < 95) {
                if (pixels[(((i+0)*(pixelHeight))+j-1)].type == 'water' && pixels[(((i-1)*(pixelHeight))+j+0)].type == 'water') { // Top and Left are Water
                    switch(x) {
                        case 1:
                        case 2:
                        case 3:
                            pixelType = 'water';
                            break;
                        default:
                            pixelType = 'water';
                    }
                }
                else if ((pixels[(((i-1)*(pixelHeight))+j+0)].type == 'forest' || pixels[(((i+0)*(pixelHeight))+j-1)].type == 'forest') && !(pixels[(((i-1)*(pixelHeight))+j+0)].type == 'forest' && pixels[(((i+0)*(pixelHeight))+j-1)].type == 'forest')) { // Top or Left is Forest
                    x = Math.floor(random(1,5));
                    switch(x) {
                        case 2:
                            pixelType = 'forest';
                            break;
                        default:
                            pixelType = 'sand';
                    }
                }
                else if (pixels[(((i+0)*(pixelHeight))+j-1)].type == 'sand' && pixels[(((i+0)*(pixelHeight))+j-1)].type == 'sand') { // Top and Left are Sand
                    if (x != 1 && x != 2 && x != 3) {
                        x = Math.floor(random(0,10));
                    }
                    switch(x) {
                        case 1:
                        case 2:
                        case 3:
                            pixelType = 'sand';
                            break;
                        case 8:
                        case 9:
                            pixelType = 'forest';
                            break;
                        default:
                            pixelType = 'water';
                    }
                }
                else if (pixels[(((i-1)*(pixelHeight))+j+0)].type == 'forest' && pixels[(((i+0)*(pixelHeight))+j-1)].type == 'forest') { // Top and Left are Forest
                    x = Math.floor(random(1,3));
                    switch(x) {
                        case 2:
                            pixelType = 'forest';
                            break;
                        default:
                            pixelType = 'sand';
                    }
                }
                else { // Top and Left are different
                    x = Math.floor(random(0,10));
                    switch(x) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            pixelType = 'sand';
                            break;
                        default:
                            pixelType = 'water';
                    }
                }
            }
            else { // 5% chance of avoiding normal chances and doing this.
                x = Math.floor(random(0,50));
                switch(x) {
                    case 1:
                    case 2:
                    case 3:
                        pixelType = 'sand';
                        break;
                    case 4:
                        pixelType = 'forest';
                        break;
                    default:
                        pixelType = 'water';
                }
            }
        }
        else { // If in left-most column or top-most row.
            pixelType = 'water';
        }
        pixels[(i*(pixelHeight))+j] = new Pixel((i*pixelScreenSize),(j*pixelScreenSize),pixelSize,pixelSize,pixelType);
    }
}
setInterval(function() { // Set Interval runs at 60 FPS and updates pixel colours.
    for (var i = 0; i < pixelWidth; i++) {
        for (var j = 0; j < pixelHeight; j++) {
            var pixel = pixels[(i*(pixelHeight))+j];
            fill(pixel.r,pixel.g,pixel.b);
            if (pixel.type == 'water') {
                fill(random(0,5)+50,random(0,10)+50,random(230,255));
            }
            if (pixel.type == 'forest') {
                fill(random(0,50),random(110,130),random(0,75));
            }
            rect(pixel.x,pixel.y,pixel.w,pixel.h);
        }
    }
    pixel = pixels[(mousePixelX*(pixelHeight))+mousePixelY];
    fill(0);
    rect(pixel.x,pixel.y,pixel.w,pixel.h);
/** Normaliser starts here. **/
    for (var i = 0; i < pixelWidth; i++) { // Normalise pixels to their surroundings
        for (var j = 0; j < pixelHeight; j++) {
            var pixel = pixels[(i*(pixelHeight))+j];
            var pixelIndex = (i*(pixelHeight))+j;
            var rowHeight = Math.round(i*(pixelHeight));
            var groundTypes = ['water','sand','forest'];
            for (var k = 0; k < groundTypes.length+1; k++) {
                if ( // This 'if' statement is never executed, and then exits the for loop with [k].
                    // pixels[pixelIndex-1-rowHeight].type == groundTypes[k] && // Top Left
                    pixels[pixelIndex-1].type == groundTypes[k] && // Top Center
                    // pixels[pixelIndex+1-rowHeight].type == groundTypes[k] && // Top Right
                    pixels[pixelIndex-rowHeight].type == groundTypes[k] && // Middle Left
                    pixels[pixelIndex+rowHeight].type == groundTypes[k] && // Middle Right
                    // pixels[pixelIndex+1-rowHeight].type == groundTypes[k] && // Bottom Left
                    pixels[pixelIndex+1].type == groundTypes[k] // Bottom Center
                    // pixels[pixelIndex+1+rowHeight].type == groundTypes[k] // Bottom Right
                ) {
                    pixels[pixelIndex] = new Pixel((i*pixelScreenSize),(j*pixelScreenSize),pixelSize,pixelSize,groundTypes[k]);
                    switch(groundTypes[k]) {
                        case 'water':
                            pixel.r = 0;
                            pixel.g = 0;
                            pixel.b = 0;
                            break;
                        case 'sand':
                            pixel.r = 255;
                            pixel.g = 255;
                            pixel.b = 255;
                            break;
                    }
                }
            }
        }
    }
/** Normaliser ends here. **/
}, 1000/60);
}};var p = new Processing(document.getElementById("output-canvas"), sketch);