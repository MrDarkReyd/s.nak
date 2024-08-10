document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const categoryFilter = document.getElementById('categoryFilter');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const id = productCard.dataset.id;
            const name = productCard.dataset.name;
            const price = productCard.dataset.price;
            const category = productCard.dataset.category;

            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({ id, name, price, category });
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${name} added to cart`);
        });
    });

    categoryFilter.addEventListener('change', () => {
        const selectedCategory = categoryFilter.value;
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
            const cardCategory = card.dataset.category;
            if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
