document.addEventListener('DOMContentLoaded', () => {
    const cart = document.getElementById('cart');

    // Function to create a cart item element
    function createCartItemElement(id, name, price) {
        const cartItem = document.createElement('li');
        cartItem.setAttribute('data-id', id);
        cartItem.innerHTML = `
            ${name} - $${price} 
            <button class="remove-from-cart">Remove</button>
        `;
        return cartItem;
    }

    // Add to Cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const id = product.getAttribute('data-id');
            const name = product.getAttribute('data-name');
            const price = product.getAttribute('data-price');

            // Check if item is already in the cart
            const existingItem = cart.querySelector(`li[data-id="${id}"]`);
            if (!existingItem) {
                const cartItem = createCartItemElement(id, name, price);
                cart.appendChild(cartItem);
            } else {
                alert(`${name} is already in the cart.`);
            }
        });
    });

    // Remove from Cart functionality
    cart.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const cartItem = event.target.parentElement;
            cartItem.remove();
        }
    });
});
