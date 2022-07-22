// Template Literals = String literal yang memungkinkan adanya expression di dalamnya.

// Template Literals
// 1. Menggunakan Back Tick ``
// 2. Multi-Line String
// 3. Embedded Expression
// 4. HTML Fragments
// 5. Expression Interpolation

// Template String / Template Literals
let nama = "Budi";
let umur = 33;
console.log(`nama saya adalah ${nama} dan umur saya ${umur} tahun.`);

// Embedded Expression
const x = 10;
console.log(`${x % 2 === 0 ? "ganjil" : "genap"}`);

// HTML Fragments

// ================================================================ //
// Latihan Template Literals

// 1. HTML Fragments
const mhs1 = {
  nama: "Heni",
  umur: 19,
  nrp: "127943794",
  email: "heniimut@gmail.com",
};

const getMhs1 = `<div class="mhs">
  <h1 class="name">${mhs1.nama}</h1>
  <h2 class="email">${mhs1.email}</h2>
</div>`;

// 2. Looping
// pake map

const siswa = [
  {
    nama: "hani",
    email: "haniimut@gmail.com",
  },
  {
    nama: "rahma",
    email: "rahmabee@gmail.com",
  },
  {
    nama: "keke",
    email: "reakekezodiake@gmail.com",
  },
];

const getSiswa = `<div class="siswa">
  ${siswa
    .map(
      (sis) => `<ul>
    <li>${sis.nama}</li>
    <li>${sis.email}</li>
  </ul>`
    )
    .join("")}
</div>`;

// 3. conditionals
// ternary

const song = {
  judul: "Membasuh",
  penyanyi: "Hindia",
  feat: "Rara Sekar",
};

const getSong = `<div class="song">
  <h1 class="judul">${song.judul}</h1>
  <h1 class="penyanyi">${song.penyanyi} ${
  song.feat ? `feat ${song.feat}` : " "
}</h1>
</div>`;

// 4. Nested
// HTML Fragments bersarang
// buat function utk me-looping

const students = {
  nama: "Beni",
  semester: 5,
  mataKuliah: [
    "Rekayasa Web",
    "Pemprograman Sistem Interaktif",
    "Pemprograman Berbasis OOP",
  ],
};

const cetakMatkul = (mataKuliah) => {
  return `${mataKuliah.map((mk) => `<ol>${mk}</ol>`).join("")}`;
};

const getStudents = `<div class="student">
  <h1 class="name">Nama : ${students.nama}</h1>
  <h3 class="semes">Semester : ${students.semester}</h3>
  <h4 class="matkul">mata kuliah :</h4>
  ${cetakMatkul(students.mataKuliah)}
</div>`;

document.body.innerHTML = getStudents;
