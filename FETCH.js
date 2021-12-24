const requestURL = "https://jsonplaceholder.typicode.com/users";



function sendRequest(method, url, body = null) {
	return fetch(Url).then(response => {
		return response.json();
	});
}

sendRequest("GET", requestURL).then(data => console.log(data));
sendRequest("GET", requestURL).catch(err => console.log(err));

const body = {
	name: "Vlad",
	age: 26
}

sendRequest("POST", requestURL, body).then(data => console.log(data));
