window.hash = {
  acthash: "ef481b1008d965bfc8c3dd64d46579cb"
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
                       alert('📵 НЕправильный Пароль‼️ Пароль ДОЛЖЕН быть БЕЗ пробелов‼️');
                       localStorage.removeItem('pass');
                       localStorage.setItem('pass', JSON.stringify("noLLIeJl_Haxyū"));
                       
                     }
                   }
                 });
             });
