// Tagged template literals =
// Bentuk yang lebih kompleks dari template literals,
// memungkinkan kita untuk membaca template literals melalui sebuah function.

// fungsi dari tagged template literals
//1. Escaping HTML Tags
//2. Translation & Internationalization
//3. Styled Components

const nama = "Budi";
const umur = 23;

// ... Rest parameter = menampung seluruh expression yang ada di dalam template literals-nya.
function coba(strings, ...values) {
  //   let result = "";
  //   strings.forEach((str, i) => {
  //     result = result + `${str} ${values[i] || " "}`; // adanya OR agar undefined-nya hilang.
  //   });
  //   return result;

  return strings.reduce(
    (result, str, i) => `${result}${str}${values[i] || ""}`,
    ""
  );
}

const str = coba`halo, nama saya ${nama} dan saya berumur ${umur} tahun.`;
console.log(str);

// ============ //
const myName = "Dendi";
const age = 34;
const nationality = "Singapore";

const highlight = (texts, ...args) => {
  return texts.reduce(
    (texts, str, i) =>
      `${texts} ${str} <span class="hl">${args[i] || ""}</span>`,
    ""
  );
};

const Person = highlight`Halo, nama saya ${myName} dan umur saya ${age} tahun. saya adalah warga ${nationality}.`;
console.log(Person);

document.body.innerHTML = Person;

const mhs = {
  namaSiswa: "Adnan",
  umurSiswa: 23,
  jurusan: "teknik informatika",
};

const { namaSiswa, umurSiswa, jurusan } = mhs;
console.log(namaSiswa);
console.log(umurSiswa);
console.log(jurusan);

const test = ["satu", "dua", "tiga"];

const [a, b, c] = test;
console.log(a);
console.log(b);
console.log(c);
