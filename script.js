// fetch('https://dummyjson.com/products')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

fetch("https://dummyjson.com/products")
        .then(response => response.json())
        //const products = await response.json();
        .then(products => {
          let productList = document.getElementById("product-list");
         let productValues = Object.values(products);

          productValues.forEach((product) => {
           //products.forEach(product => {

        let productName = productValues.title;
        let productBrand = productValues.brand;
        let productRating = productValues.rating
        let productPrice = productValues.price;
        let productStock = productValues.stock;


            const productElement = document.createElement("div");
            productElement.innerHTML = `
              <div class="product-image" style="background-image: url(${productName})"></div>
              <div class="product-details">
                <h2 class="product-name">${productName}</h2>
                <p class="product-price">Price: $${productPrice}</p>
                <p class="product-discount">Discount: ${product.discount * 100}%</p>
                <p class="product-stock">Stock: ${product.stock}</p>
              </div>
            `;
            
  
            productList.appendChild(productElement);
          });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });