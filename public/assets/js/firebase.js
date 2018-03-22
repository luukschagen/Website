var config = {
  apiKey: "AIzaSyDEhUQ-1nhecJMakgRCbJypQ72tXi5OOJw",
  authDomain: "luuk-stellenbosch-experience.firebaseapp.com",
  databaseURL: "https://luuk-stellenbosch-experience.firebaseio.com",
  projectId: "luuk-stellenbosch-experience",
  storageBucket: "luuk-stellenbosch-experience.appspot.com",
  messagingSenderId: "303921280364"
};

//Storage
var app = firebase.initializeApp(config);
var storage = app.storage();
var ref = storage.ref();

var image = ref.child("Gallery").child("IMG_0858_1.JPG");

var webimage = document.getElementsByClassName("image fit");

console.log(webimage)

var imageURL;

image.getDownloadURL().then(function(url) {
	for (var i = 0; i < webimage.length; i++) {
		webimage[i].href = url;
		webimage[i].children[0].src = url;
	}
})


//end Storage


