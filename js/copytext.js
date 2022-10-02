/* return input field to variable text */
var text = document.getElementById("inputText1");

/* return button to variable btn */
var btn = document.getElementById("copyText1");

/* call function on button click */
btn.onclick = function() {
  text.select();    
  document.execCommand("copy");
  alert('⚠️ Внимание сейчас откроется веб приложение Сбербанка: \n \n https://online.sberbank.ru');
  window.open("https://online.sberbank.ru");
}
