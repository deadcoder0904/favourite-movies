(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(() => {
	const { movies } = require('./movies.json');
	const movieDetails = $("#movieDetails:first");
	let arr = [];
	let i = 0;
	while (i < movies.length) {
		$.getJSON("http://www.omdbapi.com/?t=" + movies[i].toLowerCase() + "&y=&plot=short&r=json", data => {
			console.log(data);
			arr = [];
			const poster = data.Poster === 'N/A' ? 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvLE-IihC94Yf8QrtQCH_DZRN7o4P4t9FPnPM96SneH6_gEHCkvg' : data.Poster;
			arr.push("<a target='_blank' href='http://www.imdb.com/title/" + data.imdbID + "' class='fl w-50 w-25-l link overflow-hidden'>");
			arr.push("<div class='ba b--black-10 pa2 grow'>");
			arr.push("<div class='grow aspect-ratio--4x6' style='background: url(" + poster + ") no-repeat center center; background-size: cover;'>");
			arr.push("</div>");
			arr.push("<h4 class='tc bg-gray white'>" + data.Title + "</h4>");
			arr.push("<h2 class='tc bg-gray white'>" + data.Released + "</h2>");
			arr.push("<h3 class='tc bg-gray white'> IMDB Rating: " + data.imdbRating + "</h3>");
			arr.push("</div>");
			arr.push("</a>");
			movieDetails.append(arr.join(''));
		});
		i++;
	}
});

},{"./movies.json":2}],2:[function(require,module,exports){
module.exports={
	"movies" : [
							"Pulp Fiction",
							"The Usual Suspects",
							"The Shawshank Redemption",
							"Se7en",
							"Fight Club",
							"Good Will Hunting",
							"The Wolf of Wall Street",
							"Laal Rang",
							"Hum Dil De Chuke Sanam",
							"Rahasya",
							"Talvar",
							"Gupt",
							"Aashiqui 2",
							"Rock On",
							"Pirates of the Caribbean: The Curse of the Black Pearl",
							"Pirates of the Caribbean: Dead Man's Chest",
							"Pirates of the Caribbean: At World's End",
							"Pirates of the Caribbean: On Stranger Tides",
						]
}

},{}]},{},[1]);
