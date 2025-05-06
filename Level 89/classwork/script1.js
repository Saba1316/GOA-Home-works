fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                let output = '';
                data.forEach(product => {
                    output += `
                        <div>
                            <h2>${product.title}</h2>
                            <img src="${product.image}" alt="${product.title}" width="100">
                            <p>${product.description}</p>
                            <p>Price: $${product.price}</p>
                            <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
                        </div>
                    `;
                });
                document.getElementById('product-list').innerHTML = output;
            })
            .catch(error => console.log('Error fetching data: ', error));