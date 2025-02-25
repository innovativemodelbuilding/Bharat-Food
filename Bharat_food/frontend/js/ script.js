// You can add interactive features here, such as filtering restaurants or categories
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add event listeners to category items
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`You clicked on ${item.textContent}`);
        });
    });
});