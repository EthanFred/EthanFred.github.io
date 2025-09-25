document.addEventListener("DOMContentLoaded", () => {
    
    // Get all filter buttons and photo cards
    const filterButtons = document.querySelectorAll('.gallery-nav button');
    const photoCards = document.querySelectorAll('.photo-card');

    // Add click event to each button
    filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const filterValue = event.target.textContent.toLowerCase();
        filterPhotos(filterValue);
        });
    });


    //Filter photos with a specified category
    function filterPhotos(category) {
        photoCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
        });
    }

});