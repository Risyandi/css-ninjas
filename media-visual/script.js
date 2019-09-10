let skate = document.querySelector('.text1');
let pause = document.querySelector('#pause');
let play = document.querySelector('#play');
var tween = TweenMax.to(skate, 10, { x: 500, repeat: -1, ease: Elastic.easeInOut, paused: true });

pause.addEventListener('click', function () {
    tween.pause();
});

play.addEventListener('click', function () {
    tween.play();
});