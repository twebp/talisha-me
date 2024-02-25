var _mMLogoS = document.querySelector('#mMlogoS');
var _mMLogoL = document.querySelector('#mMlogoL');

var _mM1 = document.querySelector('#mMtext');



_mMLogoS.style.visibility= "visible";
_mMLogoL.style.visibility= "visible";
_mM1.style.visibility = "hidden";


var mlogoToggleOff = function() {
    if (_mMLogoS && _mM1) {
        _mMLogoS.style.visibility = "hidden";
        _mM1.style.visibility = "visible";
    } 
};
        _mMLogoS.addEventListener('mouseover', mlogoToggleOff);
        
  
    
var mlogoToggleOn = function() { 
        if (_mMLogoS && _mM1) {
        _mMLogoS.style.visibility ="visible";
        _mM1.style.visibility ="hidden";
};
   
    _mM1.addEventListener('mouseleave', mlogoToggleOn);
   