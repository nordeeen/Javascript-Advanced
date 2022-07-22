// Arrow Function = Bentuk lain yang lebih ringkas dari Function Expression.

// ini bentuk dari Function Declaration
function tampilNama(nama) {
  console.log(`Halo nama saya adalah ${nama}`);
}
tampilNama("Bendol");

// ini bentuk dari Function Expression
// menggunakan variable dan anonymous function (function tanpa nama)
let tampilPesan = function (name) {
  console.log(`Halo nama saya adalah ${name}`);
};
tampilPesan("Ojan");

// Arrow function menggunakan satu parameter
let sayHello = (namaDia) => {
  return `Halo, ${namaDia} anak pak RT`;
};
console.log(sayHello("Wulan"));

// Arrow function menggunakan dua parameter
const sapaOrang = (namaOrang, waktu) => {
  return `Halo, ${namaOrang}, selamat ${waktu}`;
};
console.log(sapaOrang("Dendi", "Sore"));

// implisit return = bentuk ringkas dr arrow function
const myPet = (namePet) => `Hewan ini adalah seekor ${namePet}`;
console.log(myPet("Kucing"));

const showText = () => `Hello World!`;
console.log(showText());

// contoh case menggunakan Arrow Function :
const namaHewan = ["kucing", "babi", "kuda", "kelinci", "lumba-lumba"];

let jumlahHewan = namaHewan.map((item) => item.length);
console.log(jumlahHewan);

// agar hasilnya menjadi sebuah object
let hitungHewan = namaHewan.map((nama) => ({
  nama: nama,
  jumlahNama: nama.length,
}));

console.log(hitungHewan);
