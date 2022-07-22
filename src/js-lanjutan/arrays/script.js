// Arrays JS

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

const pets = [
  "kucing",
  "anjing",
  "kelinci",
  "ikan",
  "hamster",
  "bunglon",
  "musang",
];

// pets[2] = "gajah";
// console.log(pets[4]);

// push = digunakan utk menambah isi elemen array.
pets.push("marmut");

// pop = digunakan utk menghapus elemen array index terakhir.
pets.pop();

// shift = digunakan utk menghapus elemen pertama dari array.
pets.shift();

// splice = digunakan utk menghapus data pada indeks tertentu.
// array.splice(<indeks>, <total>);
// menghapus anjing dr array pets.
pets.splice(0, 1);
console.log(pets);

// 1. filter() = berfungsi untuk membuat sebuah array baru dengan memperhatikan kondisi tertentu pada setiap elemen dari array yang sudah ada.

const filteredItems = items.filter((item) => item.price <= 100);

console.log(filteredItems);

// 2. map() = untuk membuat array baru dari memanggil sebuah function pada setiap elemen array.

const itemsNames = items.map((item) => item.name);

console.log(itemsNames);

// 3. find() = berfungsi untuk mencari sebuah elemen pada setiap elemen di array.

const foundItems = items.find((item) => item.name === "Book");

console.log(foundItems);

//4. forEach() = Metode ini berfungsi untuk melakukan pengulangan di dalam array.

const loopItems = items.forEach((item) =>
  console.log(`Result forEach : ${item.name}`)
);

//5. some() = berfungsi untuk mengecek sekurang kurangnya salah satu elemen array memenuhi kondisi.

const hasInexpensiveItems = items.some((item) => item.price <= 0);
console.log(`Result Some : ${hasInexpensiveItems}`);

//6. every() = berfungsi untuk mengecek apakah setiap elemen dalam array memenuhi kondisi.

const lessTenItems = items.every((item) => item.price <= 1000);
console.log(`Result Every : ${lessTenItems}`);

//7. reduce() =  sebuah fungsi yang digunakan untuk mengeksekusi nilai pada setiap element dengan tipe array dan menampilkan dalam sebuah nilai saja.
//(dari kiri ke kanan)
const totalPriceItems = items.reduce(
  (currentTotal, item) => item.price + currentTotal,
  1
);

console.log(`Result Reduce : ${totalPriceItems}`);
console.log(items);

// 8. includes() = berfungsi untuk mengecek apakah sebuah data ada di dalam array atau tidak. Biasanya digunakan untuk melakukan pencarian untuk memastikan data sudah ada di dalam array.
const itemNum = [1, 2, 3, 4, 5, 6];

const includeItem = itemNum.includes(7);
console.log(includeItem);

// 9. concat() =  berfungsi untuk menggabungkan 2 array menjadi 1 array.
const flora = ["bunga", "pohon", "dahan", "rumput"];
const fauna = ["lebah", "katak", "belalang", "semut"];
const newArr = flora.concat(fauna);
console.log(newArr);

// 10. Array.of() = berfungsi untuk membuat array dari setiap argumen yang dipassing.
const number = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(number);

// 11. entries() = berfungsi untuk mengembalikan objek Array Iterator baru yang berisi pasangan kunci/nilai untuk setiap indeks dalam array.
const datas = ["ajeng", "tri", "yuli", "anti"];

for (const [index, element] of datas.entries()) {
  console.log(index, element);
}

// 12. join() = membuat dan mengembalikan string baru dengan menggabungkan semua elemen array dengan pemisah koma atau pemisah yang ditentukan.
// jika join() maka secara default memberikan koma (,)
const fruits = ["manggo", "avocado", "orange", "watermelon", "banana"];
const resultFruits = fruits.join("_");
console.log(resultFruits);

// 13. flat() = berfungsi meratakan elemen array bersarang agar memiliki kedalaman yang sesuai dengan yang ditentukan.
// jika tidak flat() menentukan kedalaman maka default-nya 1
// => [[[1, 2]], 3, 4, [5, 6, 7]]; maka hasilnya [[1, 2], 3, 4, 5, 6, 7]
// Jika kita ingin meratakan array bersarang yang berlapis-lapis tanpa ribet mencari nilai kedalaman eksplisit, kita bisa menggunkaan nilai Infinity.
const arr = [[[1, 2]], 3, 4, [5, 6, 7]];
const result = arr.flat(2); // infinity
console.log(arr);
console.log(result);

// 14. slice() = berfungsi menyalin sebagian elemen array ke array baru.
// slice(indexAwal, indexAkhir);
// Untuk menyalin beberapa elemen array dari akhir kita tidak perlu menentukan indexAkhir cukup gunakan indexAwal negatif.
// indexAkhir juga dapat diisi menggunakan indeks negatif.
const hewan = ["bebek", "ayam", "monyet", "ikan", "udang"];
const hewanBaru = hewan.slice(1, 4);
// const hewanBaru = hewan.slice(-3);
// const hewanBaru = hewan.slice(1, -2);
console.log(hewanBaru);

// ==================================== //

// 15. reduceRight() = merupakan method array di JavaScript yang mengeksekusi fungsi callback pada setiap elemen array dari kanan ke kiri (elemen array terakhir ke awal).

// arrow function
// reduceRight((nilaiSebelumnya, nilaiSaatIni, indeksSaatIni, array) => { ... }, nilaiAwal)

// callback function
// reduceRight(callbackFn, nilaiAwal)
const arrAngka = [1, 2, 3, 4, 5];

const tanpaNilaiAwal = arrAngka.reduceRight((nilaiSebelumnya, nilaiSaatIni) => {
  return nilaiSebelumnya + nilaiSaatIni;
});

const pakeNilaiAwal = arrAngka.reduceRight((prevValue, currValue) => {
  return prevValue + currValue;
}, 5);

console.log(`Result reduceRight1 : ${tanpaNilaiAwal}`);
console.log(`Result reduceRight2 : ${pakeNilaiAwal}`);

// 16.reverse() = berfungsi untuk membalikkan urutan array, elemen pertama jadi terakhir dan elemen terakhir jadi yang pertama.
const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const reverseNumbers = numbers.reverse();
console.log(reverseNumbers);

// 17. flatMap() = mengembalikan array baru yang dibentuk dengan fungsi callback yang dieksekusi untuk setiap elemen array, kemudian hasilnya diratakan sebanyak satu lapis.
const nilai = [1, 2, 3, 4, 5, 6];

// contoh berikut menghapus semua bilangan ganjil di dalam array.
const nilaiBaru = nilai.flatMap((x) => (x % 2 !== 0 ? [] : x));

// contoh berikut menjumlahkan setiap elemen array di tambah 2.
const nilaiTambah = nilai.flatMap((y) => [y + 2]);
console.log(`Result flatMapGenap : ${nilaiBaru}`);
console.log(`Result flatMapSum2 : ${nilaiTambah}`);
