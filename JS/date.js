let date = new Date().toLocaleDateString('pl-PL');
let time = new Date().toLocaleTimeString('pl-PL');

var text = document.querySelector('#welcome-card-txt');

text.dataset.content = date + ' ' + time.slice(-8, -3);
