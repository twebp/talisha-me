var _mMunchiesS = document.getElementById('.flex3');
var _mM1 = document.getElementById('.flex9');

var logoStatus = true;
var wordStatus = false;

_mMunchiessS.style.visibility= "visible";
_mM1.style.visibility = "hidden";

var mlogoToggleOff = function() {
    if (logoStatus) {
        _mMunchiesS.style.visibility = "hidden";
        _mM1.style.visibility = "visible";
        logoStatus = false;
        wordStatus = true;
        
    }
};
        _mMunchiesS.addEventListener('mouseover', mlogoToggleOff);
    
var mlogoToggleOn = function() { 
        if (wordStatus) {
        
            _mMunchiesS.style.visibility = "visible";
            _mM1.style.visibility = "hidden";
            logoStatus = true;
            wordStatus = false;
            
    }
};
   
    _mM1.addEventListener('mouseleave', mlogoToggleOn)

