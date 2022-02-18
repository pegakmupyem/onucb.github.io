const pass = JSON.parse(localStorage.getItem('pass'))
if (pass != window.hash.acthash) {
  while (0==0) {
    alert("Доступ запрещён, вы не авторизованы или не ввели пароль доступа на месяц! Ваш пароль доступа на месяц устарел или вы ввели его неправильно!")
  }
}
