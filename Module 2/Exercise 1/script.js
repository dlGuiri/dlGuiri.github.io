let myButton = document.getElementById('myButton');
let myMessage = document.getElementById('message');
let i = 0;

myButton.addEventListener('click', function() {
    myMessage.textContent = "After the button is clicked, this is the new message! The button has been pressed " + (++i) + " times.";
});