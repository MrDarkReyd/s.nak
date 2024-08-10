document.addEventListener('DOMContentLoaded', () => {
    const orderSummary = document.getElementById('orderSummary');
    const totalPriceElement = document.getElementById('totalPrice');
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    function renderOrderSummary() {
        let total = 0;
        orderSummary.innerHTML = '';

        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.name} - $${item.price}`;
            orderSummary.appendChild(listItem);

            total += parseFloat(item.price);
        });

        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }

    document.getElementById('placeOrderButton').addEventListener('click', () => {
        alert('Order placed successfully!');
        localStorage.removeItem('cart'); // Clear the cart
        window.location.href = 'products.html'; // Redirect to product page
    });

    document.getElementById('cancelButton').addEventListener('click', () => {
        window.location.href = 'products.html'; // Redirect to product page
    });

    renderOrderSummary();
});
