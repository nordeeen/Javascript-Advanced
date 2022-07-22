// Map , Filter dan Reduce = sama-sama menghasilkan array baru.

// map() berfungsi untuk membuat array baru yang diisi dengan hasil pemanggilan
// fungsi yang disediakan pada setiap elemen dalam array pemanggil.

//filter() berfungsi untuk membuat array baru dengan semua elemen
// yang lulus pengujian yang diimplementasikan oleh fungsi yang disediakan.

// reduce() merupakan method array di JavaScript yang mengeksekusi fungsi callback pada setiap elemen array,
// nilai hasil kalkulasi pada elemen sebelumnya digunakan untuk melakukan kalkulasi pada elemen berikutnya.

// Perbedaan utama yang perlu Anda ketahui adalah .map() mengembalikan array baru sedangkan .forEach() tidak.
// forEach() hanya beroperasi pada setiap nilai dalam array.

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka => 3
// menggunakan for
const newAngka = [];

for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}

console.log(newAngka);

// cara  menggunakan method filter
// cari nilai array yang >= 3
const filteredAngka = angka.filter((num) => num >= 3);
console.log(`result filterAngka : ${filteredAngka}`);

// cara menggunakan method map
// tambahkan semua angka dengan 2
const sumTwo = angka.map((number) => number + 2);
console.log(`result sumTwo : ${sumTwo}`);

// cara menggunakan method reduce
// menjumlah seluruh elemen array
// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// sebenarnya ada nilai awal yang defaultnya 0 namun bisa kita ubah nilainya.
const calcNum = angka.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue
);
console.log(`result reduce : ${calcNum}`);

// Method Chaining = method berantai
// cari angka > 5
// kalikan 3
// jumlahkan
const totalAllNum = angka
  .filter((x) => x > 5)
  .map((x) => x * 3)
  .reduce((x, y) => x + y);
console.log(`result totalNumber : ${totalAllNum}`);

// ==============================================================//
// latihan map filter dan reduce

// 1. ambil semua elemen video
// Array.from() agar bentuknya tidak Nodelist.
const getVideo = Array.from(document.querySelectorAll("[data-duration]"));

// 2. pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsAdv = getVideo
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // 3. ambil durasi masing2 video
  // pake dataset
  .map((item) => item.dataset.duration)

  // 4. ubah durasi menjadi int, ubah menit jadi detik
  // 10:30 -> split [10, 30]
  .map((times) => {
    const parts = times.split(":").map((part) => parseInt(part));
    return parts[0] * 60 + parts[1];
  })

  // 5. jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// 6. ubah formatnya jadi jam menit detik
// pake Math.floor jam dan menit
// jam = / 3600 -> - jam * 3600
// menit = / 60
// detik  = - menit * 60
const hour = Math.floor(jsAdv / 3600);
jsAdv = jsAdv - hour * 3600;

const minute = Math.floor(jsAdv / 60);
const second = jsAdv - minute * 60;

// 7. simpan di DOM
const jumlahVideo = getVideo.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

const pJmlhVideo = document.querySelector(".jumlah-video");
pJmlhVideo.textContent = `${jumlahVideo} Video.`;

const pTotalDurasi = document.querySelector(".total-durasi");
pTotalDurasi.textContent = `${hour} Jam, ${minute} Menit, ${second} Detik.`;

// 8 video
// 2 jam 18 menit 12 detik
console.log(jsAdv);

// const students = [
//   { nama: "george", grade: 7.5 },
//   { nama: "ana", grade: 9 },
//   { nama: "jhon", grade: 6 },
//   { nama: "george", grade: 7.5 },
//   { nama: "elon", grade: 8 },
//   { nama: "jhon", grade: 7 },
// ];

// const filterName = students.filter((item) => item.nama.includes("e"));
// console.log(filterName);

// const getNama = students
//   .map((name) => `<li class="nama">${name.nama} ${name.grade}</li>`)
//   .join("");

// document.body.innerHTML = getNama;

//=======================================================//
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  { name: "Company Ten", category: "Retail", start: 1981, end: 1999 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// 1. forEach

// Example 1 :
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

companies.forEach((company) => {
  console.log(company);
});

//================================//

// 2. filter

// Get 21 and older
// Example 1 :
let mauMinum = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    mauMinum.push(ages[i]);
  }
}

// Example 2 :
const data = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});

const mauMimi = ages.filter((age) => age >= 21);
console.log(mauMimi);

// Filter Retails Companies
// Step 1 :
const filterCompanies = companies.filter((comp) => {
  if (comp.category === "Retail") {
    return true;
  }
});

// Step 2 :
let datacomp = "Retail";
const filterDataComp = companies.filter((comp) => comp.category === datacomp);
console.log(filterDataComp);

// Get 80s companies
const eightiesComp = companies.filter(
  (comp) => comp.start >= 1980 && comp.start < 1990
);

console.log(eightiesComp);

// Get companies that 10 years or more
const lastedTenYears = companies.filter((comp) => comp.end - comp.start >= 10);
console.log(lastedTenYears);

//===========================//

// map
// create array of company names
const companyName = companies.map((comp) => comp.name);

// call data array companies name and data years
const testMap = companies.map((comp) => {
  return `${comp.name} = [${comp.start} - ${comp.end}]`;
});

// calculate data age sum two
const testAge = ages.map((age) => Math.floor(age)).map((age) => age * 2);

console.log(testAge);

//=========================//
// sort
// 0 >  = sort a after b = (ascending) = return 1
// 0 <  = sort a before b = (descending) = return -1
// === 0 = keep original order of a and b

// step 1 :
// sort companies by start year
const sortCompanies = companies.sort((c1, c2) => {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
// console.log(sortCompanies);

// step 2 :
const sortComp = companies.sort((x, y) => x.start > y.start);
console.log(sortComp);

// Sort Ages
// b - a = terbesar ke terkecil
// a - b = terkecil ke terbesar
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

// reduce
// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// sebenarnya ada nilai awal yang defaultnya 0 namun bisa kita ubah nilainya.

// step 1 :
let sumAge = 0;
for (let i = 0; i < ages.length; i++) {
  sumAge += ages[i];
}

// step 2 :
const sumAngka = ages.reduce(function (total, age) {
  return total + age;
}, 0);

// step 3 :
const ageSum = ages.reduce((total, age) => total + age);

// Get total all years for all companies
// step 4 :
const sumAllComp = companies.reduce(function (total, company) {
  return total + (company.end - company.start);
}, 0);

// step 5 :
const compSum = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

console.log(`result reduce : ${compSum}`);

// =========================== //
// Combine Methods use chaining
// map * 2 => filter age >= 40 => sort a - b => reduce a + b
const combined = ages
  .map((a) => a * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b);

console.log(`result combined : ${combined}`);
