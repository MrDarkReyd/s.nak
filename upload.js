document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productCategory = document.getElementById('productCategory').value;
    const productImage = document.getElementById('productImage').value;

    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push({
        name: productName,
        price: productPrice,
        category: productCategory,
        image: productImage
    });
    localStorage.setItem('products', JSON.stringify(products));

    alert('Product uploaded successfully!');
});
