// Cara membuat Object di JavaScript

// 1. Object Literal
// Problem : Tidak efektif untuk object yang banyak.

let mahasiswa = {
  nama: "Budi",
  energi: 20,

  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan bang`);
  },

  main: function (jam) {
    this.energi = this.energi - jam;
    console.log(`Halo ${this.nama}, selamat main bang`);
  },
};

let mahasiswi = {
  nama: "Desi",
  energi: 50,

  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan bang`);
  },

  main: function (jam) {
    this.energi = this.energi - jam;
    console.log(`Halo ${this.nama}, selamat main bang`);
  },
};

// 2. Function Declaration = Jika object yang ingin kita buat ada banyak baiknya pakai function declaration
// 4. Object.create = untuk membuat objek. bedanya kita bisa menyimpan parameter di dalamnya yang mengacu
// ke parent object-nya. menggunakan konsep inheritance (pewarisan).

function Siswa(nama, energi) {
  let pelajar = Object.create(methodSiswa);
  pelajar.nama = nama;
  pelajar.energi = energi;

  return pelajar;
}

const methodSiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat main`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur ya`);
  },
};

let Orang1 = Siswa("dian", 100);
let Orang2 = Siswa("nurdin", 100);

//===============================//

// 3. Constructor Function
// for call use keyword New

function Santri(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (piring) {
    this.energi += piring;
    console.log(`Halo ${this.nama}, selamat makan santri`);
  };

  this.tidur = function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur santri`);
  };
}

let personOne = new Santri("Epang", 200);
let personTwo = new Santri("Ajeng", 400);

// Jika di convert menjadi sebuah class declaration

class Murid {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = (porsi) => {
      this.energi += porsi;
      console.log(`Halo ${this.nama}, selamat makan para santri`);
    };

    this.main = (jam) => {
      this.energi -= jam;
      console.log(`Halo ${this.nama}, selamat main para santri`);
    };
  }
}

let userOne = new Murid("Bambang", 100);
let userTwo = new Murid("Jhon", 300);

// 5. Prototype
// Prototype memiliki konsep yaitu prototyping inheritance.
// dibelakang layar javascript inilah yang di jalankan.

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan ya lur!`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, selamat main ya lur!`;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamat tidur ya lur!`;
};

let jimbon = new Mahasiswa("Jimbon", 10);

// versi class
class Pelajar {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan ya lur!`;
  }

  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat main ya lur!`;
  }

  tidur(jam) {
    this.energi += jam;
    return `Halo ${this.nama}, selamat tidur ya lur!`;
  }
}

let pelajarSatu = new Pelajar("Doddy", 100);
let pelajarDua = new Pelajar("Deni", 45);
