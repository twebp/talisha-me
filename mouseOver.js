var _mMunchies = document.querySelector('.mMunchies');
var _mM = document.querySelector('.mM');

var logoStatus = true;
var wordStatus = false;

_mMunchies.style.visibility= "visible";
_mM.style.visibility = "hidden";

var mlogoToggleOff = function() {
    if (logoStatus) {
        _mMunchies.style.visibility = "hidden";
        _mM.style.visibility = "visible";
        logoStatus = false;
        wordStatus = true;
        
    }
};
        _mMunchies.addEventListener('mouseover', mlogoToggleOff);
    
var mlogoToggleOn = function() { 
        if (wordStatus) {
        
            _mMunchies.style.visibility = "visible";
            _mM.style.visibility = "hidden";
            logoStatus = true;
            wordStatus = false;
            
    }
};
   
    _mM.addEventListener('mouseleave', mlogoToggleOn)

