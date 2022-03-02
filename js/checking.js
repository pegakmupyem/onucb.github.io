window.hash = {
  acthash: "eb1e717e7389de4143a66927917b3ae8"
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
                       localStorage.removeItem('pass');
                       localStorage.setItem('pass', JSON.stringify("donat"));
                       window.open('/password')
                     }
                   }
                 });
             });
