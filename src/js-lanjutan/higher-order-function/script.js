// Higher Order Function :
// Function yang beroperasi pada function yanglain.
//Baik itu digunakan dalam argument, maupun sebagai return value.

// Di dalam javascript function disebut sebagai "First Class Function" (inti dari js adalah function)
// javascript memperlakukan function sebagai object.
// function yang digunakan sebagai argument disebut dengan callback.

// Kenapa menggunakan Higher Order Function?
// Karena Abstraksi = utk membuat agar kode yg kita buar itu bisa lebih sederhana atau bisa lebih simple. karena dgn menggunakan function itu artinya kita menyembunyikan kerumitan.

// Contoh Higher Order Function :
// 1.Array.prototype.map()
// 1.Array.prototype.filter()
// 1.Array.prototype.reduce()
// 1.Array.prototype.sort()

//=============//

// function kerjakanTugas = Higher Order Function.
// selesai = Callback
function kerjakanTugas(matakuliah, selesai) {
  console.log(`Mulai mengerjakan ${matakuliah}...`);
  selesai();
}

function selesai() {
  alert("selesai mengerjakan tugas!");
}

kerjakanTugas("Fisika", selesai);

// ini disebut juga Higher Order Function
setTimeout(() => {
  console.log("hello world");
}, 1000);

// ini disebut juga Higher Order Function
// const tombol = document.querySelector(".submit");
// tombol.addEventListener("click", function () {
//   console.log("tombol ditekan");
// });

// ini disebut juga Higher Order Function
// karena ada return value.
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`halo, ${nama} Selamat ${waktu} semoga harimu menyenangkan!`);
  };
}

let selamatWaktu = ucapkanSalam("Siang");
console.log(selamatWaktu("Reval"));
