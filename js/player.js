		const containers = document.getElementById('containers');
		const iframe = document.getElementById('iframe');
		const actions = document.getElementById('actions');
		const torrents = document.getElementById('torrents');
		const trailers = document.getElementById('trailers');
		const players = document.getElementById('players');
		const sp1 = document.getElementById('sp1');
		const sp2 = document.getElementById('sp2');
		localStorage.removeItem('check');
		localStorage.setItem('check', JSON.stringify("f064df9af70e9fcbdae899bc4b626924"));
		var check = localStorage.getItem("check");
		console.log(check);
	        var localValue = localStorage.getItem("pass");
		console.log(localValue);
		if (localValue == check) {
  		 
  		  iframe.src = "/kino/player2#"+id;
		} else {
  		 
  		  iframe.src = "https://apimovie.tobaco.ws/embed/kp/"+id;
		}

		///containers.innerHTML = '<iframe id="iframe" style="border:0px; width: 100%; height: 70vmin;" src="https://apimovie.tobaco.ws/embed/kp/'+id+'"></iframe>';
		/**
		 * Switch to players list
		 */
		function selectPlayers() {
			players.classList.add('active');
			sp1.classList.add('active');
			torrents.classList.remove('active');
			trailers.classList.remove('active');
			sp2.classList.remove('active');
			
			players.removeAttribute('onclick');
			torrents.setAttribute("onclick", "selectTorrents()");
			trailers.setAttribute("onclick", "selectTrailers()");
			
			containers.innerHTML = '';

		        localStorage.removeItem('check');
		        localStorage.setItem('check', JSON.stringify("f064df9af70e9fcbdae899bc4b626924"));
		        var check = localStorage.getItem("check");
		        console.log(check);
	                var localValue = localStorage.getItem("pass");
		        console.log(localValue);
		        if (localValue == check) {
  		         
  		          containers.innerHTML = '<iframe id="iframe" style="border:0px; width: 100%; height: 95vmin;" src="/kino/player2#'+id+'"></iframe>';
		        } else {
  		         
			  containers.innerHTML = '<iframe id="iframe" style="border:0px; width: 100%; height: 75vmin;" src="https://apimovie.tobaco.ws/embed/kp/'+id+'"></iframe>';
		        }
		};
		
		/**
		 * Switch to trailers list
		 */
		function selectTrailers() {
			trailers.classList.add('active');
			sp1.classList.add('active');
			sp2.classList.add('active');
			torrents.classList.remove('active');
			players.classList.remove('active');
			
			trailers.removeAttribute('onclick');
			torrents.setAttribute("onclick", "selectTorrents()");
			players.setAttribute("onclick", "selectPlayers()");
			
			containers.innerHTML = '';

		        localStorage.removeItem('check');
		        localStorage.setItem('check', JSON.stringify("f064df9af70e9fcbdae899bc4b626924"));
		        var check = localStorage.getItem("check");
		        console.log(check);
	                var localValue = localStorage.getItem("pass");
		        console.log(localValue);
		        if (localValue == check) {
  		         
  		          containers.innerHTML = '<iframe id="iframe" style="border:0px; width: 100%; height: 95vmin;" src="/kino/player#'+id+'"></iframe>';
		        } else {
  		         
			  containers.innerHTML = '<iframe id="iframe" style="border:0px; width: 100%; height: 75vmin;" src="https://apimovie.tobaco.ws/embed/kp/'+id+'"></iframe>';
		        }
		};

		/**
		 * Switch to torrents list 
		*/
		function selectTorrents() {
			players.classList.remove('active');
			trailers.classList.remove('active');
			sp1.classList.remove('active');
			torrents.classList.add('active');
			sp2.classList.add('active');
			
			torrents.removeAttribute('onclick');
			trailers.setAttribute("onclick", "selectTrailers()");
			players.setAttribute("onclick", "selectPlayers()");
			
			containers.innerHTML = '';

		        localStorage.removeItem('check');
		        localStorage.setItem('check', JSON.stringify("f064df9af70e9fcbdae899bc4b626924"));
		        var check = localStorage.getItem("check");
		        console.log(check);
	                var localValue = localStorage.getItem("pass");
		        console.log(localValue);
		        if (localValue == check) {
  		         
  		          containers.innerHTML = '<iframe id="iframe" style="border:0px; width: 100%; height: 95vmin;" src="/kino/player1#'+id+'"></iframe>';
		        } else {
  		         
			  containers.innerHTML = '<iframe id="iframe" style="border:0px; width: 100%; height: 75vmin;" src="https://apimovie.tobaco.ws/embed/kp/'+id+'"></iframe>';
		        }

		};
