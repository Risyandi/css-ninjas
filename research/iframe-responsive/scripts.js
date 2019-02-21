// recommended if you using a Iframe for responsive Iframe
function resizeFitContent(nameIdIframe) {
    nameIdIframe.width = nameIdIframe.contentWindow.document.body.scrollWidth;
        console.log(nameIdIframe.width, "fitContent width");
    nameIdIframe.height = nameIdIframe.contentWindow.document.body.scrollHeight;
    console.log(nameIdIframe.height, ":fitContent height");
}

window.addEventListener('DOMContentLoaded', function () {
    // var nameIdIframe = document.querySelector('.banner-container--iframe');
    var nameIdIframe = document.querySelector('#opini-widgets-107192');
    console.log(nameIdIframe, "name id iframe");
    resizeFitContent(nameIdIframe);
});