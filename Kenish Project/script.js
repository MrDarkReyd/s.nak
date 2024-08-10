// Add to Cart functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-item');
            const id = productCard.dataset.id;
            const name = productCard.dataset.name;
            const price = productCard.dataset.price;
            const image = productCard.querySelector('img').src;
            
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({ id, name, price, image });
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${name} added to cart`);
        });
    });
    
    // Category filter
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.addEventListener('change', () => {
        const selectedCategory = categoryFilter.value;
        const productItems = document.querySelectorAll('.product-item');

        productItems.forEach(item => {
            const itemCategory = item.dataset.category;
            item.style.display = (selectedCategory === 'all' || itemCategory === selectedCategory) ? 'block' : 'none';
        });
    });

    // Language switch
    const languageSwitcher = document.getElementById('languageSwitcher');
    languageSwitcher.addEventListener('change', () => {
        const selectedLang = languageSwitcher.value;
        document.documentElement.setAttribute('lang', selectedLang);
    });
});
