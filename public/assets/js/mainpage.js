const blogposts = [];
const url = window.location.href;
const page = getPage();
console.log(page);





function getPage() {

	for (var i = 0; i < url.length; i++) {
		if (url[i] === '?'){
			if(url.slice(i+1,i+6) === 'page='){
				return Number(url.slice(i+6))
			}
		}
	}

	return 1;
}