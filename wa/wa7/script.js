document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const jamInfo = document.querySelector('.jams-info')
    const feedback = document.getElementById('feedback');
    const message = document.getElementById('feedback-message');

    let btn = document.querySelector('#theme').addEventListener('click', theme);

    function theme() {
        if (confirm('Set localStorage data theme? This data will be stored until you clear it.'))
        {
            setTheme(localStorage.getItem('userTheme') || 'light');
        }
    }

    // Save user's theme choice
    function setTheme(theme) {
        let inTheme = theme;
        if(inTheme == 'dark')
        {
            theme = 'light';
        }
        else{
            theme = 'dark';
        }
        localStorage.setItem('userTheme', theme);
        document.body.className = theme;
        viewLocalStorage();
    }

    // Load saved theme on page load
    window.addEventListener('load', function() {
        const savedTheme = localStorage.getItem('userTheme') || 'light';
        document.body.className = savedTheme;
        viewLocalStorage();
    });
   



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

function setLocalStorage() {
    if (confirm('Set localStorage data username and feedback? This data will be stored until you clear it.'))
    {
        const key = document.getElementById('ls-username').value;
        const value = document.getElementById('ls-text').value;
        if (key && value) {
            localStorage.setItem(key, value);
            alert(`Saved to localStorage!\nKey: "${key}"\nValue: "${value}"\n\nCheck Application tab in DevTools!`);
            viewLocalStorage();
        }
    }
}

function viewLocalStorage() {
    const output = document.getElementById('output-info');
    let html = '';
    
    if (localStorage.length === 0) {
        html = '<span class="empty">Nothing to display</span>';
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            if(key == 'userTheme')
            {
                html += `<div><span class="key">${key}</span> changed to: <span class="value">${value}</span></div>`;
            }
            else
            {
                html += `<div><span class="key">${key}</span> submitted feedback: <span class="value">${value}</span></div>`;
            }
        }
    }
    output.innerHTML = html;
}

function clearLocalStorage() {
    if (confirm('Clear all localStorage data (including theme)?')) {
        localStorage.clear();
        viewLocalStorage();
        alert('localStorage cleared!');
    }
}

