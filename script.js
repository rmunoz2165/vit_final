const primaryNav = document.querySelector('.primmary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

// we want default navigation to slide out

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }   else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);

    }
});

// JS for LA Accidents
var divElement = document.getElementById('viz1646352253183');    
    var vizElement = divElement.getElementsByTagName('object')[0];              
        if ( divElement.offsetWidth > 800 ) { 
            vizElement.style.width='1000px';
            vizElement.style.height='850px';
            } else if ( divElement.offsetWidth > 500 ) { 
                vizElement.style.width='1000px';vizElement.style.height='850px';
                } else { 
                    vizElement.style.minWidth='1000px';
                    vizElement.style.maxWidth='100%';
                    vizElement.style.height='850px';
                }                     
    var scriptElement = document.createElement('script');                    
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
    vizElement.parentNode.insertBefore(scriptElement, vizElement);    
