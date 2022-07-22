// CLOSURES

// Closures adalah sebuah function yang sebelumnnya sudah memiliki data,
// hasil dari function yang lain.

// Closure pada JavaScript mengadaptasi konsep matematika yaitu lambda calculus. Di JavaScript sendiri, closure merupakan sebuah fungsi yang dieksekusi oleh fungsi lainnya(nested functions) sehingga fungsi tersebut dapat mengakses/merekam variable didalam lexical scope pada fungsi induk(parent function).

// Kenapa menggunakan Closure?
// 1. Untuk membuat function factories
// 2. Untuk membuat private method
// 3. Membuat sebuah fungsi yang dinamis, kita bisa menyusun komposisi fungsi serta kode dapat digunakan berulang kali(reusable).
// 4. Sebagai encapsulasi data, closure berguna untuk men-create variabel privat dan fungsi privat. Dengan begitu closure dapat menyimpan data dalam lingkup terpisah, dan memanggil/menggunakannya hanya jika diperlukan.

// ====================== //

// Lexical Scope
// inner function membutuhkan variable di parent scope-nya maka inner function ini disebut closure.

function init() {
  let nama = "Ahmad Nurdiansah"; // --> local scope
  function tampilNama() {
    // --> inner function (*closure)
    console.log(nama);
  }
  tampilNama();
}

init();

//============================//
// 1. Membuat function factory
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo, ${nama} selamat ${waktu}`);
  };
}

//factory function = membuat function sesuai dengan function yanglain
let selamatPagi = ucapkanSalam("Pagi");
let selamatSore = ucapkanSalam("Sore");
// console.dir(selamatPagi); cek closure-nya.
selamatSore("Dian");
selamatPagi("Thoriq");

//===============================//
// 2. membuat private method
// IIFE = ()();

let add = (function () {
  let count = 0; // sudah private
  return function () {
    return ++count;
  };
})();

count = 100; // value count tidak terpengaruhi.

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

// ======================= //

let dataPerson = (function () {
  let name = "Andrew";
  let age = 30;

  return function (profesi) {
    console.log(
      `halo, saya ${name} berprofesi sbg ${profesi} dan umur saya ${age} tahun`
    );
  };
})();

dataPerson("Pedagang");

// ========================= //
// step 1 :
function myCar() {
  var merk = "Honda";
  return function () {
    return merk + "Jazz";
  };
}

console.dir(myCar());

//  step 2 :
function mobil(merk) {
  let tahun = 2002;
  return function (type) {
    return `${merk} ${type} ${tahun}`;
  };
}

let mobil1 = mobil("Honda");
let mobil2 = mobil("Mitsubhisi");
mobil1("Jazz");
mobil2("Fuso");
console.dir(mobil1);
console.dir(mobil2);
console.log(mobil1("Jazz"));
console.log(mobil2("Fuso"));
