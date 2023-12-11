//index page arrow scroll event
//arrow disapears on scroll right or swipe left.

var rtArrow = document.querySelector(".horizontal-list");
var _grarrow = document.querySelector(".grAro");
var _pkarrow = document.querySelector(".pkAro");

var arrowStatus = true;

_grarrow.style.visibility = "visible";
_pkarrow.style.visibility = "visible";

var rtArrowStatus = function() {
	if (arrowStatus){
	_grarrow.style.visibility = "hidden";
	_pkarrow.style.visibility = "hidden";
	arrowStatus = false;
	}
}

	rtArrow.addEventListener('scroll' , rtArrowStatus);
