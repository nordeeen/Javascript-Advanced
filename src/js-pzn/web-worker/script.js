// Belajar Web Worker
// Javascript adalah single thread, artinya walaupun proses yg kita buat adalah Async,
// tapi tetap di jalankan dalam thread yang sama.
// kemampuan satu thread dalam mengelola beberapa pekerjaan, dinamakan concurrent
// Concurrency ibarat temen kita yang nyanyi sambil makan.
// temen kita ngelakuin 2 hal pada waktu yang sama, tetapi bergantian.
// karena 2 hal tersebut tidak bisa dilakukan secara bersamaan.

// kemampuan menjalankan beberapa thread untuk mengelola satu atau lebih pekerjaan,
// dinamakan parallel.

// Parallel ibarat seorang pria yang sedang berkendara sambil menelpon.
// pria tersebut melakukan 2 tugas sekaligus pada waktu bersamaan, yaitu berkendara & menelpon.
// Perlu diketahui juga, parallel tidak harus dilakukan oleh satu orang,
// Parallel bisa dilakukan bisa lebih 1 orang.
// contoh, 2 orang sedang mencuci baju diwaktu yang sama. kasus itu juga termasuk parallel.
// dan untuk membuat proses secara parallel, kita bisa menggunakan Web Worker.

//===============================//
// Web worker adalah kemampuan untuk menjalankan proses di Thread yang berbeda dibanding Main Thread.
// keuntungan menggunakan Web Worker adalah, jika terdapat proses yang membutuhkan waktu lama,
// web kita tidak akan freeze, karena proses tersebut bisa kita jalankan di Thread
// yang berbeda dari Main Thread (yang bisa digunakan oleh UI)

// Membuat Web Worker :
// const worker = new Worker("file.js");

// Web Worker Communication
// Web Worker adalah proses Async, dan untuk berkomunikasi dengan Web Worker,
// kita akan menggunakan Event Listener.
// Untuk mengirim data ke Web Worker atau Main Thread, kita bisa menggunakan method postMessage.

// Web Worker Communication 1
// const worker = new Worker("file.js");
// worker.addEventListener("message", function (event) {
//   const data = event.data;
// });
// worker.postMessage(message);

//===============//

// Web Worker Communication 2
// worker - file.js;

// addEventListener("message", function (event) {
//   const data = event.data;

//   postMessage(message);
// });

//=========================//
const worker = new Worker("web-worker.js");
worker.addEventListener("message", function (event) {
  console.log(`Receive message from web worker : ${event.data}`);
});

function buttonClick() {
  console.log("start");
  worker.postMessage(20000);
  console.log("finish");
}
