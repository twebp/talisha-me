var _mMunchiesS = document.querySelector('.mMunchiesS');
var _mMunchiesM = document.querySelector('.mMunchiesM');
var _mMunchiesD = document.querySelector('.mMunchiesD');
var _mMunchiesL = document.querySelector('.mMunchiesL');
var _mM1 = document.querySelector('.mM1');
var _mM2 = document.querySelector('.mM2');
var _mM3 = document.querySelector('.mM3');
var _mM4 = document.querySelector('.mM4');


_mMunchiesS.style.visibility= "visible";
_mM1.style.visibility = "hidden";
_mMunchiesM.style.visibility= "visible";
_mM2.style.visibility = "hidden";
_mMunchiesD.style.visibility= "visible";
_mM3.style.visibility = "hidden";
_mMunchiesL.style.visibility= "visible";
_mM4.style.visibility = "hidden";

var mlogoToggleOff = function() {
    if (window.innerWidth >= 576) {
        _mMunchiesS.style.visibility = "hidden";
        _mM1.style.visibility = "visible";
    } else if (window.innerWidth >= 768) {
        _mMunchiesM.style.visibility = "hidden";
        _mM2.style.visibility = "visible";
    } else if(window.innerWidth >= 992)   {
        _mMunchiesD.style.visibility = "hidden";
        _mM3.style.visibility = "visible";
    } else (window.innerWidth >= 1200)  {
        _mMunchiesL.style.visibility = "hidden";
        _mM4.style.visibility = "visible";
    }
};
        _mMunchiesS.addEventListener('mouseover', mlogoToggleOff);
        _mMunchiesM.addEventListener('mouseover', mlogoToggleOff);
        _mMunchiesD.addEventListener('mouseover', mlogoToggleOff);
        _mMunchiesL.addEventListener('mouseover', mlogoToggleOff);
    
var mlogoToggleOn = function() { 
        if (window.innerWidth >= 576) {
            _mMunchiesS.style.visibility = "visible";
            _mM1.style.visibility = "hidden";
        } else if (window.innerWidth >= 768) {
            _mMunchiesM.style.visibility = "visible";
            _mM2.style.visibility = "hidden";
        } else if (window.innerWidth >= 992) {
            _mMunchiesD.style.visibility = "visible";
            _mM3.style.visibility = "hidden";
        } else (window.innerWidth >= 1200) {
            _mMunchiesL.style.visibility = "visible";
            _mM4.style.visibility = "hidden";
        }
};
   
    _mM1.addEventListener('mouseleave', mlogoToggleOn)
    _mM2.addEventListener('mouseleave', mlogoToggleOn)
    _mM3.addEventListener('mouseleave', mlogoToggleOn)
    _mM4.addEventListener('mouseleave', mlogoToggleOn)



