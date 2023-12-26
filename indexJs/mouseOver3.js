var _logo = document.querySelector('#mMlogo');
var _logolink = document.querySelector('#mMtext');

_logo.style.visibility  = 'visible';
_logolink.style.visibility = 'hidden';

var mlogoToggleOff = function() {
    if (_logo && _logolin) {
        _logo.style.visibility  = 'hidden';
        _logolink.style.visibility = 'visible';
    }
};
var mlogoToggleOn = function() {
    if (_logolink && _logo){
    _logo.style.visibility  = 'visible';
    _logolink.style.visibility = 'hidden';
}
};
if (_logo) {
_logo.addEventListener('mouseover' , mlogoToggleOff);
}
if(_logolink) {
_logolink.addEventListener('mouseleave' , mlogoToggleOn);
}