window.hash = {
  acthash: "a955fb4e9446dcaa24441306cc28ebc8"
};
const input = document.getElementById('txt');
$(document).ready(function(){
                 $("#txt").keypress(function(e){
                   if(e.keyCode==13){
                     if (MD5(input.value)==hash.acthash) {
                       localStorage.removeItem('pass');
                       localStorage.setItem('pass', JSON.stringify(hash.acthash));
                       window.open('/search')
                     } else {
                       alert('📵НЕправильный Пароль‼️');
                       localStorage.removeItem('pass');
                       localStorage.setItem('pass', JSON.stringify("noLLIeJl_Haxyū"));
                       window.open('/password')
                     }
                   }
                 });
             });
