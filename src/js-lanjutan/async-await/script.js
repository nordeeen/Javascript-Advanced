// Async Await =  Fitur ini mempermudah kita dalam menangani proses asynchronous.

// keterangan :
// async → mengubah function menjadi asynchronous
// await → menunda eksekusi hingga proses asynchronous selesai.
//await juga bisa digunakan berkali-kali di dalam function

// Asynchronous function =
// sebuah function yang bekerja secara asynchronous (melalui event loop), yang menghasilkan (implisit)
// promise sebagai return value-nya, tapi cara penulisan codenya menggunakan penulisan yang synchronous (standart).

// Asynchronous Function :
//1. fungsi yang berjalan secara asynchronous.
//2. menghasilkan implisit promise
//3. cara penulisannya sama seperti synchronous function (function biasa).

// implisit promise = fungsinya mengembalikan promise meskipun didalamnya tidak ada kode yg asynchronous.

// Asynchronous Function = sebuah async function dapat memiliki keyword await di dalamnya untuk
// memberhentikan sementara eksekusi fungsinya sambil menunggu promise-nya selesai.

// ========================================== //

// contoh 1 :
function test() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("OK Running");
    }, 2000);
  });
}

const testing = test();
testing.then((response) => console.log(response)); // hasilnya resolve sebab berjalan secara asynchronous

// ============ //
// VERSI BELUM MENGGUNAKAN ASYNC AWAIT
function testPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("OK Boskuhhhh....");
    }, 3000);
  });
}

// const coba = testPromise();
// coba.then((response) => console.log(response));

// VERSI MENGGUNAKAN ASYNC AWAIT
async function testAsync() {
  const coba = await testPromise();
  console.log(coba);
}

testAsync();

// ERROR HANDLING PADA SCRIPT ASYNC AWAIT KITA
function handlePromise() {
  return new Promise((resolve, reject) => {
    let timestamp = 6000;

    setTimeout(() => {
      if (timestamp >= 9000) {
        resolve("test berhasil ges");
      } else {
        reject("test gagal ges");
      }
    }, timestamp);
  });
}

// const handleTest = handlePromise();
// handleTest
//   .then((response) => console.log(response))
//   .catch((response) => console.log(response));

// menggunakan async await pakai blok try untuk resolve dan blok catch untuk catch.
async function cobaAsync() {
  try {
    const coba = await handlePromise();
    console.log(coba);
  } catch (error) {
    console.log(error);
  }
}

cobaAsync();

// ====================================================== //

// Buat 2 function dan Promise makeRequest(location) dan processRequest(response)
// buat if statement location sama dengan google maka resolve "Google says hi"
// buat else statement maka reject "we can only talk to Google"

// processing request
// processRequest jika resolve("extra information + response")

// google says hi (true)
// we can only talk to google

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);

    setTimeout(() => {
      if (location === "Google") {
        resolve("Google says hi");
      } else {
        reject("we can only talk to Google");
      }
    }, 5000);
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing request");
    resolve(`extra information + ${response}`);
  });
}

// makeRequest("Twitter")
//   .then((response) => {
//     console.log("response received");
//     return processRequest(response);
//   })
//   .then((processedRequest) => {
//     console.log(processedRequest);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//================================//
// use Async Await

async function doWork() {
  const res = await makeRequest("Google");
  console.log(res);
  const responses = await processRequest("Google");
  console.log(responses);
}

doWork();

// ======================== //
// Async Await and Error Handling

const Posts = [
  { title: "post one", body: "this body post one" },
  { title: "post two", body: "this body post two" },
];

function getPost() {
  setTimeout(() => {
    let containerPost = "";

    Posts.forEach((post) => {
      containerPost += `<li>${post.body}</li>`;
    });
    document.body.innerHTML = containerPost;
  }, 1000);
}

// getPost();

function createPost(post) {
  return new Promise((resolve, reject) => {
    let isTrue = true;

    setTimeout(() => {
      if (isTrue) {
        resolve(Posts.push(post));
      } else {
        reject("Error : something went wrong");
      }
    }, 3000);
  });
}

// createPost({ title: "post three", body: "this body post three" })
//   .then(getPost)
//   .catch((err) => console.error(err));

async function showPost() {
  try {
    await createPost({
      title: "post three",
      body: "this body post three",
    }).then(getPost);
  } catch (error) {
    console.error(error);
  }
}

// showPost();

async function fetchDataUsers() {
  try {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    let userUI = "";
    data.forEach((item) => {
      userUI += `<li>Nama : ${item.name} == ${item.address.city}</li>`;
    });
    const datas = document.querySelector("#datas");
    datas.innerHTML = userUI;
  } catch (error) {
    console.error(`Error : ${error.message}`);
  }
}

fetchDataUsers();
