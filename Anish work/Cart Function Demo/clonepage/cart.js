document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Load Cart Items on Cart Page
    if (window.location.pathname.endsWith('cart.html')) {
        loadCartItems();
    }

    // Add to Cart Button Click Handler
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const productName = button.getAttribute('data-name');
            const productPrice = button.getAttribute('data-price');
            const productImage = button.getAttribute('data-image');

            const cartItem = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
            };

            addToCart(cartItem);
            alert(`${productName} has been added to the cart!`);
        });
    });
});

// Function to Add Items to Cart in Local Storage
function addToCart(item) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartTotal();
}

// Function to Load Cart Items on Cart Page
function loadCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.querySelector('.cart-total');
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalElement.textContent = 'Total: $0.00';
        return;
    }

    let total = 0;

    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(cartItemElement);

        // Update total price
        total += parseFloat(item.price.replace('$', ''));
    });

    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;

    // Remove item from cart
    const removeButtons = document.querySelectorAll('.remove-from-cart');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = e.target.getAttribute('data-id');
            removeFromCart(itemId);
            e.target.closest('.cart-item').remove();
            updateCartTotal();
        });
    });
}

// Function to Remove Items from Cart
function removeFromCart(itemId) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to Update Cart Total
function updateCartTotal() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.querySelector('.cart-total');
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let total = 0;

    cartItems.forEach(item => {
        total += parseFloat(item.price.replace('$', ''));
    });

    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;

    // Clear the cart items container if empty
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalElement.textContent = 'Total: $0.00';
    }
}
