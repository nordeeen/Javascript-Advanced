// Synchronous ?
// program dalam JavaScript secara default akan di eksekusi baris per-baris
// Secara default, proses javascript akan di eksekusi secara Synchronous, artinya baris selanjutnya
// akan di eksekusi setelah baris sebelumnya selesai di kerjakan.
// Proses synchronous biasa disebut juga Blocking. karena harus menunggu tiap proses selesai,
// baru proses selanjutnya bisa dilakukan.

// Asynchronous ?
// Walaupun secara default proses di javascript di eksekusi secara synchronous, namun kita bisa
// membuatnya secara asynchronous.
// Berbeda dengan proses synchronous, pada proses asynchronous, javascript tidak akan menunggu
// proses tersebut selesai, melainkan javascript akan melanjutkan baris selanjutnya,
// tanpa harus menunggu proses Asynchronous selesai.
// proses asynchronous juga biasa disebut Non-Blocking

// Callback ?
// Callback merupakan mekanisme untuk memanggil kembali kode yang ada di program dari proses Async
// Callback biasanya dibuat dalam bentuk function, dan function tersebut akan di eksekusi saat
// proses Async selesai.
// Dengan menggunakan Callback, program bisa menerima informasi yang dibutuhkan dari proses
// yang berjalan secara Async.

// contoh async method :
// ada banyak method Async yang terdapat di javaScript, yang kita bahas kali ini adalah :
// 1. setTimeOut(handler, time) = digunakan untuk menjalankan proses Async sekali dalam waktu tertentu.
// 2. setInterval(handler, time) = digunakan untuk menjalankan proses Async secara periodik dalam waktu tertentu.

// ================================================ //

// synchronous
function haloCallback() {
  console.log("Happy Coding");
}

function btnSync() {
  haloCallback();
  console.log("ini adalah synchronous");
}

// asynchronous
const btnAsyncOne = () => {
  setTimeout(() => {
    haloCallback();
  }, 3000);
  console.log("ini adalah Asynchronous 1");
};

// const btnAsyncTwo = () => {
//   console.log("ini adalah Asynchronous 2");
//   setInterval(() => {
//     haloCallback();
//   }, 3000);
// };
