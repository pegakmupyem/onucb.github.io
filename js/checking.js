const input = document.getElementById('txt');
window.hash = {
                  acthash: "5ef62e8fc538412c8c273966a06d8a35"
                };
function search() {
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
                    search();
                  }
                });
              });
