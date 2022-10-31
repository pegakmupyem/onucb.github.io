    function detect() {
      var isMobile = window.orientation > -1;
	var gettext = isMobile ? 'Mobile' : 'PC';
	if (gettext == 'Mobile') { 
		//alert('мобильное уведомление');
                window.location.href = "/about";
        } else { 
		//alert('компьютерное уведомление');
                window.location.href = "/about";
      }
    }
    detect()
