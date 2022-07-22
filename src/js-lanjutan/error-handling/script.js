// Error Handling adalah suatu metode untuk menangani error.
// 1. try = kode yang akan di eksekusi.
// 2. catch = jika ada error maka akan masuk ke block catch ini.
// 3. throw = custom error (optional)
// 4. finally = block kode yang akan di jalankan setelah try catch selesai (optional).
// jika block try menemukan error/throw maka akan berhenti. dan dilanjutkan ke proses catch.

// Error Handling : Promise
// 1. then()
// 2. catch()

// Error Handling : Async Await
// 1. try
// 2. catch()

// ============ //
const sayHello = () => {
  setTimeout(() => {
    console.log("Hello World");
  }, 1000);
};

try {
  sayHello1(); // misalkan typo syntax
} catch (err) {
  console.log("name error :", err.name);
  console.log("error message :", err.message);
} finally {
  console.log("ini block finally ...");
}

//=========================================//

const sumNumber = (x, y) => x + y;

try {
  let result = sumNumber(1, 3);

  if (result > 8) {
    throw {
      name: "berhasil",
      message: "hasil lebih besar daripada 8",
    };
  } else if (result < 6) {
    throw {
      name: "gagal",
      message: "hasil lebih kecil daripada 6",
    };
  }

  console.log("hasil :", result);
} catch (error) {
  console.log("error name :", error.name);
  console.log("error message :", error.message);
}

// =========================== //
