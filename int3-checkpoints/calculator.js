// Some variables for the calculations
var operator = null;
var whichNum = 0;
var firstNum = '';
var secondNum = '';
var result = '';

// A place to stick all of my buttons
var buttons = {};

// A place to stick all of my functions for when a button is clicked
var buttonClicked = {};

// Constructor for my buttons to make it easier on me
function newButton(name,location) {
        this.name = name;
        this.button = document.getElementById(this.name);
        this.button.addEventListener('click', buttonClicked[this.name]);
}

/** The buttonClicked functions that are called in the constructor **/
buttonClicked.plus = function() {if (whichNum == 0) {operator = 'plus'; whichNum = 1;}};
buttonClicked.min = function() {if (whichNum == 0) {operator = 'min'; whichNum = 1;}};
buttonClicked.div = function() {if (whichNum == 0) {operator = 'div'; whichNum = 1;}};
buttonClicked.mul = function() {if (whichNum == 0) {operator = 'mul'; whichNum = 1;}};
buttonClicked.sin = function() {if (whichNum == 0) {operator = 'sin'; calculate();}};
buttonClicked.cos = function() {if (whichNum == 0) {operator = 'cos'; calculate();}};
buttonClicked.tan = function() {if (whichNum == 0) {operator = 'tan'; calculate();}};
buttonClicked.arcsin = function() {if (whichNum == 0) {operator = 'arcsin'; calculate();}};
buttonClicked.arccos = function() {if (whichNum == 0) {operator = 'arccos'; calculate();}};
buttonClicked.arctan = function() {if (whichNum == 0) {operator = 'arctan'; calculate();}};
buttonClicked.sqr = function() {if (whichNum == 0) {operator = 'sqr'; calculate();}};
buttonClicked.sqrt = function() {if (whichNum == 0) {operator = 'sqrt'; calculate();}};
buttonClicked.num0 = function() {if (whichNum == 0) {firstNum += '0';} else {secondNum += '0';}};
buttonClicked.num1 = function() {if (whichNum == 0) {firstNum += '1';} else {secondNum += '1';}};
buttonClicked.num2 = function() {if (whichNum == 0) {firstNum += '2';} else {secondNum += '2';}};
buttonClicked.num3 = function() {if (whichNum == 0) {firstNum += '3';} else {secondNum += '3';}};
buttonClicked.num4 = function() {if (whichNum == 0) {firstNum += '4';} else {secondNum += '4';}};
buttonClicked.num5 = function() {if (whichNum == 0) {firstNum += '5';} else {secondNum += '5';}};
buttonClicked.num6 = function() {if (whichNum == 0) {firstNum += '6';} else {secondNum += '6';}};
buttonClicked.num7 = function() {if (whichNum == 0) {firstNum += '7';} else {secondNum += '7';}};
buttonClicked.num8 = function() {if (whichNum == 0) {firstNum += '8';} else {secondNum += '8';}};
buttonClicked.num9 = function() {if (whichNum == 0) {firstNum += '9';} else {secondNum += '9';}};
buttonClicked.per = function() {if (whichNum == 0) {firstNum += '.';} else {secondNum += '.';}};
buttonClicked.neg = function() {if (whichNum == 0) {firstNum = String(0-firstNum);} else {secondNum = String(0-secondNum);}};
buttonClicked.equ = function() {if (whichNum == 1) {calculate();} else {operator = 'equ'; calculate();}};
buttonClicked.clear = function() {operator = null; whichNum = 0; firstNum = ''; secondNum = ''; result = '';};
buttonClicked.delete = function() {if (whichNum == 0) {firstNum = firstNum.slice(0,-1);} else {secondNum = secondNum.slice(0,-1);}};

/** Declare and fetch operators **/
buttons.plus = new newButton('plus'); // Addition Operator
buttons.min = new newButton('min'); // Subtraction Operator
buttons.div = new newButton('div'); // Division Operator
buttons.mul = new newButton('mul'); // Multiplication Operator
buttons.sin = new newButton('sin'); // Sine Operator
buttons.cos = new newButton('cos'); // Cosine Operator
buttons.tan = new newButton('tan'); // Tangent Operator
buttons.arcsin = new newButton('arcsin'); // Arcsine Operator
buttons.arccos = new newButton('arccos'); // Arccosine Operator
buttons.arctan = new newButton('arctan'); // Arctangent Operator
buttons.sqr = new newButton('sqr'); // Square Operator
buttons.sqrt = new newButton('sqrt'); // Sqaure Root Operator

/** Declare and fetch numbers and modifiers **/
buttons.num0 = new newButton('num0'); // Zero
buttons.num1 = new newButton('num1'); // One
buttons.num2 = new newButton('num2'); // Two
buttons.num3 = new newButton('num3'); // Three
buttons.num4 = new newButton('num4'); // Four
buttons.num5 = new newButton('num5'); // Five
buttons.num6 = new newButton('num6'); // Six
buttons.num7 = new newButton('num7'); // Seven
buttons.num8 = new newButton('num8'); // Eight
buttons.num9 = new newButton('num9'); // Nine
buttons.per = new newButton('per'); // Period
buttons.neg = new newButton('neg'); // Negative

/** Other buttons **/
buttons.equ = new newButton('equ'); // Equals
buttons.clear = new newButton('clear'); // Clear All
buttons.delete = new newButton('delete'); // Delete Last Char

/** Display **/
var display = document.getElementById('display');

setInterval(function() {
    display.value = (whichNum == 0) ? firstNum : secondNum;
    if (operator == 'fin') { display.value = result; }
}, 1000/60);

/** Calculate the result using the operator and number values **/
function calculate() {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    switch (operator) {
        case 'plus':
            result = firstNum + secondNum;
            break;
        case 'min':
            result = firstNum - secondNum;
            break;
        case 'mul':
            result = firstNum * secondNum;
            break;
        case 'div':
            result = firstNum / secondNum;
            break;
        case 'sin':
            result = Math.sin(firstNum) * (180 / Math.PI); /** Multiplying by 180/PI to turn from radians to degrees **/
            break;
        case 'cos':
            result = Math.cos(firstNum) * (180 / Math.PI);
            break;
        case 'tan':
            result = Math.tan(firstNum) * (180 / Math.PI);
            break;
        case 'arcsin':
            result = Math.asin(firstNum) * (180 / Math.PI);
            break;
        case 'arccos':
            result = Math.acos(firstNum) * (180 / Math.PI);
            break;
        case 'arctan':
            result = Math.atan(firstNum) * (180 / Math.PI);
            break;
        case 'sqr':
            result = firstNum * firstNum;
            break;
        case 'sqrt':
            result = Math.sqrt(firstNum);
            break;
        case 'equ':
            result = firstNum; // Simply returns the first value because that's how it works normally
            break;
    }
    result = 'Ans = ' + result;
    operator = 'fin';
}