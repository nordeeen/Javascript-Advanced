// PREVENT DEFAULT

// Prevent Default = sebuah method yg ada di dalam objek event (e), tujuannya adalah untuk menghentikan aksi default yang dilakukan oleh sebuah elemen.

// preventDefault = cegah aksi default-nya.

// Event Bubbling = ketika kita memiliki sebuah event (semisal di tombol .close ini ) dan juga punya di (.card), maka jika kita menjalankan event di tombol close yang card juga akan di jalankan. maka akan ngecek semakin ke atas-atas sampai gelembungnya pecah sampai tidak ada elemen pembungkusnya lagi.
// solusinya berikan method e.stopPropagation()

//=====================================================//

// tanpa menggunakan preventDefault() maka hanya akan menghilang persekian detik saja seperti merefresh. karena propertinya sdh di ganti dengan anchor link yg href="" kosong.

// cara seperti ini masih kurang efektif, akan menjadi problem bila menambahkan sebuah elemen baru secara realtime.

// const closeAll = document.querySelectorAll(".close");

// closeAll.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation(); // maka alert(OK)-nya tidak akan muncul.
//   });
// });

// const getCards = document.querySelectorAll(".card");
// getCards.forEach((card) => {
//   card.addEventListener("click", () => {
//     alert("ok");
//   });
// });

//=========================================//
// memanfaatkan event bubbling jadi kita targetkan ke pembungkus terluar class container.

// contoh cara efektif :
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
  e.target.className == "close"
    ? ((e.target.parentElement.style.display = "none"), e.preventDefault())
    : null;
  console.log(e.target);
});
