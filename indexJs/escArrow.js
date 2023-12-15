//index page arrow scroll event
//arrow disapears on scroll down or swipe up.

var dwnArrow = document.querySelector("article");
var _grarrow = document.querySelector(".grAroS");
var _pkarrow = document.querySelector(".pkAroS");
var _grarrow = document.querySelector(".grAroM");
var _pkarrow = document.querySelector(".pkAroM");
var _grarrow = document.querySelector(".grAroD");
var _pkarrow = document.querySelector(".pkAroD");
var _grarrow = document.querySelector(".grAroL");
var _pkarrow = document.querySelector(".pkAroL");

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
