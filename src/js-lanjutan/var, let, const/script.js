// console.log(a);
// var a = 10;

// konsep Hoisting = pengangkatan, pengerekan ke atas.
// konsep hoisting berlaku untuk variable, function dan lainnya.
// dibelakang layar hoisting seperti ini :

// var i; --> belum pernah di definisikan variable i
// console.log(i); --> alhasil outputnya bernilai undefined
// i = 10;

//====================//

// JavaScript menganut Function Scope bukan Block Scope.
function test() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}

test();
console.log(i); // alhasil variable i tidak  bisa di akses dari luar.

// IIFE (Immediately Invoked Function Expression) atau SIAF (Self Invoking Anonymous Function).
// anonymous function = fungsi tidak bernama.

// menggunakan IIFE / SIAF
// program langsung di jalankan.
(function () {
  for (let x = 0; x < 20; x++) {
    console.log(x);
  }
})();

// console.log(x); // alhasil variable x tidak  bisa di akses dari luar.

//=============================//
// tidak perlu menggunakan var lagi.
// let menganut block scope
// kenapa menggunakan const ? untuk meminimalisir perubahan state.
// baiknya gunakan let ketika pakai for, selabihnya menggunakan const.

for (let a = 0; a < 15; a++) {
  console.log(a);
}

// console.log(a);

const mhs = {
  nama: "dian",
  umur: 24,
};

mhs.nama = "Denis"; // bisa di ubah objeknya namun tidak semuanya.

mhs = {
  jurusan: "IT", // error karena tidak bisa di ubah.
};

console.log(mhs);
