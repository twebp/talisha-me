var mainImg = document.querySelector('.mainImg');
var mainImg2 = document.querySelector('.mainImg2');
var thumbImgs = document.querySelectorAll('[id^="thumbImg"]');


thumbImgs.forEach (function(thumb) {
    thumb.addEventListener("click", 
    function () {
        var thumbSrc = 
    thumb.getAttribute('src');
            if (thumbSrc)   {
                mainImg.src = thumbSrc;
            } else if (thumbSrc)   {
                mainImg2.src = thumbSrc;
            } else {
                console.error('Thumbnail source not found');
            }
    });
});