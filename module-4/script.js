var users = [];
(function (window) {
	var users = ["Rohith", "Varsha", "Madhav", "Jackson", "Jimmy", "Julie", "Sai teja", "Praneeth", "Lolly", "Juliet","Romeo","Jaydev","Jaya","Javeed","Kishore"];
	for (var i=0; i < users.length; i++) {
	  var first = users[i].charAt(0).toLowerCase();
		if (first== "j") {
		  byeSpeaker.speak(users[i]);
		} else {
		  helloSpeaker.speak(users[i]);
		}
	}
})(window);
