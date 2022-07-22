// DOM Manipulation Node

// Manipulasi Node
// 1.document.createElement() = untuk membuat sebuah element baru.
// 2.document.createTextNode() = untuk membuat teks di simpul baru.
// 3.node.appenchild() = menambahkan/menggabungkan simpul (elemen) sebagai child terakhir dari suatu elemen.
// 4.node.insertBefore() = ini menyisipkan simpul child sebelum child yang ada.
// 5.parentNode.removeChild() = menghapus child element.
// 6.parentNode.replaceChild() = ini menggantikan simpul anak dengan simpul baru.

//insertBefore(elemen baru, elemen lama);
//replaceChild(elemen baru, elemen lama);

// ======================================== //

// membuat element baru
const pBaru = document.createElement("p");
const teksBaru = document.createTextNode("Paragraf Baru");

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksBaru);

// simpan pBaru di akhir section A
const sectionA = document.querySelector("#a");
sectionA.appendChild(pBaru);

// ========================================== //
// membuat element baru
const liBaru = document.createElement("li");
const textLi = document.createTextNode("Item Baru");

// simpan tulisan ke dalam li
liBaru.appendChild(textLi);

// petakan liBaru ke dalam ul
const ul = document.querySelector("section#b ul");
const liDua = ul.querySelector("section#b ul li:nth-child(2)");

// simpan liBaru sebelum liDua
ul.insertBefore(liBaru, liDua);

//========================================//
// menghapus Link di Section A
const section = document.getElementById("a");
const link = document.getElementsByTagName("a")[0];
section.removeChild(link);

//=========================================//
// mengganti teks di paragraf 4

// targetkan parent dan child yang lama
const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName("p")[0];

// buat element dan teks node nya
const h1Baru = document.createElement("h1");
const teksH1 = document.createTextNode("Halo Koding!");

// simpan teksH1 ke dalam h1Baru
h1Baru.appendChild(teksH1);

// targetkan parent lama lalu isi child element baru lalu child element lama.
sectionB.replaceChild(h1Baru, p4);
