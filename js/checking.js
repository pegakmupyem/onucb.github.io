const input = document.getElementById('txt');
window.hash = {
                  acthash: "2d0303ef79ac811d752643733e79bce2"
                };
function search69() {
                var text = document.getElementById('txt').value;
                     if (MD5(input.value)==hash.acthash) { 
                       localStorage.removeItem('pass');
                       localStorage.setItem('pass', JSON.stringify(hash.acthash));
                       window.open('/search')
                     } else {
                       alert('📵 НЕправильный Пароль‼️ Пароль ДОЛЖЕН быть БЕЗ пробела в начале и конце‼️');
                       localStorage.removeItem('pass');
                       localStorage.setItem('pass', JSON.stringify("noLLIeJl_Haxyū")); 
                     }
              };
              $(document).ready(function() {
                $("#txt").keypress(function(e) {
                  if (e.keyCode == 13) {
                    //нажата клавиша enter - здесь ваш код
                    search69();
                  }
                });
              });
