function constrain(value,min,max) {
    if (value < min) { return min; }
    else if (value > max) { return max; }
    else { return value; }
}
var button = document.getElementById('unclickable');
button.style.position = 'absolute';
button.style.height='40px';
button.style.width='200px';
button.style.top='0px';
button.style.left='0px';
button.addEventListener('click',function(){button.innerHTML=prompt('How did you click this?');});
button.addEventListener('mouseover',function() {
    button.style.top = constrain((Math.floor(Math.random() * window.innerHeight)),0,window.innerWidth-200) + 'px';
    button.style.left = constrain((Math.floor(Math.random() * window.innerWidth)),0,window.innerWidth-200) + 'px';
});
setInterval(function(){button.blur();annoy.focus();},100);

var annoy = document.getElementById('clickable');
annoy.style.position = 'fixed';
annoy.style.height='40px';
annoy.style.width='200px';
annoy.style.top='0px';
annoy.style.left='0px';
annoy.style.zIndex=-1;
annoy.addEventListener('click',function(){alert('Why\'d you click me?'); window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';});
function moveAnnoy(event) {
    annoy.style.top = event.clientY-20+'px';
    annoy.style.left = event.clientX-100+'px';
}