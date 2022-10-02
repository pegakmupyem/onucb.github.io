/* return input field to variable text */
var text = document.getElementById("inputText");

/* return button to variable btn */
var btn = document.getElementById("copyText");

/* call function on button click */
btn.onclick = function() {
  text.select();    
  document.execCommand("copy");
}
