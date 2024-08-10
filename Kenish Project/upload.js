document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    
    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productCategory = document.getElementById('productCategory').value;
        const productPrice = document.getElementById('productPrice').value;
        const productImage = document.getElementById('productImage').files[0];

        if (productImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const productData = {
                    name: productName,
                    category: productCategory,
                    price: productPrice,
                    image: reader.result
                };

                let products = JSON.parse(localStorage.getItem('products')) || [];
                products.push(productData);
                localStorage.setItem('products', JSON.stringify(products));
                
                alert('Product uploaded successfully!');
                uploadForm.reset();
            };
            reader.readAsDataURL(productImage);
        } else {
            alert('Please select an image.');
        }
    });
});
