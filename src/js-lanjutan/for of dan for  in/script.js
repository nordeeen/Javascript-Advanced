// Looping Baru di JS Modern

// 1. for ... of
// Sebuah looping yang bisa mengulang atau menelusuri object-object yang iterable.

// iterable object :
// String, Array, Arguments/Nodelist, TypedArray, Map, Set dan User-defined Iterable.

// Example for .. of :
// 1. Array
const allName = ["Ajeng", "Adji", "Revaldi"];

// use for
for (let i = 0; i < allName.length; i++) {
  console.log(`ini pakai for : ${allName[i]}`);
}

// use forEach ( catat : forEach khusus looping untuk Array. )
allName.forEach((item) => console.log(`ini pakai forEach : ${item}`));

// Bonus materi (forEach memakai index) :
allName.forEach((nama, index) => {
  console.log(`Halo, saya ${nama} Mahasiswa ke - ${index + 1}`);
});

// use for .. of
for (const item of allName) {
  console.log(`ini pakai for of : ${item}`);
}

// Bonus materi (for of bisa di akali untuk memiliki index.)
for (const [i, n] of allName.entries()) {
  console.log(`halo, saya ${n} santri ke - ${i + 1}`);
}

// 2. String
const firstName = "Ahmad Nurdiansah";

for (const n of firstName) {
  console.log(n);
}

// 3. NodeList = ketika kita melakukan query pada DOM.
const liName = document.querySelectorAll(".nama");

liName.forEach((nama) => console.log(`materi NodeList : ${nama.innerHTML}`));

for (const name of liName) {
  console.log(`materi NodeList : ${name.textContent}`);
}

// 4. Arguments = yang ada pada sebuah function.
// ketika parameter tidak di isi secara default arguments itu ada.
function jumlahAngka() {
  let jumlah = 0;

  for (const number of arguments) {
    jumlah += number;
  }

  return jumlah;
}

console.log(jumlahAngka(1, 2, 3, 4, 5));

// =========================== //

// 2. for ... in = Sebuah looping yang bisa mengulang atau menelusuri hanya untuk properti pada object.

// Example for .. in :
const dataPerson = {
  fullName: "Ajeng Tri Yulianti",
  age: 17,
  email: "ajengtriyulianti@gmail.com",
  profession: "student",
};

// yang di ambil hanya properti pada objectnya saja.
for (const getPropety in dataPerson) {
  console.log(getPropety);
}

// yang di ambil hanya value pada objectnya saja.
for (const datas in dataPerson) {
  console.log(dataPerson[datas]);
}

// versi lengkap properti dan value :
for (const getData in dataPerson) {
  console.log(`${getData} : ${dataPerson[getData]}`);
}
