// Function to fetch product data
async function fetchProductData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/2');
        const product = await response.json();

        // Display the product information
        const productDetails = document.getElementById('product-details');
        productDetails.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}" style="width: 200px;">
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Description:</strong> ${product.description}</p>
        `;
    } catch (error) {
        console.error('Error fetching the product data:', error);
    }
}

// Call the fetch function
fetchProductData();