// Asychronous =
// Javascript is a single-threaded, non-blocking, asycnhronous and concurrent language.

// 1. Single-Threaded = urutan eksekusi kode yang dapat dilakukan secara bebas / independent satu sama lain.
// javascript hanya bisa melakukan satu hal pada satu waktu tertentu.

// Asynchronous + single-threaded = concurrency
// Asynchronous + multi-threaded = pararellelism

// Kesimpulan :
// single vs multi thread = Lingkungan eksekusi task
// blocking vs non-blocking = teknik ngoding (IO related)
// Synchronous vs Asynchronous = teknik ngoding (http request related)
// Concurrent vs Parallel = lingkungan eksekusi task

// function bisa menerima parameter berupa function lagi itu disebut callback.

// Materi Callback dan Asynchronous

function callName(nama1, nama2, callback) {
  console.log(nama1, nama2);
  callback();
}

function myCallback() {
  console.log("Halo, callback function");
}

callName("Budi", "Denis", myCallback);

//======================//

function calculate(a, b) {
  result = a + b;
  return result;
}

console.log(calculate(10, 12));

//======================//
function calc(param1, param2, callback) {
  result = param1 + param2;

  if (typeof callback == "function") {
    result = callback(param1, param2);
  }

  return result;
}

x = calc(2000, 5000, function (a, b) {
  return "$ " + (a + b);
});

y = calc(6000, 6000, function (a, b) {
  return "$ " + (a + b);
});

console.log(x);
console.log(y);

// =================== //

function p1() {
  console.log("one");
}

function p2() {
  setTimeout(() => {
    console.log("two");
  }, 3000);
}

function p3() {
  console.log("three");
}

p1();
p2();
p3();

// ============================= //
function requsetAjax(callback) {
  // inisialisasi library XML Http Request
  var xhr = new XMLHttpRequest();

  // set target request
  xhr.open("GET", "http://jsonplaceholder.typicode.com/users");

  // terapkan callback
  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(xhr.responseText);
    } else {
      callback("failed");
    }
  };

  // mulai request
  xhr.send();
}

function showResult(data) {
  if (data != "failed") {
    data = JSON.parse(data);
    console.log(data);
  }
}

const passBtn = document
  .querySelector("#tombol-btn")
  .addEventListener("click", () => {
    setTimeout(() => {
      requsetAjax(showResult);
    }, 6000);
  });

//========================//
