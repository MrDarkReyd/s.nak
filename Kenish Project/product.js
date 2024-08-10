document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');

    // Function to load and display products
    const loadProducts = () => {
        productGrid.innerHTML = ''; // Clear existing products
        const products = JSON.parse(localStorage.getItem('products')) || [];

        products.forEach((product, index) => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-item');
            productElement.dataset.category = product.category;

            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">Add to Cart</button>
                <button class="remove-product" data-index="${index}">Remove</button>
            `;

            productGrid.appendChild(productElement);
        });

        // Add to Cart functionality
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const name = button.getAttribute('data-name');
                const price = button.getAttribute('data-price');
                const image = button.getAttribute('data-image');

                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart.push({ name, price, image });
                localStorage.setItem('cart', JSON.stringify(cart));

                alert(`${name} added to cart`);
            });
        });

        // Remove Product functionality
        const removeButtons = document.querySelectorAll('.remove-product');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                let products = JSON.parse(localStorage.getItem('products')) || [];
                products.splice(index, 1);
                localStorage.setItem('products', JSON.stringify(products));
                loadProducts(); // Reload products after removal
            });
        });
    };

    loadProducts(); // Initial load of products
});
