const admin = require('firebase-admin');
const serviceAccountKey = require("credentials.json")
const Storage = require('@google-cloud/storage');
const fs = require('fs');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: 'https://luuk-stellenbosch-experience.firebaseio.com',
  storageBucket: "gs://luuk-stellenbosch-experience.appspot.com/"
})

const bucket = admin.storage().bucket();
var files = [];
var path = 'images/'

fs.readdir(path, listFiles);

function listFiles(err, filenames){
	if (err){
		console.log('Sorry, an error, for some reason');
		return null;
	}
	else {
		for (var i = 0; i < filenames.length; i++) {
			files[i] = path+filenames[i]
		}
		console.log(files);
	}
}