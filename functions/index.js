const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });



exports.storageWatcher = functions.storage.object().onChange((event) => {
	var location = event.data.selfLink;
	console.log(location);
	var path = [];
	var string;
	for (var i = location.length-1; i >= 0; i--) {
		var char = location[i];
		console.log(char);
		if (char === '/'){
			path.push(string);
			string = '';
			console.log(path);
		}
		else {
			string = char + string;
			console.log(string);
		}
	}
	console.log(path);
});


