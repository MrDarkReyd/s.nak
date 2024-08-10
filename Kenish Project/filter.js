document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const categoryFilterLinks = document.querySelectorAll('.dropdown-content a');

    // Add event listeners to category filter links
    categoryFilterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedCategory = link.getAttribute('data-category');
            filterProducts(selectedCategory);
        });
    });

    function filterProducts(category) {
        const productItems = document.querySelectorAll('.product-item');
        
        productItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Handle Add to Cart functionality
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const image = button.getAttribute('data-image');

            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({ id, name, price, image });
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${name} added to cart`);
        });
    });
});
