window.onload = function() {
	//	TEST:  //	document.getElementById('first').innerHTML = "first line";
};

xhr = new XMLHttpRequest();

function retrieve() {
	xhr.open("get", "extraData.txt", true);
	xhr.send(null);

}

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
			alert("Response received");
		}
		else {
			alert("No response received");
		}
	}
}