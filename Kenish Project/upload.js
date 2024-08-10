document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productCategory = document.getElementById('productCategory').value;
    const productPrice = document.getElementById('productPrice').value;
    const productKg = document.getElementById('productKg').value;
    const productImage = document.getElementById('productImage').files[0];

    if (productName && productCategory && productPrice && productKg && productImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newProduct = {
                id: Date.now().toString(),
                name: productName,
                category: productCategory,
                price: `Rs ${parseFloat(productPrice).toFixed(2)}`,
                image: e.target.result,
                kg: parseFloat(productKg).toFixed(2)
            };

            const products = JSON.parse(localStorage.getItem('products')) || [];
            products.push(newProduct);
            localStorage.setItem('products', JSON.stringify(products));

            alert('Product uploaded successfully!');
            document.getElementById('uploadForm').reset();
        };
        reader.readAsDataURL(productImage);
    } else {
        alert('Please fill out all fields.');
    }
});
