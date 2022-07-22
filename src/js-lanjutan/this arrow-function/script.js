// Konsep this pada Arrow Function

// function declaration, function expression memiliki konteks this.
// Jika function declaration, function expression diubah menjadi arrow function maka konteks this-nya berbeda.
// arrow function tidak memiliki konsep this.

//=====================//

// Jika kita membuat Constructor Function
// konteks this mengacu pada objeknya (Mahasiswa)
const Mahasiswa = function () {
  (this.nama = "Budi"),
    (this.umur = 23),
    (this.sayHello = function () {
      return `halo nama saya ${this.nama} dan umur saya ${this.umur} tahun`;
      //   console.log(this);
    });
};

let showMhs = new Mahasiswa();

// ================== //

// Object Literal
// this tidak mengacu ke objek (mhs1) tapi ke window.
// output : halo nama saya undefined dan umur saya undefined tahun
const mhs1 = {
  nama: "Denis",
  umur: 45,
  sayHello: () => {
    console.log(`halo nama saya ${this.nama} dan umur saya ${this.umur} tahun`);
    // console.log(this);
  },
};

// =========== contoh arrow function menggunakan this ===== //

const Mahasiswi = function () {
  (this.nama = "Ajeng"),
    (this.umur = 19),
    (this.sayHello = function () {
      console.log(`halo nama saya ${nama} dan saya berumur ${umur} tahun.`);
    });

  // jika menggunakan function declaration maka this akan mencari di global,
  // ketika menggunakan arrow function maka this akan mencari di lexical scope.
  setInterval(() => {
    // console.log(this.umur++);
  }, 600);
};

let dian = new Mahasiswi();

// ================ box =============//
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle("size");

  setTimeout(() => {
    this.classList.toggle("caption");
  }, 600);
});
