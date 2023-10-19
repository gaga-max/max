const primaryHeader = document.quarySelector(".primary-header");


const navToggle = document.quarySelector(".mobile-nav-toggle");
const primaryNav =  document.quarySelector(".primary-navigation");

navToggle.addEventListener('click', ()=>{
    primaryNav.hasAttribute('data-visible')
    ? navToggle.setAttribute("aria-expanded", false) 
    : navToggle.setAttribute("aria-expanded", true)

    
    primaryNav.toggleAttribute("data-visible");

    primaryHeader.toggleAttribute('data-overlay')


});


