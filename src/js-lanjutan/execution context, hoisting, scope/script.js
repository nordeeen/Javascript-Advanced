// 2.1 EXECUTION CONTEXT, HOISTING, SCOPE

// 2 fase pada Execution Context (saat program dijalankan) :
// 1. fase Creation (fase pembentukan)
// 2. fase Execution (fase eksekusi)

var nama = "Budi";
console.log(nama);

// console.log(nama);
// var nama = "Budi";

// saat di program dijalankan
// creation phase (fase pembentukan) pada Global Context

// oleh JS yang pertama di cari adalah keyword var & function
// jika ada, set var nama = undefined
// jika ada, set nama function = fn()
// konsep ini disebut dengan Hoisting = fase pengangkatan/pengerekan.
// JS mendefinisikan window sbg global object dan this sbg window.

// execution phase (fase mengeksekusi programnya baris perbaris dari atas ke bawah).

var namaUSer = "Deni"; // di hoisting
var ageUser = 23;

console.log(sayHello());

function sayHello() {
  return `Halo nama saya ${namaUSer} dan umur saya ${ageUser} tahun.`;
}

// ======================== //

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// yang bisa akses window dan arguments
// intinya setiap function di panggil maka akan membuat execution context baru.

var name = "nurdin";
var username = "@nordeeen97";

function cetakURL() {
  console.log(arguments); // arguments
  var instagramURL = "htttp://instagram.com/";
  return instagramURL + username;
}

console.log(cetakURL("@BudiHandoko", "@RiskaPutri"));

// ====================== //

function a() {
  console.log("ini a");

  function b() {
    console.log("ini b");

    function c() {
      console.log("ini c");
    }

    c();
  }

  b();
}

a();

//=============//

function satu() {
  var nama = "Sandhika";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "Erik";
satu();
dua("doddy");
console.log(nama);

// undefined
// Sandhika
// Erik
// Erik
