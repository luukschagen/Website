var config = {
    apiKey: "AIzaSyDEhUQ-1nhecJMakgRCbJypQ72tXi5OOJw",
    authDomain: "luuk-stellenbosch-experience.firebaseapp.com",
    databaseURL: "https://luuk-stellenbosch-experience.firebaseio.com",
    projectId: "luuk-stellenbosch-experience",
    storageBucket: "luuk-stellenbosch-experience.appspot.com",
    messagingSenderId: "303921280364"
  };

  var app = firebase.initializeApp(config);
  var storage = app.storage();

$(function() {

  //Header & Footer

  const $header = $('#header').load('/templates/header.html');
  const $sidebar = $('#sidebar').load('/templates/sidebar.html',()=>{
    const $footer = $('#footer').load('/templates/footer.html');
  })
  const $menu = $('#menu').load('/templates/menu.html');
  const $footer = $('#footer').load('/templates/footer.html');

})