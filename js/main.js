// JavaScript Document

const vm = new Vue({
	el : "#app",
	data : {
		welcomeMessage : "Welcome to your first Vue app",
		hasVue : false,
		vuemessage : "You can haz vue!",
		targetUrl : "http:vue.js.org",
		deliciousFruit : [
		{ name : "apples", flavour : "tangy!"},
		{ name : "peaches", flavour : "sweet!"},
		{ name : "grapes", flavour : "sour!"}
		]
	},

	methods : {
		logFruit(e) {
			console.log(e.currentTarget);
		}
	}
});