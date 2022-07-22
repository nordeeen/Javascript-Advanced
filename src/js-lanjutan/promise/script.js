// Promise adalah objek yang merepresentasikan keberhasilan atau
// kegagalan sebuah event yang asynchronous di masa yang akan datang.

// fetch itu mengembalikan promise.

// promise (janji) = (terpenuhi / ingkar)
// keadaan (states)  = (fullfield, rejected, pending)
// 3 fungsi callback (resolve / reject / finally)
// aksi (then / catch)

//  (finally = ketika waktu tunggunya selesai) => digunakan untuk animasi loading

// contoh 1 :
let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji ditepati");
//   } else {
//     reject("ingkar janji");
//   }
// });

// di tangkap then dan catch-nya
// janji1
//   .then((response) => console.log("OK : " + response))
//   .catch((response) => console.log("NOT OK : " + response));

// console.log(janji1);

//==============================//

// contoh 2 :
const promiseOne = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("janji terpenuhi");
    }, 5000);
  } else {
    setTimeout(() => {
      reject("tidak memenuhi janji");
    }, 5000);
  }
});

console.log("mulai");
// console.log(promiseOne.then((response) => console.log(response))); // agar terlihat proses pendingnya.
promiseOne
  .finally(() => console.log("selesai menunggu!")) // ketika waktu tunggunya selesai
  .then((response) => console.log(response))
  .catch((response) => console.log(response));
console.log("selesai");

// ======================= //

// Promise.all = (ketika memiliki banyak promise dan ingin menjalankan sekaligus)

const getFilm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Jhon Doe",
        pemeran: "Brad Pitt, Angelina Jolie, Steve",
        rilis: "2022",
      },
    ]);

    reject("this Error...");
  }, 500);
});

const getMhs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        nama: "Ahmad Nurdiansah",
        email: "nrdnsyh@gmail.com",
      },
    ]);

    reject("this Error...");
  }, 1000);
});

const getWeather = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Jakarta Utara",
        temp: "26 celcius",
        kondisi: "Cerah Berawan",
      },
    ]);

    reject("this Error...");
  }, 2000);
});

// getFilm
//   .then((response) => console.log(response))
//   .catch((response) => console.log(response));

// getWeather
//   .then((response) => console.log(response))
//   .catch((response) => console.log(response));

// getMhs
//   .then((response) => console.log(response))
//   .catch((response) => console.log(response));

// using promise.all
Promise.all([getFilm, getWeather, getMhs])
  .then((response) => {
    const [getFilm, getMhs, getWeather] = response; // dipecah menggunakan destructing assigment
    console.log(getFilm);
    console.log(getWeather);
    console.log(getMhs);
  })
  .catch((response) => console.log(response));

//===============================//
const testing = new Promise((resolve, reject) => {
  let a = 1 + 1;

  if (a === 3) {
    resolve("succes");
  } else {
    reject("failed");
  }
});

testing
  .then((message) => console.log(`ini pesan ${message}`))
  .catch((message) => console.log(`ini pesan ${message}`));

// ====================//
// this callback function
const userLeft = false;
const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       nama: "User Left",
//       message: " :( ",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       nama: "User Watching Cat Meme",
//       message: "WebdevSimplified",
//     });
//   } else {
//     callback("happy coding");
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log(`Succes : ${message}`);
//   },
//   (error) => {
//     console.log(error.nama + " " + error.message);
//   }
// );

// versi promise
function watchTutorPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        nama: "User Left",
        message: " :(( ",
      });
    } else if (userWatchingCatMeme) {
      reject({
        nama: "User Watching Cat Meme",
        message: "WebDev Simplified",
      });
    } else {
      resolve("Happy Coding ges");
    }
  });
}

watchTutorPromise()
  .then((response) => {
    console.log(response);
  })
  .catch((response) => {
    console.log(response.nama + " " + response.message);
  })
  .catch((response) => {
    console.log(response.nama + " " + response.message);
  });

// =====================================//
// promise all
const p1 = new Promise((resolve, reject) => {
  resolve("One");
});

const p2 = new Promise((resolve, reject) => {
  resolve("Two");
});

