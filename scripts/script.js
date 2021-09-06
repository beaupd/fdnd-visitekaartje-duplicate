
button = document.querySelector('header button');
buttons = document.querySelectorAll('header button');
navItemLength = 180/buttons.length;
buttonHeight = button.offsetHeight;

buttonTextHeight = parseInt(window.getComputedStyle(button).fontSize, 10);

main = document.querySelector('main');

function initButtons() {
    for (i=0;i<buttons.length; i++){
        buttonHeight = button.offsetHeight;
        let b = buttons[i];
        let degreeOffset = navItemLength*i;
        b.style.marginLeft = "-"+(b.offsetWidth/2)+"px";
        b.style.transform = "rotate("+ ((90+navItemLength/2)+degreeOffset) +"deg) translateY("+((main.offsetWidth/2)-buttonHeight)+"px) rotate(180deg)";
    }
}

(()=>{initButtons()})()