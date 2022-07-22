// CALLBACK

// 1. callback = function yg dikirimkan sbg parameter pada function yg lain.*
// 2. callback = sebuah function yg di eksekusi setelah fungsi lain selesai dijalankan.

// synchronous callback
function halo(nama) {
  console.log(`halo, ${nama}`);
}

function tampilkanPesan(callback) {
  let name = prompt("input your name");
  callback(name);
}

// tampilkanPesan(halo);

const mhs = [
  {
    nama: "Ahmad Nurdiansah",
    alamat: "Jakarta Utara",
    kodepos: "14230",
  },
  {
    nama: "Adji Dwi Pramono",
    alamat: "Jakarta Barat",
    kodepos: "14250",
  },
  {
    nama: "Ajeng Tri Julianti",
    alamat: "Jakarta Pusat",
    kodepos: "14220",
  },
  {
    nama: "Revaldi Afrian",
    alamat: "Jakarta Timur",
    kodepos: "14290",
  },
  {
    nama: "Cholifah",
    alamat: "Jakarta Selatan",
    kodepos: "14233",
  },
];

// synchronous callback
// ini berjalan secara synchronous
console.log("mulai sync");
mhs.forEach((m) => {
  for (let i = 0; i < 1000000; i++) {
    let date = new Date();
  }

  console.log(m.nama);
});
console.log("selesai sync");

// ========================================= //
// Asynchronous Callback
function getDataMhs(url, succes, failed) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        succes(xhr.response);
      } else if (xhr.status === 404) {
        failed(Error("gagal get data !!!"));
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

// ini berjalan secara asynchronous
console.log("start async");
getDataMhs(
  "data/dataMhs.json",
  (results) => {
    const mhs = JSON.parse(results);
    mhs.forEach((m) => {
      console.log(`Nama : ${m.nama} == ${m.alamat} == ${m.jurusan}`);
    });
  },
  (err) => {
    console.error(err);
  }
);
console.log("finish async");

// ========================== //
const posts = [
  { id: 1, title: "post one", body: "this body post one" },
  { id: 2, title: "post two", body: "this body post two" },
  { id: 3, title: "post three", body: "this body post three" },
];

// function getPost setelah 2 detik di display ke UI.
const getPost = () => {
  setTimeout(() => {
    let placeValue = "";

    posts.forEach((post) => {
      placeValue += `<li id="myLI" onClick='delPost()'>${post.title} = ${post.body}</li>`;
    });
    document.body.innerHTML = placeValue;
  }, 1000);
};

getPost();

// function createPost setelah 2 detik buat postingan baru lalu tampil di UI, menggunakan callback dr function pertama.
const createPost = (post, callPost) => {
  setTimeout(() => {
    posts.push(post);
    callPost();
  }, 2000);
};

createPost({ id: 4, title: "post four", body: "this body post four" }, getPost);

// bikin fitur untuk delete post body
const delPost = () => {
  const del = document.querySelector("#myLI");
  del.remove();
  console.log(del);
};
