document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');



    navToggle.addEventListener("click", () => {

        showMenu();
    })


    function showMenu()
    {
        navMenu.classList.toggle("show"); 


        //Set Aria Label
        const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", isExpanded);

    }

});



