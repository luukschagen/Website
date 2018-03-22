<<<<<<< HEAD
const functions = require('firebase-functions');

=======
//Initializations
const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

//END OF INITIALIZATIONS
>>>>>>> FirebaseGallery
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

<<<<<<< HEAD


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


=======
function parser(location){
	var path = [];
	var string = '';
	for (var i = location.length-1; i >= 0; i--) {
		var char = location[i];
		var sep = location[i-2]+location[i-1]+location[i]
		if (char === '/' || sep === '%2F'){
			path.push(string);
			if (string === 'o'){
				break;
			}
			string = '';
			if (sep === '%2F'){
				i -= 2;
			}	
		}
		else {
			string = char + string;
		}
	}
	console.log(path);
}

exports.storageWatcher = functions.storage.object().onChange((event) => {
	var location = event.data.selfLink;
	parser(location);
});
>>>>>>> FirebaseGallery
