// DOM Manipulation

// Manipulasi Element
// 1. element.innerHTML
// 2. element.style.<propertyCSS>
// 3. element.setAttribute() = menyisipkan/menambahkan sebuah atribute
// - element.getAttribute() = mengambil sebuah atribute di element html
// - element.removeAttribute() = menghapus sebuah atribute di element html tertentu.
// 4. element.classList

// sifat setAttribute ini menimpa jadi attribute sebelumnya akan hilang.
// Atributte = sesuatu yang menempel pada element html
// contoh attribute = id="judul" class="p1" ref="http://instagram.com/sandhikagalih"

// element.classList = mengelola class
// 1.element.classList.add() = menambahkan class
// 2.element.classList.remove() = menghapus class
// 3.element.classList.toggle() = jika belum ada maka menambahkan class dan jika sudah ada maka akan menghapus class (on/off)
// 4.element.classList.item() = untuk mengetahui element/class tertentu.
// 5.element.classList.contains() = untuk mengecek class tertentu.
// 6.element.classList.replace() = untuk mengganti class

// ===================================== //

// 1. element.innerHTML = dapat di isi oleh apapun (tag, text dll)
const gantiJudul = document.getElementById("judul");
gantiJudul.innerHTML = "Halo Koding";

const p5 = document.getElementsByTagName("p")[4];
p5.innerHTML = "ini paragraf 5";
p5.style.backgroundColor = "lightblue";

// 2. element.style.<propertyCSS>
const judul = document.querySelector("#judul");
judul.style.color = "#000";
judul.style.backgroundColor = "salmon";

// 3. element.setAttribute()
const judulElement = document.getElementsByTagName("h1")[0];
judulElement.setAttribute("class", "name");

// 4. element.getAttribute()
const linkA = document.querySelector("section#a a");
linkA.getAttribute("href");
console.log(linkA);

// 5. element.removeAttribute();
const del = document.getElementsByTagName("p")[4];
del.removeAttribute("class");

// 6. element.classList.add()
const p3 = document.querySelector(".p3").classList.add("name");

// 7. element.classList.remove()
const sectionLI = document
  .querySelector(".item-satu")
  .classList.remove("item-satu");

// 8. element.classList.toggle()
const toggleP = document.querySelector(".p3").classList.toggle("label");

// 9. element.classList.item()
const p = document.querySelector(".p3").classList.item(1);
console.log(p);

// 10. element.classList.contains()
const cek = document.getElementsByTagName("p")[0].classList.contains("p1");
console.log(cek);

// 11. element.classList.replace()
const gantiClass = document
  .getElementsByTagName("p")[2]
  .classList.replace("p3", "paragraphThree");
console.log(gantiClass);
