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
    b.style.transform = "rotate("+ ((90+navItemLength/2)+degreeOffset) +"deg) translateY("+((main.offsetWidth/2)-(buttonHeight+5))+"px) rotate(180deg)";
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
            // cardContainer.style.transformOrigin = "-"+main.offsetWidth+"px 0";
            // cardContainer.style.transform = "rotate("+(degreeOffset*i)+"deg)";
            for(i=0;i<cards.length;i++){
                cards[i].classList.remove("active");
                buttons[i].classList.remove("active");
            }
            c.classList.add("active");
            b.classList.add("active");
        }
    }
}

const starCount = 200;
const starSize = {
    min: 0.3,
    max: 0.7
};
const starContainer = {
    width: window.innerWidth,
    height: window.innerHeight,
    padding: 20
}
const container = document.querySelector('body .container');


function initStars() {
    starContainer.width = window.innerWidth;
    starContainer.height = window.innerHeight;

    for (i=0; i < starCount; i++) {
        let star = document.createElement("span");
        star.classList.add("star");
        let x = Math.floor(Math.random() * Math.floor(starContainer.width-(starContainer.padding*2))+starContainer.padding)+1;
        let y = Math.floor(Math.random() * Math.floor(starContainer.height-(starContainer.padding*2))+starContainer.padding)+1;
        
        star.style.left = ""+x+"px";
        star.style.top = ""+y+"px";
        star.style.transform = "scale("+(Math.random() * (starSize.max - starSize.min)+starSize.min)+")";
        container.insertBefore(star, container.firstChild);
        // console.log("created star at ("+x+","+y+")");
    }
}

const mouse = {
    x: 0,
    y: 0,
    radius: 50,
    on: false
}

const cardElement = document.querySelector("#name_card");
const nameCard = {
    element: cardElement,
    active: false,
    f: function(){
        return this.element
    },
    x: (cardElement.offsetLeft-cardElement.offsetWidth/2),
    y: (cardElement.offsetTop-cardElement.offsetHeight/2),
    maxRotate: 30,//deg for both x and y
}


function init() {
    initButtons();initCards();initStars();
    document.onmousein = ()=>{mouse.on=true;};
    document.onmouseout = ()=>{mouse.on=false;};
    const stars = document.querySelectorAll("span.star");
    console.log(stars.length);
    document.onmousemove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        for(i=0; i < stars.length; i++){
            s = stars[i];
            d = Math.sqrt(Math.pow(((mouse.x-mouse.radius) - (s.offsetLeft-s.offsetWidth/2)), 2) + Math.pow(((mouse.y-mouse.radius) - (s.offsetTop-s.offsetWidth/2)), 2));
            if (d - (mouse.radius+s.offsetWidth) < 0 && mouse.on == true){//in range
                s.classList.add("active");
                ((element)=>{setTimeout(function() {element.classList.remove("active");}, 1500);})(s);
            } 
        }
        if (nameCard.active){
            let x = mouse.x - nameCard.x;
            let y = mouse.y - nameCard.y;
            console.log(x,y);
            nameCard.element.style.transform = "perspective(800px) rotateX("+x+"deg) rotateY("+y+"deg)";
        }
    }
    nameCard.onmousein = () => {nameCard.active = true;};
    nameCard.onmouseout = () => {nameCard.active = false;};
}

(()=>{init();})()