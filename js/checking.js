window.hash = {
  acthash: "122d8aada4fb07a43deb62e918369032"
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
