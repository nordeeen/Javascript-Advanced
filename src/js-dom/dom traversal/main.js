// DOM Traversal Method / Metode Penelusuran DOM
// 1. parentNode = node = mengembalikan simpul induk dari elemen atau simpul.
// 2. parentElement = element = mengembalikan elemen induk dari elemen yang ditentukan.
// 3. nextSibling = node =  mengembalikan simpul berikutnya pada tingkat pohon yang sama.
// 4. nextElementSibling = element = mengembalikan elemen berikutnya pada tingkat pohon yang sama.
// 5. previousSibling = node = mengembalikan simpul sebelumnya pada tingkat pohon yang sama.
// 6. previousElementSibling = element = mengembalikan elemen sebelumnya di tingkat pohon yang sama.

// perbedaan parentElement dan parentNode bahwa parentElement bahwa parentElement mengembalikan
// null jika simpul induk bukan simpul elemen.

// parentElement = mengincar induk dari sebuah elemen yg kita tentukan.
//================================//
// Bagaimana caranya klik tombol x lalu card hilang?

// contoh 1 :
// const cardPerson = document.querySelector(".card");
// const closeX = document.querySelector(".close");

// closeX.addEventListener("click", function () {
//   cardPerson.style.display = "none";
// });

//==============================//

// contoh 2 :
// const closeAll = document.querySelectorAll(".close");

// for (let i = 0; i < closeAll.length; i++) {
//   closeAll[i].addEventListener("click", function (event) {
//     event.target.parentElement.style.display = "none";
//   });
// }

//===========================//
// contoh 3 :
const close = document.querySelectorAll(".close");

close.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.parentElement.style.display = "none";
  });
});

// ============================//
const namaCard = document.querySelector(".nama");
console.log(namaCard.parentElement); // <div class="card"></div>
// console.log(namaCard.parentElement.parentElement); // <div class="container"></div>
// console.log(namaCard.parentNode); // <div class="card"></div>
// console.log(namaCard.nextSibling); // hasilnya enter karena element sebelah kanan tidak ada.
// console.log(namaCard.nextElementSibling); // <span class="telp">08123456789</span>
// console.log(namaCard.previousElementSibling); // <img src="img/orang.jfif" width="96" height="96" />
