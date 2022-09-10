const input = document.getElementById('txt');
window.hash = {
                  acthash: "5ef62e8fc538412c8c273966a06d8a35"
                };
function search() {
                var text = document.getElementById('txt').value;
                alert('текст' + text);
                window.hash = {
                  acthash: "5ef62e8fc538412c8c273966a06d8a35"
                };
                alert('хеш' + hash.acthash);
                     if (MD5(input.value)==hash.acthash) {
                       alert(input.value + txt);
                       localStorage.removeItem('pass');
                       localStorage.setItem('pass', JSON.stringify(hash.acthash));
                       window.open('/search')
                     } else {
                       alert(input.value + txt);
                       alert('📵 НЕправильный Пароль‼️ Пароль ДОЛЖЕН быть БЕЗ пробелов‼️');
                       localStorage.removeItem('pass');
                       localStorage.setItem('pass', JSON.stringify("noLLIeJl_Haxyū"));
                       
                     }
              };
              $(document).ready(function() {
                $("#txt").keypress(function(e) {
                  if (e.keyCode == 13) {
                    //нажата клавиша enter - здесь ваш код
                    alert('ок');
                    
                     if (MD5(input.value)==hash.acthash) {
                       alert(input.value + txt);
                       localStorage.removeItem('pass');
                       localStorage.setItem('pass', JSON.stringify(hash.acthash));
                       window.open('/search')
                     } else {
                       alert(input.value + txt);
                       alert('📵 НЕправильный Пароль‼️ Пароль ДОЛЖЕН быть БЕЗ пробелов‼️');
                       localStorage.removeItem('pass');
                       localStorage.setItem('pass', JSON.stringify("noLLIeJl_Haxyū"));
                       
                     }
                    search();
                  }
                });
              });
