//index page arrow scroll event
//arrow disapears on scroll down or swipe up.

var dwnArrow = document.querySelector("#article");
var _grarrow = document.querySelector(".grAroS");
var _pkarrow = document.querySelector(".pkAroS");
var _grDwn = document.querySelector(".grAroM-2");
var _pkDwn = document.querySelector(".pkAroM-2");
var _swipe = document.querySelector(".swipe")
var _up = document.querySelector(".up")
var _scroll = document.querySelector(".scroll")
var _down = document.querySelector(".down")

var arrowStatus = true;

_grarrow.style.visibility = "visible";
_pkarrow.style.visibility = "visible";
_swipe.style.visibility = "visible";
_up.style.visibility = "visible";
_scroll.style.visibility = "visible";
_down.style.visibility = "visible";
_grDwn.style.visibility = "visible";
_pkDwn.style.visibility = "visible";


var dwnArrowStatus = function() {
	if (arrowStatus) {
	_grarrow.style.visibility = "hidden";
	_pkarrow.style.visibility = "hidden";
	_swipe.style.visibility = "hidden";
	_up.style.visibility = "hidden";
	_scroll.style.visibility = "hidden";
_down.style.visibility = "hidden";
_grDwn.style.visibility = "hidden";
_pkDwn.style.visibility = "hidden";
	arrowStatus = false;
	}
}

	dwnArrow.addEventListener('scroll' , dwnArrowStatus);
