// 1. latihan membuat button toggle change color background.

const btnColor = document.querySelector("#btn-color");
btnColor.addEventListener("click", () => {
  // document.body.style.backgroundColor = "salmon";
  // document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
});

// ============================================ //
// 2. latihan membuat button random color beserta fungsinya.

// buat button dan isi text lalu atribut button-nya
const btnRandomColor = document.createElement("button");
const textBtnRandomColor = document.createTextNode("Ubah Warna");
btnRandomColor.setAttribute("type", "button");

// dirangkai menjadi satu
btnRandomColor.appendChild(textBtnRandomColor);

// lalu tempatkan posisinya setelah btnColor
btnColor.after(btnRandomColor);

// buat fungi btnRandomColor
btnRandomColor.addEventListener("click", function () {
  // nilai rgb dari 1 sampai max 255
  const red = Math.round(Math.random() * 255 + 1);
  const green = Math.round(Math.random() * 255 + 1);
  const blue = Math.round(Math.random() * 255 + 1);
  console.log(red);
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
});

// =================================== //
// 3. latihan membuat slider pengubah warna.

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", () => {
  const merah = sMerah.value;
  const hijau = sHijau.value;
  const biru = sBiru.value;
  console.log(sMerah.value);
  document.body.style.backgroundColor = `rgb(${merah},${hijau},${biru})`;
});

sHijau.addEventListener("input", () => {
  const merah = sMerah.value;
  const hijau = sHijau.value;
  const biru = sBiru.value;
  document.body.style.backgroundColor = `rgb(${merah},${hijau},${biru})`;
});

sBiru.addEventListener("input", () => {
  const merah = sMerah.value;
  const hijau = sHijau.value;
  const biru = sBiru.value;
  document.body.style.backgroundColor = `rgb(${merah},${hijau},${biru})`;
});

// ================================================= //
// 4. latihan membuat cursor pengubah warna.
// clientX dan clientY = deteksi nilai koordinat cursor tinggi dan lebar.
// innerWidth dan innerHeight = deteksi berapa lebar dan tinggi window/body

document.body.addEventListener("mousemove", (event) => {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientX / window.innerHeight) * 255);
  document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
});
