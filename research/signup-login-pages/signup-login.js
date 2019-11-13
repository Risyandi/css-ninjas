const buttonSignUp = document.getElementById('signUp');
const buttonSignIn = document.getElementById('signIn');
const container = document.getElementById('container');

buttonSignUp.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

buttonSignIn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
