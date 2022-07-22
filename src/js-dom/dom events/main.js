// DOM EVENTS

// Events pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM.

// Cara "mendengarkan" event
// 1. Event Handler = sifatnya menimpa
// = Inline HTML attribute
// = Element Method
// 2. addEventListener()

// Daftar Event
// 1. Mouse Event = (click, dbclick, mouseover, mouseenter, mouseup, wheel)
// 2. Keyboard Event = (keydown, keypress, keyup)
// 3. Resources Event
// 4. Focus Event
// 5. View Event = (resize, scroll)
// 6. Form Event = (reset, submit)
// 7. CSS Animation & Transition Event
// 8. Drag & Drop Event

// ====================================== //

// contoh menggunakan eventhandler
// sangat tidak di sarankan!
const p2 = document.querySelector(".p2");
const p1 = document.querySelector(".p1");
p1.onclick = ubahWarnaP1;

function ubahWarnaP2() {
  p2.style.backgroundColor = "green";
}

function ubahWarnaP1() {
  p1.style.backgroundColor = "pink";
}

// contoh menggunakan addEventListener()
// membuat event klik p4 lalu muncul li baru.
const p4 = document.getElementsByTagName("p")[3];
p4.addEventListener("click", () => {
  const ul = document.getElementById("b");
  const liBaru = document.createElement("li");
  const teksLi = document.createTextNode("item baru");

  liBaru.appendChild(teksLi);
  ul.appendChild(liBaru);
  liBaru.style.backgroundColor = "lightblue";
});

// =====================================//
const p5 = document.getElementsByTagName("p")[4];
p5.addEventListener("dblclick", function () {
  p5.style.backgroundColor = "lightgreen";
  p5.style.color = "orangered";
});
