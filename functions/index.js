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
	let basename = name.split('/')[1];
	if (name.includes('images')){
		db.collection('images').doc(basename).set({
			link: objectlink
		});
	}
	else if (name.includes('blogposts')){
		let number = name[name.length-6]
		db.collection('blogposts').doc(basename).set({
			link: objectlink,
			num: number,
		});
	}
});

exports.deleteWatcher = functions.storage.object().onDelete((object)=>{
	let objectlink = object.selfLink;
	let name = object.name;
	let basename = name.split('/')[1];
	if (name.includes('images')){
		db.collection('images').doc(basename).delete();
	}
	else if (name.includes('blogposts')){
		let number = name[name.length-6]
		db.collection('blogposts').doc(basename).delete();
	}
});