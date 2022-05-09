(function (window) {
	var helloSpeaker = {};
	var speakWord = "Hello";
	helloSpeaker.speak = function (user) {
	  console.log(speakWord + " " + user);
	}
	window.helloSpeaker = helloSpeaker;
})(window);
