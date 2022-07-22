// PROMISE
// Promise merupakan proxy untuk sebuah nilai masa depan (Future) yang belum di ketahui
// saat pembuatan promise tersebut.
// Biasanya promise di gunakan sebagai proxy untuk proses async.
// Penggunaan promise sangat mudah, dan lebih mirip kode synchronous.

// Promise State :
// state = pending  | result = undefined
// state = fulfilled  | result = value
// state = rejected  | result = error

// membuat promise :
// const promise = new Promise(function (resolve, reject) {
//   if (succes) {
//     resolve(value);
//   } else {
//     reject(error);
//   }
// });

// Promise then method
// Promise memiliki method yang bernama then. then method ini digunakan sebagai callback ketika
// value pada promise telah di resolve.
// yang menarik menggunakan then method adalah kita bisa membuat chain method, sehingga
// tidak akan terjebak pada callback hell.

//Menggunakan then pada promise
// promise.then(functin(value){
// do something here
//   return otherValue;
// }).then(function(otherValue) {
// do something here
//   return othervalueAgain;
// });

// Promise finally method
// Kadang kita ingin menjalankan kode tertentu, baik sukses ataupun error.
// hal ini juga bisa dilakukan di Promise, menggunakan finally method.
// finally method tidak membutuhkan argument atau parameter.

// Promise all method
// Kadang kita perlu berhadapan dengan beberapa proses Async sekaligus
// Misal, mengambil detail data produk dari server pada satu halaman web, dimana satu halaman bisa menampilkan
// lebih dari satu produk.
// Menggunakan promise satu persatu sangatlah menyulitkan jika terlalu banyak, tapi untungnya promise memiliki method all
// all method bisa kita gunakan untuk menggabungkan beberapa promise, menjadi promise baru yang berisi data array
// hasil dari promise - promise tersebut.

// http://jsonplaceholder.typicode.com/users
// https://www.blibli.com/backend/search/products?searchTerm=
// =========================================== //

function getProductUrl(keyword) {
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProduct(keyword) {
  const promise = new Promise(function (resolve, reject) {
    const ajax = new XMLHttpRequest();
    ajax.onload = function () {
      const data = JSON.parse(ajax.responseText);
      if (ajax.status === 200) {
        resolve(data);
      } else {
        reject(Error("Error mengambil data"));
      }
    };

    const url = getProductUrl(keyword);
    ajax.open("GET", url);
    ajax.send();
  });
  return promise;
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
  const imageProduct = document.createElement("img");

  productLi.innerHTML = `
  <ol>
    <div>
      <img src="${product.images[0]}" alt="pict" width="100px" height'>
    </div>
    <li>Nama Produk : ${product.name}</li>
    <li>Harga Produk : ${product.price.priceDisplay}</li>
    <li>Jumlah Produk : ${product.itemCount}</li>
    &nbsp
  </ol>
  `;

  const productUl = document.getElementById("products");
  productUl.appendChild(productLi);
  productUl.appendChild(imageProduct);
}

function buttonClick() {
  // const promise = getProduct(document.getElementById("keyword").value);
  // console.log("succes");
  // promise
  //   .then(function (value) {
  //     return value.data.products;
  //   })
  //   .then(function (products) {
  //     clearProduct();
  //     products.forEach(function (product) {
  //       displayProduct(product);
  //     });
  //   })
  //   .catch(function (error) {
  //     alert(error.message);
  //   })
  //   .finally(function () {
  //     console.log("selesai menjalankan proses promise");
  //   });

  //========================================= //

  // 1. mapping data values product
  // 2. looping values
  // 3. looping product
  // Using Promise all
  const promise1 = getProduct(document.getElementById("keyword1").value);
  const promise2 = getProduct(document.getElementById("keyword2").value);
  const promise3 = getProduct(document.getElementById("keyword3").value);

  Promise.all([promise1, promise2, promise3])
    .then(function (values) {
      return values.map((value) => value.data.products);
    })
    .then(function (values) {
      values.forEach(function (products) {
        products.forEach(function (product) {
          displayProduct(product);
        });
      });
    })
    .catch(function (error) {
      alert(error.message);
    })
    .finally(function () {
      console.log("selesai memproses semua promises");
    });
}
