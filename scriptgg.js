	$.ajax({
			 		async: true,
			 		crossDomain: true,
					url: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1',
					type: 'GET',
			 		headers: {'X-API-KEY':'1281ba0d-593b-4f3e-8b14-2b63e66ae00a'},
					success: function(response){
	         				var a = response.films;
			 				var index, len;
			 				for (index = 0, len = a.length; index < len; ++index) {
				 				var item = a[index];
					 				 $('.items').append('<li class="item" style="margin-bottom: 1rem">    <a class="link" href="films?id='+item.filmId+'&title='+item.nameRu+' ('+item.year+')"  title="'+item.nameRu+' ('+item.year+')">        <div class="cover-wrap">          <div class="cover js-b-lazy fadeIn animated" style="background-image: url('+item.posterUrlPreview+');"></div></div>     <div class="description">     <h3 class="title">'+item.nameRu+'</h3>      <span class="desc">     <span class="rating">'+item.rating+'</span>    <span class="year">'+item.year+'</span></span></div></a></li>');
							}
					}
	});
	 
	$.ajax({
			 		async: true,
			 		crossDomain: true,
					url: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=2',
					type: 'GET',
			 		headers: {'X-API-KEY':'1281ba0d-593b-4f3e-8b14-2b63e66ae00a'},
					success: function(response){
	         				var a = response.films;
			 				var index, len;
			 				for (index = 0, len = a.length; index < len; ++index) {
				 				var item = a[index];
					 				 $('.items').append('<li class="item" style="margin-bottom: 1rem">    <a class="link" href="films?id='+item.filmId+'&title='+item.nameRu+' ('+item.year+')"  title="'+item.nameRu+' ('+item.year+')">        <div class="cover-wrap">          <div class="cover js-b-lazy fadeIn animated" style="background-image: url('+item.posterUrlPreview+');"></div></div>     <div class="description">     <h3 class="title">'+item.nameRu+'</h3>      <span class="desc">     <span class="rating">'+item.rating+'</span>    <span class="year">'+item.year+'</span></span></div></a></li>');
							}
					}
	});  
	$.ajax({
			 		async: true,
			 		crossDomain: true,
					url: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=3',
					type: 'GET',
			 		headers: {'X-API-KEY':'1281ba0d-593b-4f3e-8b14-2b63e66ae00a'},
					success: function(response){
	         				var a = response.films;
			 				var index, len;
			 				for (index = 0, len = a.length; index < len; ++index) {
				 				var item = a[index];
					 				 $('.items').append('<li class="item" style="margin-bottom: 1rem">    <a class="link" href="films?id='+item.filmId+'&title='+item.nameRu+' ('+item.year+')"  title="'+item.nameRu+' ('+item.year+')">        <div class="cover-wrap">          <div class="cover js-b-lazy fadeIn animated" style="background-image: url('+item.posterUrlPreview+');"></div></div>     <div class="description">     <h3 class="title">'+item.nameRu+'</h3>      <span class="desc">     <span class="rating">'+item.rating+'</span>    <span class="year">'+item.year+'</span></span></div></a></li>');
							}
					}
	});

  firstyear=1000;
  secondyear=3000;
  thisyear=new Date().getFullYear();
  contrlyear=1900;
const yearfrom = document.getElementById("yearfrom");
const yearto = document.getElementById("yearto");
  const years = () => {
    while (thisyear>=contrlyear) {
    const option = document.createElement('option');
    option.textContent=thisyear;
    yearfrom.appendChild(option);
    option.setAttribute("value", thisyear);
    const option2 = document.createElement('option');
    option2.textContent=thisyear;
    yearto.appendChild(option2);
    option2.setAttribute("value", thisyear);
    thisyear-=1
    }
  }
years();


function search(){
	var text = document.getElementById('text').value;

	$.ajax({
			 		async: true,
			 		crossDomain: true,
					url: 'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=ALL&ratingFrom=0&ratingTo=10&yearFrom='+firstyear+'&yearTo='+secondyear+'&keyword='+text+'&page=1',
					type: 'GET',
			 		headers: {'X-API-KEY':'1281ba0d-593b-4f3e-8b14-2b63e66ae00a'},
					success: function(response){
							$('.title').empty();
							$('.items').empty();
	         				var a = response.items;
			 				var index, len;
			 				for (index = 0, len = a.length; index < len; ++index) {
				 				var item = a[index];
					 				 $('.items').append('<li class="item" style="margin-bottom: 1rem">    <a class="link" href="films?id='+item.kinopoiskId+'&title='+item.nameRu+' ('+item.year+')"  title="'+item.nameRu+' ('+item.year+')">        <div class="cover-wrap">          <div class="cover js-b-lazy fadeIn animated" style="background-image: url('+item.posterUrlPreview+');"></div></div>     <div class="description">     <h3 class="title">'+item.nameRu+'</h3>      <span class="desc">     <span class="rating">'+item.ratingKinopoisk+'</span>    <span class="year">'+item.year+'</span></span></div></a></li>');
							}
					}
	});
	};

	
$(document).ready(function(){
                 $("#text").keypress(function(e){
                   if(e.keyCode==13){
                   //нажата клавиша enter - здесь ваш код
                   search();
                   }
                 });
 
             });
