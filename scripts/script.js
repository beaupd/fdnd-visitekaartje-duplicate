button = document.querySelector('header button');
buttons = document.querySelectorAll('header button');
navItemLength = 180/buttons.length;
buttonHeight = button.offsetHeight;
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

card = document.querySelector(".content ul li");
cards = document.querySelectorAll(".content ul li");
cardContainer = document.querySelector(".content ul");
cardItemLength = 180/cards.length;
cardHeight = card.offsetHeight;

function initCards() {
    for (i=0;i<cards.length; i++){
        cardHeight = card.offsetHeight;
        let c = cards[i];
        let degreeOffset = cardItemLength*i;
        let b = buttons[i];
        // c.style.marginLeft = "-"+(c.offsetWidth/2)+"px";
        
        c.style.transform = "translateY(" + ((main.offsetWidth)) + "px) rotate("+ ((90+cardItemLength/2)+degreeOffset) +"deg) translateY("+((main.offsetWidth))+"px) rotate(180deg)";
        b.onclick = () => {
            cardContainer.style.transform = "translateY(" + ((main.offsetWidth)) + "px) rotate("+((2*cardItemLength)-degreeOffset)+"deg) translateY("+(-(main.offsetWidth))+"px)";
            for(i=0;i<cards.length;i++){
                cards[i].classList.remove("active");
            }
            c.classList.add("active");
        }
    }
}

(()=>{initButtons();initCards();})()