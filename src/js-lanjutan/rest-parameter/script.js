// Rest Parameter =
// Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah Array.
// Rest Parameter harus di tempatkan di akhir parameter.
// Rest parameter or sisa parameter

// Example Rest Parameter :
function myFunc(a, b, ...Args) {
  return `a = ${a} b = ${b} myArgs = ${Args}`;
}

console.log(myFunc(1, 2, 3, 4, 5));

// =========== //

function jumlahkan(...angka) {
  // use for of
  let total = 0;

  for (const number of angka) {
    total += number;
  }

  return total;

  //   return angka.reduce((x, y) => x + y); // use reduce
}

console.log(jumlahkan(1, 2, 3, 4, 5, 10));

// 1. Array Desctructuring
const kelompok = ["Dian", "Ajeng", "Adji", "Epang"];
const [ketua, wakil, ...anggota] = kelompok;
console.log(`ketua : ${ketua} wakil : ${wakil} dan anggota : ${anggota}`);

// 2. Object Desctructuring
const csPro = {
  pm: "Ifffan zulkais",
  frontEnd1: "Rhokka",
  frontEnd2: "Ainun",
  backEnd1: "Apri",
  backEnd2: "Dbs",
  uiUx: "Wanda",
};

const { pm, ...member } = csPro;
console.log(`${pm} seorang project manager`);
console.log(member);

// 3. Filtering tipe data
const filterData = (type, ...values) => {
  return values.filter((item) => typeof item === type);
};

// cek tipe data lalu cari
console.log(filterData("string", "aku string", 1, 2, 3, false, true));
