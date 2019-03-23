const buttonSignUp = document.getElementById('signUp');
const buttonSignIn = document.getElementById('signIn');
const container = document.getElementById('container');

buttonSignUp.addEventListener('click', () => {
    console.log("click button");
    container.classList.remove('left-panel-active');
    container.classList.add('right-panel-active');
});

buttonSignIn.addEventListener('click', () => {
    console.log("click button");
    container.classList.remove('right-panel-active');
    container.classList.add('left-panel-active');
});
