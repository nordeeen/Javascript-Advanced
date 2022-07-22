// http://jsonplaceholder.typicode.com/users

// using ajax
console.log("loading get data ...");
function getData() {
  let request = new XMLHttpRequest();
  const url = "http://jsonplaceholder.typicode.com/users";
  request.open("GET", url);
  request.send();
  request.onload = () => {
    if (request.status == 200) {
      console.log(JSON.parse(request.responseText));
    } else {
      console.log(`error ${request.status} : ${request.statusText}`);
    }
  };
}

setTimeout(() => {
  getData();
}, 4000);

// Using fetch
fetch("http://jsonplaceholder.typicode.com/users/8")
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((error) => {
    console.error(`${error.message}`);
  });

// By Using Async and Await
async function getUsers() {
  try {
    const respon = await fetch("http://jsonplaceholder.typicode.com/users/8");
    const datas = await respon.json();
    const getEmail = datas.email;
    console.log(`ini email : ${getEmail}`);
  } catch (error) {
    console.log(`error get data : ${error}`);
  }
}

getUsers();

// const mahasiswa = [
//   {
//     nama: "dian",
//     nilai: "90",
//   },
//   {
//     nama: "thoriq",
//     nilai: "99",
//   },
//   {
//     nama: "ajeng",
//     nilai: "100",
//   },
//   {
//     nama: "epang",
//     nilai: "89",
//   },
//   {
//     nama: "rahma",
//     nilai: "100",
//   },
// ];

// const getMhs = mahasiswa.map(
//   (item) => `
//   <ul>
//     <li>name : ${item.nama}, value : ${item.nilai}</li>
//   </ul>`
// );

// const showData = document.getElementById("showdata");
// showData.innerHTML = getMhs;

//===========================================================//
// Tangkap Pokemon
// show data name pokemon
// show data img, height, weight, move pokemon
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => {
    if (response.status != 200) {
      console.log(`Oopss Error ...${response.status}`);
      return;
    }

    response.json().then((data) => {
      const pokemons = data.results;
      console.log(data.results);
      pokemons.forEach((poke) => {
        document
          .querySelector("#pokemonlist")
          .insertAdjacentHTML(
            "beforeend",
            `<li onclick='detailData("${poke.url}")'>${poke.name}</li>`
          );
      });
    });
  })
  .catch((err) => console.log(err));

function detailData(url) {
  fetch(url).then((response) => {
    response.json().then((pokemon) => {
      document.querySelector("#detail").innerHTML = " ";
      document.querySelector("#detail").insertAdjacentHTML(
        "beforeend",
        `<img src="${pokemon.sprites.front_default}" alt="pict"/>
          <h2>Nama Pokemon : ${pokemon.name}</h2>
          <h2>Tinggi : ${pokemon.height}</h2>
          <h2>Berat : ${pokemon.weight}</h2>
          <h2>Jurus : ${pokemon.moves[0].move.name}</h2>
        `
      );
    });
  });
}
