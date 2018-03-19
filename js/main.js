// JavaScript Document

const vm = new Vue({
	el : "#app",
	data : {
		welcomeMessage : "Checkout These Movies",
		hasVue : false,
		vuemessage : "You can haz vue!",
		targetUrl : "http:vuejs.org",
		moviedata : [
		{ name : "Starwars", thumb : "forceawakens.jpg", description : "It's a starwars movie"},
		{ name : "Stranger Things", thumb : "strangerthings.jpg", description : "don't get lost in the upside down"},
		{ name : "The Avengers", thumb : "avengers.jpg", description : "a bunch of superheros hang out"}
		],

		moviename : "movie name goes here",
		moviedescription : "movie desc goes here",
		moviesource : "null"
	},

	methods : {
		loadMovie(e) {
		e.preventDefault();

		console.log(e.currentTarget);

		dataKey = e.currentTarget.href.substring(e.currentTarget.href.lastIndexOf('/') + 1); //find the href/name of the video and use it to filter the collection

		currentData = this.moviedata.filter(video => video.vidsource === dataKey); //filter the collection and use the video name as a ref

		this.moviename = currentData[0].name;
		this.moviedescription = currentData[0].description;
		this.moviesource = datakey;
		} 
	}
});