'use strict';

var main = document.getElementsByClassName('main')[0];
console.log(main);

window.onkeydown = function keyCombination(e) {
    if (e.keyCode === 69 && e.ctrlKey) {
        main.innerHTML = '<textarea id="text-area">';
    }
    if (e.keyCode === 83 && e.ctrlKey) {
        var textArea = document.getElementById('text-area');
        main.innerHTML = textArea.value;

    }
    if (e.keyCode === 27) {
        main.innerHTML = '';
    }
};

