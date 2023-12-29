var mMLogo = document.querySelector('#mMlogo');
var mMtext = document.querySelector('#mMtext');
//var mMAppDeade = document.querySelector('.mMAppDead');
//var mMAppe = document.querySelector('.mMApp');

mMLogo.style.visibility= "visible";
mMtext.style.visibility = "hidden";
//mMAppe.style.visibility= "visible";
//mMAppDeade.style.visibility = "hidden";

var mlogoToggleOff = function() {
    if (mMLogo){
        
        mMLogo.style.visibility = "hidden";
        mMtext.style.visibility = "visible";
    }
        
};

    
var mlogoToggleOn = function() { 
        if (mMtext) {
            
            mMtext.style.visibility = "hidden";
            mMLogo.style.visibility = "visible";         
            
        }      
    };


    
    mMLogo.addEventListener('mouseover', mlogoToggleOff);
    
    mMtext.addEventListener('mouseleave', mlogoToggleOn);
    