const p3 = new Promise((resolve, reject) => {
  resolve("Three");
});

Promise.all([p1, p2, p3])
  .then((response) => console.log(response))
  .catch((response) => console.log(response));

// ====================== //
fetch("http://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((response) => console.log(response));

// ===================================== //
// promise chaining
// http://jsonplaceholder.typicode.com/posts
// http://jsonplaceholder.typicode.com/users/" + 10
// http://jsonplaceholder.typicode.com/users/" + 7

const getPost = () => fetch("http://jsonplaceholder.typicode.com/posts");
const getAuthor = () =>
  fetch("http://jsonplaceholder.typicode.com/users/" + 10);
const getComment = () =>
  fetch("http://jsonplaceholder.typicode.com/users/" + 7);

let a = getPost().then((res) => res.json()); // post
let b = a.then((res) => getAuthor(res.id)).then((res) => res.json()); // author
let c = a.then((res) => getComment(res.id)).then((res) => res.json()); // comment

a.then((postResponse) => {
  b.then((authorResponse) =>
    c.then((commentResponse) => ({
      postResponse,
      authorResponse,
      commentResponse,
    }))
  ).then((results) => {
    console.log(results.postResponse);
    console.log(results.authorResponse);
    console.log(results.commentResponse);
  });
}).catch((error) => console.log(error));

//==============================//
// promises looping

// "http://jsonplaceholder.typicode.com/posts/45",
//   "http://jsonplaceholder.typicode.com/posts/46",
//   "http://jsonplaceholder.typicode.com/posts/47",
//   "http://jsonplaceholder.typicode.com/posts/48",
//   "http://jsonplaceholder.typicode.com/posts/49",

// inisialisasi url fetch
const doFetch = (url) => fetch(url).then((result) => result.json());

// urls kumpulan api post 5
const urls = [
  "http://jsonplaceholder.typicode.com/posts/45",
  "http://jsonplaceholder.typicode.com/posts/46",
  "http://jsonplaceholder.typicode.com/posts/47",
  "http://jsonplaceholder.typicode.com/posts/48",
  "http://jsonplaceholder.typicode.com/posts/49",
];

// create empty array promises
let promises = [];

// mapping urls
urls.map((item) => {
  promises.push(doFetch(item));
});

// promise.all result
Promise.all(promises).then((result) => console.log(result));

// ============================== //
// Promise Race
// Promice.race hanya menghasilkan promise yang lebih dulu selesai.

let pembalap1 = new Promise((resolve) => setTimeout(resolve, 30, "pembalap1"));
let pembalap2 = new Promise((resolve) => setTimeout(resolve, 40, "pembalap2"));
let pembalap3 = new Promise((resolve, reject) =>
  setTimeout(reject, 20, "pembalap3")
);
let pembalap4 = new Promise((resolve) => setTimeout(resolve, 20, "pembalap4"));
let pembalap5 = new Promise((resolve) => setTimeout(resolve, 70, "pembalap5"));

Promise.race([pembalap1, pembalap2, pembalap3, pembalap4, pembalap5])
  .then((succes) =>
    console.log("Balapan selesai, pemenangnya adalah : " + succes)
  )
  .catch((failed) =>
    console.log("Balapan dihentikan karena : " + failed + " jatuh")
  );

// ========================//
// Promise and Promise.all

const Posts = [
  { title: "post one", body: "this body post one" },
  { title: "post two", body: "this body post two" },
];

function getPosting() {
  setTimeout(() => {
    let output = "";

    Posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
}

getPosting();

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;

      if (!error) {
        resolve(Posts.push(post));
      } else {
        reject("Error : something went wrong");
      }
    }, 3000);
  });
}

createPost({ title: "post three", body: "this body post three" })
  .then(getPosting)
  .catch((err) => console.error(err));

// ============== //
const promises1 = new Promise((resolve, reject) => resolve("Hello World"));
const promises2 = 10;
const promises3 = new Promise((resolve, reject) =>
  setTimeout(resolve("Hello Coders"), 3000)
);
const promises4 = fetch("http://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

Promise.all([promises1, promises2, promises3, promises4]).then((values) =>
  console.log(values)
);
