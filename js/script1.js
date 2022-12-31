function enlargeImg(imgs){
	var expandedImg = document.getElementById('fullpict');
	
	expandedImg.src = imgs.src;
	expandedImg.parentElement.style.display = "block";
}