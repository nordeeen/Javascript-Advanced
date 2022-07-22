// ASYNC AWAIT
// Async Await adalah fitur baru javascript yang digunakan untuk mempermudah
// pembuatan kode promise.
// Dengan menggunakan Async Await, kita bisa membuat code asynchronous
// dengan gaya synchronous.
// Async digunakan untuk menandakan bahwa function tersebut adalah Async,
// dan mengembalikan promise.
// AWait digunakan untuk mendapatkan value hasil dari function yang mengembalikan promise.
// Await hanya bisa digunakan dalam async function.
// sebuah method yang ada async nya itu akan mengembalikan promise.

// menggunakan async await :
// async function onSearch(keyword) {
//     const product = await searchProduct(keyword);

//     clearProduct()
//     displayProduct(product)
// }

// Async Await Error Handler
// Pada Callback dan Promise, ada mekanisme error handler yang bisa dilakukan.
// bagaimana dengan async await?
// Pada Async Await, kita bisa menggunakan gaya synchronous untuk menggunakan error handler-nya.
// yaitu menggunakan try-catch dan try-catch-finally

//=====================================================//
// method data api
function getProductUrl(keyword) {
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

// method promise data
function getProducts(keyword) {
  return new Promise(function (resolve, reject) {
    const ajax = new XMLHttpRequest();
    ajax.onload = function () {
      if (ajax.status === 200) {
        const data = JSON.parse(ajax.responseText);
        resolve(data);
      } else {
        reject(Error("Error mengambil data produk"));
      }
    };
    const url = getProductUrl(keyword);
    ajax.open("GET", url);
    ajax.send();
  });
}

// method remove UI
function clearProduct() {
  const productUl = document.getElementById("produk");
  productUl.textContent = "";
}

// method looping data products
function displayProduct(data) {
  data.data.products.forEach((product) => displayProduct(product));
}

// method dom
function displayProduct(product) {
  const productLi = document.createElement("li");
  const imgProduct = document.createElement("img");

  productLi.innerHTML = `
        <ul>
            <img src="${product.images[0]}" alt="pict" width="200px" height="200px">
            <ol>Name Product : ${product.name}</ol>
            <ol>Price Product : ${product.price.priceDisplay}</ol>
            <ol>Item Count : ${product.itemCount}</ol>
            <ol>Location Product : ${product.location}</ol>
            &nbsp;
        </ul>
    `;

  const productUl = document.getElementById("produk");
  productUl.appendChild(productLi);
  productUl.appendChild(imgProduct);
}

// method button
async function clickBtn() {
  // BEFORE
  // const promise = getProducts(document.getElementById("keyword").value);
  //   promise
  //     .then(function (value) {
  //       return value.data.products;
  //     })
  //     .then(function (products) {
  //       clearProduct();
  //       products.forEach(function (product) {
  //         displayProduct(product);
  //       });
  //     })
  //     .catch(function (error) {
  //       alert(error.message);
  //     })
  //     .finally(function () {
  //       console.log("selesai memproses data async await");
  //     });
  //AFTER
  try {
    const value = await getProducts(document.getElementById("keyword").value);
    const products = value.data.products;
    clearProduct();
    products.forEach(function (product) {
      displayProduct(product);
      console.log("succes");
    });
  } catch (error) {
    alert(error.message);
  } finally {
    console.log("selesai memproses data async await");
  }
}
