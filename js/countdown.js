// Countdown y redirect automático en 404
var seconds = 10;
var foo;
function redirect() {
    document.location.href = 'index.html';
}
function updateSecs() {
    document.getElementById("seconds").innerHTML = seconds;
    seconds--;
    if (seconds == -1) {
        clearInterval(foo);
        redirect();
    }
}
function countdownTimer() {
    foo = setInterval(function () {
        updateSecs()
    }, 1000);
}
countdownTimer();