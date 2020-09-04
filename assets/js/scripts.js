function refresh_bg() {
	var imgs=[['assets/img/24256304919_1819179a9e_k.jpg','https://flic.kr/p/CXrUnM','台北風櫃嘴']];
	var img_idx=Math.floor(Math.random() * imgs.length); 
	document.body.style.backgroundImage = "url('"+imgs[img_idx][0]+"')";
	document.getElementById('location').innerText=imgs[img_idx][2];
	//document.getElementById('image_link').title=imgs[img_idx][1];
	return false;
}

function loadFile(filePath) {
	var result = null;
	var xmlhttp = new XMLHttpRequest();
 	xmlhttp.open("GET", filePath, false);
 	xmlhttp.send();
	if (xmlhttp.status==200) {
 		result = xmlhttp.responseText;
  	}
  	return result;
}
