var mMUiUxe = document.querySelector('.mMUiUx');
var uiUxe = document.querySelector('.uiUx');
var mMAppDeade = document.querySelector('.mMAppDead');
var mMAppe = document.querySelector('.mMApp');

mMUiUxe.style.visibility= "visible";
uiUxe.style.visibility = "hidden";
mMAppe.style.visibility= "visible";
mMAppDeade.style.visibility = "hidden";

var toggleOffuiUxe = function() {
    if (mMUiUxe && mMAppe){
        
        mMUiUxe.style.visibility = "hidden";
        uiUxe.style.visibility = "visible";
        
    }
        
};
var toggleOffmMAppe = function() {
    if (mMUiUxe && mMAppe) {
        
        mMAppe.style.visibility = "hidden";
        mMAppDeade.style.visibility = "visible"; 
    }
        
};
    
var toggleOnuiUxe = function() { 
        if (uiUxe && mMAppDeade) {
            
            mMUiUxe.style.visibility = "visible";
            uiUxe.style.visibility = "hidden";         
            
        }      
    };

    var toggleOnmMAppDeade = function() { 
        if (uiUxe && mMAppDeade) {
            
            mMAppe.style.visibility = "visible";
            mMAppDeade.style.visibility = "hidden";
          
        }      
    };

    
    mMUiUxe.addEventListener('mouseover', toggleOffuiUxe);
    mMAppe.addEventListener('mouseover', toggleOffmMAppe);
    uiUxe.addEventListener('mouseleave', toggleOnuiUxe);
    mMAppDeade.addEventListener('mouseleave', toggleOnmMAppDeade);
