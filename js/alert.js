		var check = localStorage.getItem("check");
		console.log(check);
	        var localValue = localStorage.getItem("pass");
		console.log(localValue);
		if (localValue == check) {
  		 
		} else {
  		 
  		  alert('Ваш ключ доступа устарел, купите новый ключ доступа, либо вы ввели его неправильно!');
		}
