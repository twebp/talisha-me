//index page arrow scroll event
//arrow disapears on scroll down or swipe up.

var dwnArrow = document.querySelector("#article");
var _grarrow = document.querySelector(".grAroS");
var _pkarrow = document.querySelector(".pkAroS");
var _swipe = document.querySelector(".swipe")
var _up = document.querySelector(".up")


var arrowStatus = true;

_grarrow.style.visibility = "visible";
_pkarrow.style.visibility = "visible";
_swipe.style.visibility = "visible";
_up.style.visibility = "visible";

var dwnArrowStatus = function() {
	if (arrowStatus) {
	_grarrow.style.visibility = "hidden";
	_pkarrow.style.visibility = "hidden";
	_swipe.style.visibility = "hidden";
	_up.style.visibility = "hidden";
	arrowStatus = false;
	}
}

	dwnArrow.addEventListener('scroll' , dwnArrowStatus);
