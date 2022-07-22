// Apa itu AJAX ?
// AJAX adalah singkatan dari Asynchronous JavaScript and XML.
// AJAX dapat digunakan untuk mengambil data dari server setelah halaman web tampil (client side render).
// AJAX dapat digunakan untuk mengubah tampilan web tanpa harus me-load ulang web.
// AJAX dapat mengirim data ke server secara Asynchronous di background.

// cara membuat AJAX :
// const ajax = new XMLHttpRequest();

// ajax.open("METHOD", "url");
// ajax.send();

//===============================//

// AJAX CALLBACK
// AJAX biasanya dapat digunakan untuk mengirim data ke server atau menerima data ke server.
// Tiap request AJAX yang dilakukan, biasanya kita ingin mendapat informasi response yang diberikan oleh server.
// Kita tidak bisa langsung mengambil response AJAX, karena proses AJAX adalah Asynchronous,
// sehingga kita perlu menunggu sampai proses Asynchronous-nya selesai.
// Untuk mendapatkan informasi AJAX, kita bisa menggunakan AJAX Callback,
// yang akan di eksekusi setelah proses AJAX selesai.

// membuat AJAX Callback :
// const ajax = new XMLHttpRequest();

// ajax.onload = function () {
//   const response = ajax.responseText;
// };

// ajax.open("METHOD", "url");
// ajax.send();

// =====================================//
// AJAX ERROR CALLBACK
// AJAX adalah proses komunikasi Client dan Server.
// Dalam komunikasi Client dan Server, kita tidak bisa selalu menganggap proses tersebut akan berjalan lancar.
// Akan ada banyak hal-hal yang bisa mengganggu proses AJAX yang bisa menyebabkan error,
// seperti koneksi internet bermasalah, error dari server, data dari client tidak valid, dan lain-lain.
// Hal-hal error seperti ini perlu ditangani pada kode program kita. dan kita bisa menggunakan
// Error Callback di AJAX.

// membuat ajax callback error :
// const ajax = new XMLHttpRequest();

// ajax.onload = function () {
//   if (ajax.status === 200) {
//     const response = ajax.statusText;
//   } else {
//     // error handle here!
//   }
// };
// ============================== //
// DYNAMIC CALLBACK
// kadang dalam membuat program javascript, kita ingin membuat callback yang dinamis.
// Bisa berubah ubah sesuai dengan keinginan kita.
// Untuk membuat dynamic callback, kita bisa memanfaatkan function as argument di javascript,
// dimana callback functionnya kita masukan kedalam argument, sehingga bisa berubah sesuai dengan keinginan kita.

//==========================================//
// 1. create method api getProductUrl(keyword)
// 2. getProduct(keyword) for ajax code => JSON.parse()
// 3. clearProduct = productUI => products
// 4. displayProduct(data) => forEach => product
// 5. displayProduct for UI => li => product.title
// productUI => appenChild(productLi)
// 6. btnClick => keyword => value
// https://dummyjson.com/products
// https://dummyjson.com/quotes/

// endpoint api
function getProductUrl(keyword) {
  return `https://dummyjson.com/products/${keyword}`;
}

// ajax code = berjalan secara asynchronous // dynamic callback
function getProduct(keyword, callbackSucces, callbackError) {
  const ajax = new XMLHttpRequest();
  ajax.onload = function () {
    if (ajax.status === 200) {
      const data = JSON.parse(ajax.responseText);
      callbackSucces(data);
      console.log(data);
    } else {
      callbackError;
    }
  };

  const url = getProductUrl(keyword);
  ajax.open("GET", url);
  ajax.send();
}

// clean data UI
function clearProduct() {
  const productUI = document.getElementById("products");
  productUI.textContent = "";
}

// method error
function getProductError() {
  console.error("Get Product Error");
}

// looping data
function displayProduct(data) {
  data.data.products.forEach((product) => displayProduct(product));
}

// display UI
function displayProduct(product) {
  const productLi = document.createElement("li");
  // productLi.textContent = product.title;
  const productUI = document.getElementById("products");
  productUI.appendChild(productLi);
  productLi.innerHTML = `
    <li>Name Product : ${product.title}</li>
    <li>Desc : ${product.description}</li>
    <li>Price : ${product.price}</li>
  `;
}

function clearTableProduct() {
  const productUI = document.getElementById("table-products");
  productUI.textContent = "";
}

// get table nya gagal
function displayTableProduct(data) {
  const table = document.createElement("table");
  table.setAttribute("border", 1);

  let index = 0;
  data.data.products.forEach((product) => {
    table.insertRow(index).insertCell(0).innerHTML = product.title;
    index++;
  });

  const tableProduct = document.getElementById("table-products");
  tableProduct.appendChild(table);
}

// button click
function buttonClick() {
  getProduct(
    document.getElementById("keyword").value,
    function (data) {
      clearProduct();
      displayProduct(data);
    },
    function () {
      getProductError();
    }
  );

  getProduct(
    document.getElementById(
      "keyword".value,
      function (data) {
        clearTableProduct();
        displayTableProduct(data);
      },
      function () {
        getProductError();
      }
    )
  );
  console.log("succes click button");
}
