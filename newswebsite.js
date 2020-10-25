var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var articles = document.querySelector('.articles')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var inputValue1 = document.querySelector('.inputValue1')
button.addEventListener('click',function(){
	fetch('http://newsapi.org/v2/top-headlines?country='+inputValue.value.toLowerCase()+'&category=business&apiKey=72d6e0915737435d805d05ff0cda7cc0')
		.then(response => response.json())
		.then(data =>{
			if(data['articles'].length<=0){
				var descv = "  <h3>****Sorry,the country code you entered is not valid for any countries****</h3>";
				desc.innerHTML = descv;
				var articlesvalue = " ";
				articles.innerHTML=articlesvalue;
			}
			else{
				var descv =" ";
				desc.innerHTML=descv;
				var i=0;
				var n = data['articles'].length;
				var text ="";
				var text1="";
				for(i=0;i<n;i++){
					console.log(i);
					text +="THE NEWS IS FROM  : "+data.articles[i]['source']['name']+"<br><br>"+data['articles'][i]['title']+"<br><br><img src="+data.articles[i]['urlToImage']+">"+'<br>'+'<br>';
						text +='<h3>Description of the news : </h3><br>'+data.articles[i]['description']+"<br>"+'<h3>Content of the news : </h3><br> '+data.articles[i]['content']+'<br>'+'<h3>To get more information visite the WEBSITE : </h3> '+"<a href="+data.articles[i]['url']+">Click here</a>"+"<br>"+'It is published on the date : <br>'+data.articles[i]['publishedAt']+"<br><br>"
						//text += text1;

				}
				var articlesvalue = text;

				articles.innerHTML = articlesvalue;
			}
		})
	.catch(err=> alert("Something went wrong with the country code"))

})




