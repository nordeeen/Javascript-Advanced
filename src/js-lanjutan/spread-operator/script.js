// Spread Operator adalah = Memecah (expand / unpack) iterables menjadi single element.

// iterables object :
// 1. String  2. Array  3. Arguments/NodeList
// 4. TypedArray 5. Map  6. Set  7. User-defined Iterables

// Example Spread Operator :
const students = ["Aji", "Ajeng", "Reval"];
console.log(students); // berbentuk Array
console.log(...students); // di unpack menjadi single element.
console.log(...students[1]); // di pecah masing-masing per-element.

//1.  spread operator berfungsi utk menggabungkan 2 atau lebih array.
const mhs = ["Budi", "Fajar", "Joni"];
const pelajar = ["Ajeng", "Epang", "Riski"];
// const orang = [mhs, pelajar]; => hasilnya malah array didalam array
// const allData = mhs.concat(pelajar); => bisa juga menggunakan concat, namun kurang fleksibel.
const allData = [...mhs, "Aji", ...pelajar];
console.log(allData);

//2. meng-copy array
const dataPerson = ["Egi", "Witan", "Baggott"];
// const footballer = dataPerson;
const footballer = [...dataPerson];
dataPerson[2] = "Marc Klok"; // di footballer tidak ada data ini.
console.log(footballer);
console.log(dataPerson);

// 1 contoh lain :
const liName = document.querySelectorAll("li");
let allName = [];
for (let i = 0; i < liName.length; i++) {
  allName.push(liName[i].textContent);
}

console.log(allName);

// 2 contoh lain :
// sebenernya tidak bisa menggunakan method map karena bukan array.
// solusinya menggunakan spread operator agar berubah menjadi array.
// initialValue dari liName adalah NodeList.
const getName = [...liName].map((item) => item.textContent);
console.log(getName);

// ========= //
// naming hover style
const getNama = document.querySelector(".nama");
const huruf = [...getNama.textContent]
  .map((nama) => `<span>${nama}</span>`)
  .join("");

getNama.innerHTML = huruf;
console.log(getNama);
