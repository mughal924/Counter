var counter = 0;
var counterValue = document.getElementById('counter-value');
function increment() {
    counter++;
    counterValue.innerHTML = counter;
}

function decrement() {
    counter--;
    counterValue.innerHTML = counter;
}