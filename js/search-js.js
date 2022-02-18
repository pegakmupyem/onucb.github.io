  totalPages=1;
  pg=1;
  sorting="NUM_VOTE";
  kinofilms="ALL";
  firstrating=0;
  secondrating=10;
  firstyear=1000;
  secondyear=3000;
  thisyear=new Date().getFullYear();
  contrlyear=1900;
  contrlpage=2;
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

const pages = document.getElementById("pages");
const npages = (totalPages) => {
  while (contrlpage<=totalPages) {
  const option = document.createElement('option');
  option.textContent=contrlpage+" страница";
  pages.appendChild(option);
  option.setAttribute("value", contrlpage);
  contrlpage+=1;
  }
  contrlpage=2
}

const rmpages = () => {
i=pages.childElementCount;
while (i>=2) {
pages.removeChild(pages.lastChild);
i-=1;
  }
}
function search(){
	var text = document.getElementById('text').value;
	$.ajax({
			 		async: true,
			 		crossDomain: true,
					url: 'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=' + sorting + '&type=' + kinofilms + '&ratingFrom=' + firstrating + '&ratingTo=' + secondrating + '&yearFrom=' + firstyear + '&yearTo=' + secondyear + '&keyword=' + text + '&page=' + pg,
					type: 'GET',
			 		headers: {'X-API-KEY':'1281ba0d-593b-4f3e-8b14-2b63e66ae00a'},
					success: function(response){
							$('.title').empty();
							$('.items').empty();
                                                var totalPages = response.totalPages;
	         				var a = response.items;
			 				var index, len;
              rmpages();
              npages(totalPages);
			 				for (index = 0, len = a.length; index < len; ++index) {
				 				var item = a[index];
					 				 $('.items').append('<li class="item" style="margin-bottom: 1rem">    <a class="link" href="/kino?id='+item.kinopoiskId+'&title='+item.nameRu+' ('+item.year+')"  title="'+item.nameRu+'</br>'+item.nameOriginal+' ('+item.year+')">        <div class="cover-wrap">          <div class="cover js-b-lazy fadeIn animated" style="background-image: url('+item.posterUrlPreview+');"></div></div>     <div class="description">     <h3 class="title">'+item.nameRu+'</br>'+item.nameOriginal+'</h3>      <span class="desc">     <span class="rating">'+item.ratingKinopoisk+'</span>    <span class="year">'+item.year+'</span></span></div></a></li>');
							}
					}
	});
	};

  function search2(){
  	var text = document.getElementById('text').value;
  	$.ajax({
  			 		async: true,
  			 		crossDomain: true,
  					url: 'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=' + sorting + '&type=' + kinofilms + '&ratingFrom=' + firstrating + '&ratingTo=' + secondrating + '&yearFrom=' + firstyear + '&yearTo=' + secondyear + '&keyword=' + text + '&page=' + pg,
  					type: 'GET',
  			 		headers: {'X-API-KEY':'1281ba0d-593b-4f3e-8b14-2b63e66ae00a'},
  					success: function(response){
  							$('.title').empty();
  							$('.items').empty();
                                                  var totalPages = response.totalPages;
  	         				var a = response.items;
  			 				var index, len;
  			 				for (index = 0, len = a.length; index < len; ++index) {
  				 				var item = a[index];
  					 				 $('.items').append('<li class="item" style="margin-bottom: 1rem">    <a class="link" href="/kino?id='+item.kinopoiskId+'&title='+item.nameRu+' ('+item.year+')"  title="'+item.nameRu+'</br>'+item.nameOriginal+' ('+item.year+')">        <div class="cover-wrap">          <div class="cover js-b-lazy fadeIn animated" style="background-image: url('+item.posterUrlPreview+');"></div></div>     <div class="description">     <h3 class="title">'+item.nameRu+'</br>'+item.nameOriginal+'</h3>      <span class="desc">     <span class="rating">'+item.ratingKinopoisk+'</span>    <span class="year">'+item.year+'</span></span></div></a></li>');
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
