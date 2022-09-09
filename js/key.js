function search(){
	var text = document.getElementById('text').value;
	$.ajax({
			 		async: true,
			 		crossDomain: true,
					url: 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='+text,
					type: 'GET',
			 		headers: {'X-API-KEY':'1c547473-0385-454b-a351-8c41f27ea5fd'},
					success: function(response){
							$('.title').empty();
							$('.items').empty();
	         				var a = response.films;
			 				var index, len;
			 				for (index = 0, len = a.length; index < len; ++index) {
				 				var item = a[index];
					 				 $('.items').append('<li class="item" style="margin-bottom: 1rem">    <a class="link" href="/kino/?id='+item.filmId+'&title='+item.nameRu+' ('+item.year+')" target="_blank" title="'+item.nameRu+' ('+item.year+')">        <div class="cover-wrap">          <div class="cover js-b-lazy fadeIn animated" style="background-image: url('+item.posterUrlPreview+');"></div></div>     <div class="description">     <h3 class="title">'+item.nameRu+'</h3>      <span class="desc">     <span class="rating">'+item.rating+'</span>    <span class="year">'+item.year+'</span></span></div></a></li>');
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
