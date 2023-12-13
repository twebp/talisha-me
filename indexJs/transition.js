document.addEventListener('DOMContentLoaded', function(){
    
    document.body.classList.add('fade-effect');

     document.querySelectorAll('a').forEach(function (link){
        
        link.addEventListener('click', function (e){

            e.preventDefault();

            const goTo = this.getAttribute('href');

    document.body.classList.add('fade-effect');

                    setTimeout(funtion () {
                        window.location = goTo;

                    } 1000);
        });
    });
});