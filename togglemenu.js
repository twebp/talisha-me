document.querySelectorAll('.toggle-nav').forEach(nav => {
    const button = nav.querySelector('.menu-toggle');
    const menu = nav.querySelector('.header-nav');

    if (!button || !menu) return;

    function setOpen(open) {
        menu.classList.toggle('is-open', open);
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    button.addEventListener('click', () => {
        setOpen(!menu.classList.contains('is-open'));
    });
    document.addEventListener('click', (event) => { 
        if(!nav.contains(event.target)) setOpen(false);
    });
    nav.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
             setOpen(false);
             button.focus();
        }
    });
});