//index page arrow scroll event
//arrow disapears on scroll down or swipe up.

var dwnArrow = document.querySelector("article");
var _grarrow = document.querySelector(".grAro");
var _pkarrow = document.querySelector(".pkAro");

var arrowStatus = true;

_grarrow.style.visibility = "visible";
_pkarrow.style.visibility = "visible";

var dwnArrowStatus = function() {
	if (arrowStatus){
	_grarrow.style.visibility = "hidden";
	_pkarrow.style.visibility = "hidden";
	arrowStatus = false;
	}
}

	dwnArrow.addEventListener('scroll' , dwnArrowStatus);
