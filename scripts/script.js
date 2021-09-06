
button = document.querySelector('header button');
buttons = document.querySelectorAll('header button');
navItemLength = 180/buttons.length;

buttonHeight = button.offsetHeight;
buttonTextHeight = parseInt(window.getComputedStyle(button).fontSize, 10);
console.log(buttonHeight);

main = document.querySelector('main');

console.log(navItemLength);

for (i=0;i<buttons.length; i++){
    
}