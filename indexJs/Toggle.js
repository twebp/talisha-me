var logo1 = document.querySelector('#guardian');
var logo2 = document.querySelector('#guardian1');


logo1.style.visibility= "visible";
logo2.style.visibility = "hidden";


var toggleoff = function() {
    if (logo1){
        
        logo1.style.visibility = "hidden";
        logo2.style.visibility = "visible";
        
    }
        
};
var toggleOn = function() {
    if (logo2){
        
        logo1.style.visibility = "visible";
        logo2.style.visibility = "hidden";
        
    }
        
};
logo2.addEventListener('mouseover', mlogoToggleOff);
    
logo1.addEventListener('mouseleave', mlogoToggleOn);