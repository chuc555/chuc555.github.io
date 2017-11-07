$(document).ready(function(){

	console.log("RSS - Responsive");

	var statement = "select * from feed where url='https://www.newyorker.com/feed/culture/rss'";
	$.queryYQL(statement, "json", undefined, function (data) {
	  $('#NewYorker').append("<h1> Culture: TV, Movies, Music, Art, and Theatre News and Reviews </h1>")
	  for (var i=0; i< data.query.results.item.length; i++) {
	  	$("#NewYorker").append ("<h2>" +
	  		data.query.results.item[i].title + "</h2><h3>" +
	  		data.query.results.item[i].description + "</h3><p>" +
	  		data.query.results.item[i].pubDate + "</p>")
	  }
	  console.log(data)

	});

})