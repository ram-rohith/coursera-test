(function (window) {
	var byeSpeaker = {};
	var speakWord = "Good Bye";
	byeSpeaker.speak = function (user) {
	  console.log(speakWord + " " + user);
	}
	window.byeSpeaker = byeSpeaker;
})(window);
