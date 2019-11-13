/**
 * inits
 */
let elemGadget = document.getElementById("gadget");
let elemMockup = document.getElementById("mockup");
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

/**
 * addingClass, removeClass, and changesAnimation
 * @param {*} paramID : fill with name ID of element
 * @param {*} paramClass : fill with name class of your animation
 */

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

/** element gadget */
elemGadget.addEventListener("click", function () {
    changesAnimationName("gadget", "");
    removeClass("gadget", "rotateInDownLeft");
    if (elemGadget.classList.contains("wobble")) {
        removeClass("gadget", "wobble");
    } else {
        addingClass("gadget", "wobble");
    }
});

/** element mockup */
elemMockup.addEventListener("click", function () {
    changesAnimationName("mockup", "");
    removeClass("mockup", "rotateInDownLeft");
    if (elemMockup.classList.contains("wobble")) {
        removeClass("mockup", "wobble");
    } else {
        addingClass("mockup", "wobble");
    }
});