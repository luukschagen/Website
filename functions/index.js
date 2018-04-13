//Initializations
const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp();

var db = admin.firestore();
var bucket = admin.storage().bucket();

//END OF INITIALIZATIONS
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.uploadWatcher = functions.storage.object().onFinalize((object)=>{
	let objectlink = object.selfLink;
	let name = object.name;
	let medialink = object.mediaLink;
	let metadata = object.metadata;
	console.log(metadata);
	try {
		let metanumber = Number(metadata);
	}
	catch (error) {
		let metanumber = 0;
	}
	db.collection('images').doc(name).set({
		link: objectlink,
		media: medialink,
		meta: metanumber,
	});
});