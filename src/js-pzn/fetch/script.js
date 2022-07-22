// Fetch API
// Fetch API adalah api baru untuk melakukan AJAX
// tidak seperti AJAX yang menggunakan Callback, Fetch Api menggunakan Promise
// sehingga kita bisa mudah menggunakan Fetch Api di banding AJAX
// hasil dari fetch adalah sebuah promise

// Menggunakan fetch api :
// fetch(url, config)
//   .then(function (response) {
//     // do something here
//   })
//   .catch(function (error) {
//     // do something here
//   });

//============================================//

function getProductUrl(keyword) {
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProduct(keyword) {
  const url = getProductUrl(keyword);

  return fetch(url, {
    method: "GET",
  }).then(function (response) {
    return response.json();
  });
}

function clearProduct() {
  const productUl = document.getElementById("products");
  productUl.textContent = "";
}

function displayProduct(data) {
  data.data.products.forEach((product) => displayProduct(product));
}

function displayProduct(product) {
  const productLi = document.createElement("li");
  const imgProduct = document.createElement("img");
  productLi.innerHTML = `
    <ol>
        <div>
            <img src="${product.images[0]}" alt="pict" width="200px" height="200px">
        </div>
        <li>Name Product :  ${product.name}</li>
        <li>Price Product : ${product.price.priceDisplay}</li>
        <li>Count Item :  ${product.itemCount}</li>
    </ol>
    `;

  const productUl = document.getElementById("products");
  productUl.appendChild(productLi);
  productUl.appendChild(imgProduct);
}

function clickButton() {
  const promise = getProduct(document.getElementById("keyword1").value);
  promise
    .then(function (value) {
      return value.data.products;
    })
    .then(function (products) {
      clearProduct();
      products.forEach(function (product) {
        displayProduct(product);
      });
    })
    .catch(function (error) {
      alert(error.message);
    })
    .finally(function () {
      console.log("selesai memproses data fetch");
    });
}
