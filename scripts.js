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

const Read = document.querySelector('#btn2');

Read.addEventListener('click', async(e)=> {
  e.preventDefault(); //предотвратить поведение по умолчанию в пользу вашей собственной логики
   try {
    const text = await navigator.clipboard.readText();
    itemsArray.push(text);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(text);
    console.log('Вставлено: ', text);
  } catch (err) {
    console.error('Не удалось прочитать содержимое буфера обмена: ', err);
  }

});

const izb = document.querySelector('#izb');
const text = document.location.href;

if (itemsArray.includes(text)) {
  izb.innerText = "Удалить из избранного"
}

izb.addEventListener('click', () => {

        if (izb.innerText == 'Добавить в избранное') {//Проверяем текст кнопки
          izb.innerText = 'Добавлено!';//Меняем текст на "Добавлено!"
          itemsArray.push(text);
          localStorage.setItem('items', JSON.stringify(itemsArray));
          liMaker(text);
          setTimeout(() => { //Задержка, чтобы заменить текст кнопки на исходный
            izb.innerText = "Удалить из избранного";
             }, 1500);
        } else {
            izb.innerText = 'Удалено';//Меняем текст на "Добавлено!"
            itemsArray.splice(itemsArray.indexOf(text),1);
            localStorage.setItem('items', JSON.stringify(itemsArray));
            setTimeout(() => { //Задержка, чтобы заменить текст кнопки на исходный
              izb.innerText = "Добавить в избранное";
               }, 1500);
          }
      });
