// Destructuring

// Destructuring return value.
function kalkulasi(a, b) {
  return [a * b, a / b, a + b, a - b];
}

// sangat berpengaruh terhadap pengurutan asosiasi propertinya.
// const [kali, bagi, tambah, kurang = "tidak ada"] = kalkulasi(3, 2);
// console.log(kali); // 6
// console.log(bagi); // 1.5
// console.log(tambah); // 5
// console.log(kurang); // 1

// ================ //
// ini tidak berpengaruh terhadap pengurutan asosiasi-nya.
const calculate = (x, y) => {
  return {
    tambah: x + y,
    kali: x * y,
    bagi: x / y,
    kurang: x - y,
  };
};

const { kali, kurang, bagi, tambah } = calculate(3, 3);
console.log(kali);

// ================================ //

// Destructuring Function Arguments
const Mhs = {
  nama: "Budi",
  umur: 23,
  email: "budidoremi@gmail.com",
  nilai: {
    uas: 75,
    tugas: 95,
    uts: 78,
  },
};

// melakukan desctructuring bersarang.
const cetakMhs = ({ nama, email, umur, nilai: { uas, tugas, uts } }) => {
  return `Halo, nama saya ${nama} dan umur saya ${umur} tahun. ini adalah email saya ${email} dan nilai tugas saya adalah ${tugas}. `;
};

console.log(cetakMhs(Mhs));
