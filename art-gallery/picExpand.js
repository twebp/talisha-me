/Show Magnified Images


//larger images
var _maxImg = document.getElementsByClassName ('max-img');
var _satbury = document.querySelector('img1');
var _bbWolf = document.querySelector('img2');
var _calypso = document.querySelector('img3');
var _aOdds = document.querySelector('img4');
var _saundor = document.querySelector('img5');
var _tear = document.querySelector('img6');
var _terrain = document.querySelector('img7');
var _nymph = document.querySelector('img8');
var _prophecy = document.querySelector('img9');

//Smaller images
var miniImg = document.querySelector('.flex-item15')
var satbury = document.querySelector('.flex-item2');
var bbWolf = document.querySelector('.flex-item3');
var calypso = document.querySelector('.flex-item4');
var aOdds = document.querySelector('.flex-item5');
var saundor = document.querySelector('.flex-item6');
var tear = document.querySelector('.flex-item7');
var terrain = document.querySelector('.flex-item8');
var nymph = document.querySelector('.flex-item9');
var prophecy = document.querySelector('.flex-item10');


var miniPhoto = ['satbury' , 'bbWolf' , 'calypso' , 'aOdds' , 'saundor' , 'tear' , 'terrain' , 'nymph' , 'prophecy'];
var maxPhoto = ['_satbury' , '_bbWolf' , '_calypso' , '_aOdds' , '_saundor' , '_tear' , '_terrain' , '_nymph' , '_prophecy'];

var miniLength = miniPhoto.length;
var maxLength = maxPhoto.length;

maxPhoto.style.visibility = 'hidden';
miniPhoto.style.visibility = 'visible';
maxPhoto = false;


//this unhides larger photos on hover
var maximizeImg = function() {

   // if (maxPhoto == false && miniPhoto == true)
     for (var i = 0; i < miniLength; i++)

        miniPhoto[0].style.visibility = 'hidden';
        maxPhoto[0].style.visibility = 'visible';
    break;
        miniPhoto[1].style.visibility = 'hidden';
        maxPhoto[1].style.visibility = 'visible';
    break;
        miniPhoto[2].style.visibility = 'hidden';
        maxPhoto[2].style.visibility = 'visible';
    break;
        miniPhoto[3].style.visibility = 'hidden';       
        maxPhoto[3].style.visibility = 'visible';
    break;
        miniPhoto[4].style.visibility = 'hidden';
        maxPhoto[4].style.visibility = 'visible';
    break;
        miniPhoto[5].style.visibility = 'hidden';
        maxPhoto[5].style.visibility = 'visible';
    break;
        miniPhoto[6].style.visibility = 'hidden';
        maxPhoto[6].style.visibility = 'visible';
   break;
        miniPhoto[7].style.visibility = 'hidden';
        maxPhoto[7].style.visibility = 'visible';
   break;
        miniPhoto[8].style.visibility = 'hidden';
        maxPhoto[8].style.visibility = 'visible';
   break;
        miniPhoto[9].style.visibility = 'hidden';
        maxPhoto[9].style.visibility = 'visible';
    
        maxPhoto = true;
        miniPhoto = false;
}

miniPhoto.addeventlistener('click' , maximizeImg());