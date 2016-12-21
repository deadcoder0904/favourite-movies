(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(() => {
	const { movies } = require('./movies.json');
	const movieDetails = $("#movieDetails:first");
	let arr = [];
	let i = 0;
	while (i < movies.length) {
		const poster = movies[i].poster;
		$.getJSON("http://www.omdbapi.com/?t=" + movies[i].name.toLowerCase() + "&y=&plot=short&r=json", data => {
			arr = [];
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
							{
								"name": "Pulp Fiction",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg"
							},
							{
								"name": "The Usual Suspects",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SX300.jpg"
							},
							{
								"name": "The Shawshank Redemption",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
							},
							{
								"name": "Mulholland Drive",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWM2MDZmMDgtYjViOS00YzBmLWE4YzctMDMyYTQ2YTc4MmVkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
							},
							{
								"name": "Se7en",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTU3MTE4NF5BMl5BanBnXkFtZTcwOTgxNDM2Mg@@._V1_SX300.jpg"
							},
							{
								"name": "Fight Club",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGM2NjQxZTAtMmU5My00YTk5LWFmOWMtYjZlYzk4YzMwNjFlXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
							},
							{
								"name": "Good Will Hunting",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
							},
							{
								"name": "The Wolf of Wall Street",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
							},
							{
								"name": "The Truman Show",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
							},
							{
								"name": "Vertigo",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
							},
							{
								"name": "Catch Me If You Can",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg"
							},
							{
								"name": "Shutter Island",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX300.jpg"
							},
							{
								"name": "Forrest Gump",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYThjM2MwZGMtMzg3Ny00NGRkLWE4M2EtYTBiNWMzOTY0YTI4XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
							},
							{
								"name": "Gone Girl",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg"
							},
							{
								"name": "Swordfish",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzk5ZmQxMWYtM2QyNi00MTY3LTlmNjItYjUwODY3Y2YwOTIwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
							},
							{
								"name": "Now You See Me",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
							},
							{
								"name": "The Prestige",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
							},
							{
								"name": "NightCrawler",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5NjkzMjE5MV5BMl5BanBnXkFtZTgwNTMzNTk4MjE@._V1_SX300.jpg"
							},
							{
								"name": "Inception",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
							},
							{
								"name": "Million Dollar Baby",
								"poster": "http://www.gstatic.com/tv/thumb/movieposters/35226/p35226_p_v8_ae.jpg"
							},
							{
								"name": "Ratatouille",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
							},
							{
								"name": "Finding Nemo",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
							},
							{
								"name": "Sangharsh",
								"poster": "https://upload.wikimedia.org/wikipedia/en/3/3b/Sansgharshposter.jpg"
							},
							{
								"name": "Kaal",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjczMjFhMTctZThmYi00ZjExLTgwMjUtYTNmNmU3MWQwZjQ5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
							},
							{
								"name": "Kahaani",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1NDI0NzkyOF5BMl5BanBnXkFtZTcwNzAyNzE2Nw@@._V1_SX300.jpg"
							},
							{
								"name": "Rahasya",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzIzMDA2MjQwNF5BMl5BanBnXkFtZTgwNDMwOTA4NDE@._V1_SX300.jpg"
							},
							{
								"name": "Talvar",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzODg0Mjc4M15BMl5BanBnXkFtZTgwNzY4Mzc3NjE@._V1_SX300.jpg"
							},
							{
								"name": "Gupt",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTY4NjQ5MzY2OF5BMl5BanBnXkFtZTcwMDYwMDE0MQ@@._V1_SX300.jpg"
							},
							{
								"name": "Tango Charlie",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOWEwMTA3ZmQtMGRlMi00Y2U1LWFiMDItNGIyOWFmYmY5NWYzXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
							},
							{
								"name": "Darr",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTczMzA1OWUtYTFlZS00NzUzLTg0MjQtNTUzMDE4MmVjZjgyXkEyXkFqcGdeQXVyNTE0MDc0NTM@._V1_SX300.jpg"
							},
							{
								"name": "Darna Mana Hai",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0Njk4NTQyM15BMl5BanBnXkFtZTcwNzg2ODgzMQ@@._V1_UY268_CR3,0,182,268_AL_.jpg"
							},
							{
								"name": "Darna Zaroori Hai",
								"poster": "https://webmazain.files.wordpress.com/2009/12/darnazaroorihai28200629.jpg"
							},
							{
								"name": "Once Upon a Time in Mumbai",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMTg1NzY3NDReQTJeQWpwZ15BbWU3MDQ2NzQxNzM@._V1_SX300.jpg"
							},
							{
								"name": "Ek Thi Daayan",
								"poster": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Ek_Thi_Poster.jpg/220px-Ek_Thi_Poster.jpg"
							},
							{
								"name": "Baazigar",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3OTE1MDAxNV5BMl5BanBnXkFtZTgwNjM1NDk5NTE@._V1_SX300.jpg"
							},
							{
								"name": "1920",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzMjg3MTkxOV5BMl5BanBnXkFtZTgwNjY4NzYxNTE@._V1_SX300.jpg"
							},
							{
								"name": "Laal Rang",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDdmMDc5NzQtOTY0MC00NDA5LWFmMDQtNWYwYzNlODllZGY5XkEyXkFqcGdeQXVyNjY0OTkwNTI@._V1_SX300.jpg"
							},
							{
								"name": "Hum Dil De Chuke Sanam",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZWI5ZWMxN2QtNjJmNS00M2EwLTg3ZmUtYzI5ODY3MWM2MzM1XkEyXkFqcGdeQXVyNDk3Mzg2OTc@._V1_SX300.jpg"
							},
							{
								"name": "Fashion",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxNzg4NDI0OV5BMl5BanBnXkFtZTcwNzIyMjk5MQ@@._V1_SX300.jpg"
							},
							{
								"name": "Ab Tak Chhappan",
								"poster": "http://lb.cineklik.com/images/tb/150x220//movie_photos/ab_tak_chhappan_2_poster.jpeg.jpg"
							},
							{
								"name": "Ab Tak Chhappan 2",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTU0OWM3ODktMzZmOC00MTJjLWE2ZTktYzA1ZjE4OTM4ZDE4XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
							},
							{
								"name": "The Attacks of 26/11",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyMDExNDk5NV5BMl5BanBnXkFtZTcwMzc0MDQwOQ@@._V1_SX300.jpg"
							},
							{
								"name": "Welcome",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0OTI3MDE0OF5BMl5BanBnXkFtZTcwODIwMzU1MQ@@._V1_SX300.jpg"
							},
							{
								"name": "Dus Kahaniyaan",
								"poster": "http://www.gstatic.com/tv/thumb/movieposters/174959/p174959_p_v8_aa.jpg"
							},
							{
								"name": "Taxi No. 9 2 11: Nau Do Gyarah",
								"poster": "http://cdn.albumart.in/albums/4922/12baba91ab021505eda8090218653650-500x500.jpg"
							},
							{
								"name": "Agni Sakshi",
								"poster": "http://s1.dmcdn.net/JdT0k.jpg"
							},
							{
								"name": "Khamoshi: The Musical",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MzIyNTE5MF5BMl5BanBnXkFtZTgwMjY4ODk1MDE@._V1_SX300.jpg"
							},
							{
								"name": "Krantiveer",
								"poster": "https://upload.wikimedia.org/wikipedia/en/5/55/Krantiveer.jpg"
							},
							{
								"name": "Satya",
								"poster": "https://upload.wikimedia.org/wikipedia/en/1/12/Satya.jpg"
							},
							{
								"name": "Traffic Signal",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQwYmZlMmUtNDk3My00MjBiLTljYzQtOGI4Mzg3N2VjMmEzXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
							},
							{
								"name": "Kal Ho Naa Ho",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxNzU2MDczOV5BMl5BanBnXkFtZTcwNTU5NTk5Mw@@._V1_SX300.jpg"
							},
							{
								"name": "Nayak: The Real Hero",
								"poster": "http://www.gstatic.com/tv/thumb/movieposters/28331/p28331_p_v8_aa.jpg"
							},
							{
								"name": "Lage Raho Munna Bhai",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzg2NzkzNjU0M15BMl5BanBnXkFtZTgwMTI1MDA2MDE@._V1_SX300.jpg"
							},
							{
								"name": "A Wednesday",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzODEzMjE1MTJeQTJeQWpwZ15BbWU3MDE3NjQ5Mzk@._V1_SX300.jpg"
							},
							{
								"name": "Like Stars on Earth",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4NzYwNjYzNV5BMl5BanBnXkFtZTcwNjE4MjA3Mg@@._V1_SX300.jpg"
							},
							{
								"name": "Rang De Basanti",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwNzA5MjAwN15BMl5BanBnXkFtZTcwMzY5MzIzMQ@@._V1_SX300.jpg"
							},
							{
								"name": "Munna Bhai M.B.B.S.",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzQ3NjAxMV5BMl5BanBnXkFtZTcwNDg2ODgzMQ@@._V1_SX300.jpg"
							},
							{
								"name": "Mr.India",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjJjNjEyOTEtNDhhZi00MDM1LWExMTYtZmNjNDE1OTQ2OTE0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
							},
							{
								"name": "Lajja",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMTc2MDA5MF5BMl5BanBnXkFtZTcwODY2ODMyMQ@@._V1_SX300.jpg"
							},
							{
								"name": "Raju Chacha",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTUzZTA5MGItNzJlZi00MDk0LTkzN2ItNmYyZDlmYjM4MmVhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
							},
							{
								"name": "Pyaar To Hona Hi Tha",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE2MDcwMTM0N15BMl5BanBnXkFtZTcwNTI5MDAzMQ@@._V1_SX300.jpg"
							},
							{
								"name": "Ishq",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4MTE5NjMwN15BMl5BanBnXkFtZTcwMDgwMDEyMQ@@._V1_SX300.jpg"
							},
							{
								"name": "Diljale",
								"poster": "https://upload.wikimedia.org/wikipedia/en/8/89/Diljalefilm.jpg"
							},
							{
								"name": "Hulchul",
								"poster": "https://upload.wikimedia.org/wikipedia/en/8/8f/Hulchul_FilmPoster.jpeg"
							},
							{
								"name": "Hungama",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA5NTQyMzU1MDBeQTJeQWpwZ15BbWU4MDE5NTY1MTQx._V1_SX300.jpg"
							},
							{
								"name": "Hum Aapke Hain Koun...!",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwMjk5NDg1Nl5BMl5BanBnXkFtZTgwMjA2NTkwMzE@._V1_SX300.jpg"
							},
							{
								"name": "Ek Ladka Ek Ladki",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjEwOTg5NTY1Ml5BMl5BanBnXkFtZTgwNjE2OTk1MDE@._V1_UY268_CR9,0,182,268_AL__QL50.jpg"
							},
							{
								"name": "Hum Saath-Saath Hain: We Stand United",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2NDQ5OTIzNl5BMl5BanBnXkFtZTgwMTI5ODUzNzE@._V1_SX300.jpg"
							},
							{
								"name": "Andaz Apna Apna",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWEzN2U1NWEtZThkOC00YWYyLWE0YzEtMWU3ZWQ0ZTk1NzgxXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"
							},
							{
								"name": "Ghanchakkar",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjUyNzYzNjkxMF5BMl5BanBnXkFtZTcwNzQwNTA0OQ@@._V1_SX300.jpg"
							},
							{
								"name": "3 Idiots",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZWRlNDdkNzItMzhlZC00YTdmLWIwNjktYjY5NjQ1ZmQ3N2FkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
							},
							{
								"name": "Zeher",
								"poster": "https://i.ytimg.com/vi/uHwoCk50aw0/maxresdefault.jpg"
							},
							{
								"name": "Company",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGRkNDJlZmEtZGNhNi00OTRhLWE5NDUtYmMwNGZjMzU0MDk5XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"
							},
							{
								"name": "Golmaal: Fun Unlimited",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmE3YmNiM2YtM2MxMi00ZDhmLTk1ZTQtODdjOWY4YjVkYThmXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
							},
							{
								"name": "Zameer",
								"poster": "https://i.ytimg.com/vi/MpDRZF2AH9M/maxresdefault.jpg"
							},
							{
								"name": "London Dreams",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNzk2MDgxOF5BMl5BanBnXkFtZTcwOTE0MDY5Mg@@._V1_SX300.jpg"
							},
							{
								"name": "All the Best: Fun Begins",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE2NDYwMjU2Nl5BMl5BanBnXkFtZTcwMjU4MDU4Mg@@._V1_SX300.jpg"
							},
							{
								"name": "Sunday",
								"poster": "http://www.gstatic.com/tv/thumb/dvdboxart/177555/p177555_d_v7_aa.jpg"
							},
							{
								"name": "Vaastav: The Reality",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMzE5MTc1OV5BMl5BanBnXkFtZTcwMDk2ODgzMQ@@._V1_SX300.jpg"
							},
							{
								"name": "The Legend of Bhagat Singh",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2NGRhMWMtZDdkOS00ZjcxLWI2OTAtOTI3ZWU0YWM3MGM5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
							},
							{
								"name": "Jannat: In Search of Heaven...",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWI5OWI3NDUtOGNlNS00YjMyLWExMTQtMTA2NTk3MDdiYWZmXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
							},
							{
								"name": "Hamari Adhuri Kahaani",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTBmZWFhMDAtNzk2NC00MjM2LTk2ZTMtYzA3YzNiNjE2OWJmXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
							},
							{
								"name": "Aashiqui 2",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzNzczNTg2M15BMl5BanBnXkFtZTcwMjUxNjk0OQ@@._V1_SX300.jpg"
							},
							{
								"name": "Rock On",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2NjIwODc4N15BMl5BanBnXkFtZTcwMDgwMzM4MQ@@._V1_UY268_CR1,0,182,268_AL__QL50.jpg"
							},
							{
								"name": "Natsamrat",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjkzZWIyZTctN2U3Ny00MDZlLTkzZTYtMTI2MWI5YTFiZWZkXkEyXkFqcGdeQXVyNTM2NTg3Nzg@._V1_SX300.jpg"
							},
							{
								"name": "Pachadlela",
								"poster": "https://cdn4.static.ovimg.com/m/03cfzqp/?width=1200&mode=thumb"
							},
							{
								"name": "Zapatlela",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzNiNjgzMjMtY2Q1MS00OTI5LWI2MzItNzZjNzU0MDhiNmE4XkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_UY268_CR16,0,182,268_AL__QL50.jpg"
							},
							{
								"name": "Pak Pak Pakaak",
								"poster": "http://marathimovieworld.com/images/pak-pak-pakaak-film-posters.jpg"
							},
							{
								"name": "Natarang",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BY2IwNzU5YzgtN2E4Ni00NmQ2LWEyYmItMjFmN2FlY2U1YWFjXkEyXkFqcGdeQXVyNDU5MzA2NzI@._V1_SX300.jpg"
							},
							{
								"name": "Pirates of the Caribbean: The Curse of the Black Pearl",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyNDM4MTc2N15BMl5BanBnXkFtZTYwNDk0Mjc3._V1_SX300.jpg"
							},
							{
								"name": "Pirates of the Caribbean: Dead Man's Chest",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg"
							},
							{
								"name": "Pirates of the Caribbean: At World's End",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg"
							},
							{
								"name": "Pirates of the Caribbean: On Stranger Tides",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg"
							}
						]
}

},{}]},{},[1]);
