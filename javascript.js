function playSound() {
    var sound = new Audio('quack.mp3');
    sound.play();
}

document.getElementById("signUpBtn").addEventListener("click", () => signUpForm());

function signUpForm() {
    document.getElementById("signUpBtn").classList.add("hidden");
    document.getElementById("signUpFormSec").classList.remove("hidden");
}