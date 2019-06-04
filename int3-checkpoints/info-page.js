/* I use this similar to console.log(); to log items to the display. The 'text' argument is the text that will be displayed,
while the 'replaceBool' argument is a boolean representing whether the new text should be added to existing text or replace
existing text. */
var consol = {
    log: function(text, replaceBool) {
        var display = document.getElementById('display');
        if (replaceBool == undefined) { replaceBool = false; }
        if (replaceBool) { display.innerHTML = text; }
        if (!replaceBool) { display.innerHTML += text; }
    }
};
// This arrays holds the info text for the selections.
var info = ['This is a bottle of Caesar dressing being stabbed in the back with a knife. If you do not get the joke, the I <del>hate</del> <i>strongly dislike</i> you.','This is a Kurzgesagt duck in a spacesuit and in space, waiting with a shotgun for any hapless satellite to pass by.'];
// Some variables for the event listeners.
var t = true; var f = false; var x = f; var y = f;
// Grabbing the images that will be selected.
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
// Adding event listeners to the images and giving them function so that if you click the one that is open, it will close.
option1.addEventListener('click', function(){x=!x;if(x){consol.log(info[option1.alt],true);x=t;y=f;}else{consol.log('',t);x=f;y=f;}});
option2.addEventListener('click', function(){y=!y;if(y){consol.log(info[option2.alt],true);x=f;y=t;}else{consol.log('',t);x=f;y=f;}});