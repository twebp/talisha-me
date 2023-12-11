var mainImg = document.getElementById('mainImg');
var thumbImgs = document.querySelectorAll('[id^="thumbImg"]');


thumbImgs.forEach (function(thumb) {
    thumb.addEventListener("click", 
    function () {
        var thumbSrc = 
    thumb.getAttribute('src');
            if (thumbSrc)   {
                mainImg.src = thumbSrc;
            } else {
                console.error('Thumbnail source not found');
            }
    });
});