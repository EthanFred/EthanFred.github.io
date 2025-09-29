document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const jamInfo = document.querySelector('.jams-info')
    const feedback = document.getElementById('feedback');
    const message = document.getElementById('feedback-message');


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


    document.querySelectorAll('.jams-card, .jams-card-long').forEach(card => {
        card.addEventListener("mouseover", () => { 
            if (card.classList.contains('week1')) {
                jamInfo.textContent = 
                "Theme: Horror\n" +
                "Date: Sept 19th 2025\n" +
                "Author: Carrie";
                jamInfo.style.display = 'block';
            } 
            else if (card.classList.contains('week2')) {
                jamInfo.textContent = 
                "Theme: Retro\n" +
                "Date: Sept 5th 2025\n" +
                "Author: Aaron";
                jamInfo.style.display = 'block';
            } 
            else if (card.classList.contains('week3')) {
                jamInfo.textContent = 
                "Theme: Cyberpunk\n" +
                "Date: June 10th 2025\n" +
                "Author: Aubrey";
                jamInfo.style.display = 'block';
            }

        });



    });


    feedback.addEventListener('submit', (event) => {

        event.preventDefault(); 
        
        const input = document.getElementById('feedback-input').value;
      
      
        message.textContent = "Feedback submitted successfully!";
        message.style.display = 'block';
    });


});



