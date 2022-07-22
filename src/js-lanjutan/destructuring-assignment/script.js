// Destructuring Assignment =
// Expression pada javascript yang membuat kita dapat "membongkar" nilai dari array
// atau properti dari object ke dalam variable yang terpisah.

// contoh menggunakan Array
const test = ["satu", "dua", "tiga"];

const [a, b, c] = test;
console.log(a);
console.log(b);
console.log(c);

// contoh menggunakan Object
const getSiswa = {
  nama: "Adnan",
  umur: 23,
  jurusan: "Teknik Mesin",
};

const { nama, umur, jurusan } = getSiswa;
console.log(nama);
console.log(umur);
console.log(jurusan);

// =================== //
// Destructuring Varible / Assignment

// Desctructuring Array
const perkenalan = ["Halo", "nama", "saya", "Jimbon"];

// const [salam, satu, dua, myName] = perkenalan;

// skipping items = mengabaikan beberapa variabel yg tidak diperlukan.
const [salam, , , myName] = perkenalan;
console.log(salam);

// swap items = menukar isi dari variable.
let numberOne = 1;
let numberTwo = 2;
console.log(numberOne);
console.log(numberTwo);

[numberOne, numberTwo] = [numberTwo, numberOne];

console.log(numberOne); // 2
console.log(numberTwo); // 1

// Return value pada function
function testing() {
  return ["one", "two", "three"];
}

const [x, y, z] = testing();
console.log(y);

// Rest parameter
const [first, ...values] = [1, 2, 3, 4, 5, 6, 7];

console.log(first); // 1
console.log(values); // 2, 3, 4, 5, 6, 7

// ==================== //
// Destructuring Object
const Person = {
  namaOrang: "Ahmad Nurdiansah",
  email: "ahmadnurdiansah@gmail.com",
};

const { namaOrang, email } = Person;
console.log(`nama saya adalah ${namaOrang} dan email : ${email}`);

// Assignment tanpa deklarasi
({ namaSiswa, kewarganegaraan } = {
  namaSiswa: "Dimas Drajad",
  kewarganegaraan: "Indonesia",
});

console.log(`nama saya ${namaSiswa} dan saya orang ${kewarganegaraan}.`);

// Assign ke variable yang baru.
const myBio = {
  namePerson: "Qischil",
  umurPerson: 33,
};

const { namePerson: np, umurPerson: up } = myBio; // nama variable-nya di ubah.
console.log(np);
console.log(up);

// Memberikan nilai default + assign ke variable yang baru.
const myUser = {
  nameUser: "Taisei Marukawa",
  umurUser: 25,
  //   emailUser: "taiseimarukawa@gmail.com",
};

const {
  nameUser: nu,
  umurUser: uu,
  emailUser: eu = "defaultvalue@gmail.com",
} = myUser;
console.log(eu);

// Rest parameter
const myProfile = {
  namaku: "Ahmad Nurdiansah",
  jurusan: "Teknik Informatika",
  nomorAbsen: 0830483,
};

const { namaku, ...args } = myProfile;
console.log(namaku);
console.log(args); // berbentuk object.

// Mengambil field pada Object, setelah dikirim sebagai parameter untuk function.
const dataFakeApi = {
  id: "001",
  namaClient: "Ajeng Tri Yulianti",
  umurClient: 17,
  emailClient: "ajengtriyulianti@gmail.com",
  educationUser: "SMAN 72 Jakarta",
};

// isi property object-nya di unpack
const getData = ({ namaClient }) => {
  return namaClient;
};

console.log(getData(dataFakeApi));
