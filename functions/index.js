//Initializations
const admin = require('firebase-admin');
const functions = require('firebase-functions');
import * as storageAPI from `@google-cloud/storage`;


admin.initializeApp(functions.config().firebase);

var db = admin.firestore();
var bucket = admin.storage().bucket();

//END OF INITIALIZATIONS
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

function parser(location){
	var path = '';
	var string = '';
	var newLocation = decodeURIComponent(location);
	for (var i = newLocation.length-1; i >= 0; i--) {
		var char = newLocation[i];
		var sep = newLocation[i-2]+newLocation[i-1]+newLocation[i]
		if (sep === '/o/'){
			path = string;
		}
		else {
			string = char + string;
		}
	}
	return path;
}


exports.storageWatcher = functions.storage.object().onChange((event) => {
	var location = event.data.selfLink;
	var path = parser(location);
	bucket.getFiles
})