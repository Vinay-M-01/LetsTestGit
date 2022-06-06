// MANIPULATING THE DOM

const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();

ul.firstElementChild.innerHTML = '<b>Hello</b>';
ul.firstElementChild.style.color = 'darkgreen';

ul.children[1].innerText = 'Vinay';
ul.children[1].style.color = 'yellow';

ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

