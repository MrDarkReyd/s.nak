document.addEventListener('DOMContentLoaded', () => {
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    const productItems = document.querySelectorAll('.product-item');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = link.getAttribute('data-category');

            productItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
