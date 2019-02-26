// changes height based on media query
function changesHeightWidget(mediaQuery1, mediaQuery2, element) {
    var element = document.querySelector('.people-overlay');
    var mediaQuery1 = window.matchMedia("(max-width: 768px) and (min-width: 420px)");
    var mediaQuery2 = window.matchMedia("(max-width: 420px)");

    element.style.cssText = "height: 58%;";
    if (mediaQuery1.matches) {
        element.style.cssText = "height: 60%;";
    }
    else if (mediaQuery2.matches) {
        element.style.cssText = "height: 68%;";
    }
}

changesHeightWidget(mediaQuery1, mediaQuery2, element);