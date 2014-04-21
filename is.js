window.onload = function() {
	//	TEST:  //	document.getElementById('first').innerHTML = "first line";
};


window.onscroll = function() {
	if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
		retrieve();
	}
}

xhr = new XMLHttpRequest();

function retrieve() {
	xhr.open("get", "extraData.txt", true);
	xhr.send(null);
}

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
			//alert("Response received");
			document.body.innerHTML += xhr.responseText;
			console.log("should have been updated now");
		}
		else {
			alert("No response received");
		}
	}
}