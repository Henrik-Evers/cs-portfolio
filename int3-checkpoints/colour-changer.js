// Declare variables and assign button and input elements
var button = document.getElementById('submit-colour');
var input = document.getElementById('colour-input');

// Function for changing background colour with user's colour
function buttonClicked () {
    document.body.style.backgroundColor = input.value;
}

// Event Listener for when the button is clicked
button.addEventListener('click', buttonClicked);