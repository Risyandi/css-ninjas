let elemGadget = document.getElementById("gadget");
new WOW().init();

function wowAnimate() {
    let wow = {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    }
    return wow;
}

function addingClass(paramID, paramClass) {
    let elementID = document.getElementById(paramID);
    if (paramID != null) {
        elementID.classList.add(paramClass);
    }
}

function removeClass(paramID, paramClass) {
    let elementID = document.getElementById(paramID);
    if (paramID != null) {
        elementID.classList.remove(paramClass);
    }
}

function changesAnimationName(paramID, animationName) {
    let elementID = document.getElementById(paramID);
    if (paramID != null) {
        elementID.style.animationName = animationName;
    }
}

elemGadget.addEventListener("click", function () {
    changesAnimationName("gadget", "");
    removeClass("gadget", "rotateInDownLeft");
    if (elemGadget.classList.contains("wobble")) {
        removeClass("gadget", "wobble");
    } else {
        addingClass("gadget", "wobble");
    }
});