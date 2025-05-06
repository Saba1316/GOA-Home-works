// Function to fetch all product data
async function fetchProductData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        // Get the container for product list
        const productList = document.getElementById('product-list');
        productList.innerHTML = ''; // Clear the loading text

        // Loop through each product and display its details
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <h3>${product.title}</h3>
                <img src="${product.image}" alt="${product.title}" style="width: 200px;">
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Price:</strong> $${product.price}</p>
                <p><strong>Description:</strong> ${product.description}</p>
                <hr>
            `;
            productList.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error fetching the products:', error);
    }
}

// Call the fetch function
fetchProductData();