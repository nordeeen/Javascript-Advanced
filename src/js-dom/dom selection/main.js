// DOM SELECTION

// 1. document.getElementById() --> element
const judul = document.getElementById("judul");
judul.style.color = "#000";
judul.style.background = "#ccc";
judul.innerHTML = "Dyan";
judul.style.borderColor = "red";
judul.style.borderTopLeftRadius = "20px";
judul.style.borderBottomRightRadius = "20px";

// 2. document.getElementsByTagName() --> HTML Collection
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "skyblue";
}

const paraf2 = document.getElementsByTagName("p")[1];
paraf2.innerHTML = "hello world!";
paraf2.style.backgroundColor = "#000";
paraf2.style.color = "red";

// 3. document.getElementsByClassName() --> HTML Collection
const paraf1 = document.getElementsByClassName("p1")[0];
paraf1.innerHTML = "halo koding";

// 4. document.querySelector() --> element
const p4 = document.querySelector("#b p");
p4.style.color = "red";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.innerHTML = "ini di ubah dari js dom";
li2.style.fontSize = "30px";

// 5. document.querySelectorAll() --> NodeList
const allP = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  allP[i].style.color = "purple";
}

// Mengubah Node Root atau mempersempit node root
const sectionB = document.querySelector("#b");
const p5 = sectionB.getElementsByTagName("p")[1];
p5.style.color = "pink";
p5.style.backgroundColor = "black";
