const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.getElementById('dl');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
const liMaker = (text) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  ul.appendChild(li);
  if (text.includes('http')) {
    a.textContent = decodeURI(text.slice(text.indexOf('title=')+6).replace(/%20/g," "));
    li.appendChild(a);
    a.setAttribute("href", text);
  } else {
    a.textContent = decodeURI(text.slice(text.indexOf('title=')+6).replace(/%20/g," "));
    li.appendChild(a);
    a.setAttribute("href", 'https://'+text);
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});
