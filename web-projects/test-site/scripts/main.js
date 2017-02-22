var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    "use strict";
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello, ' + myName + '!';  
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName + '!';
} 

myButton.onclick = function() {
    setUserName();
}