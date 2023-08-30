const movie = [
  {
    name: "legomovie",
    ano: 2014,
    img: "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_.jpg",
  },
  {
    name: "terminator2",
    ano: 1991,
    img: "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    name: "metegol",
    ano: 2013,
    img: "https://media.a24.com/p/eb14870c8dbb60b8912bfe40d2f8f268/adjuntos/296/imagenes/008/555/0008555645/1200x675/smart/metegol-netflixpng.png",
  },
  {
    name: "cars",
    ano: 2006,
    img: "https://m.media-amazon.com/images/M/MV5BMzY1MjI1NjkwMl5BMl5BanBnXkFtZTcwMzQ0MTQyMw@@._V1_.jpg,",
  },
  {
    name: "cars 3",
    ano: 2017,
    img: "https://es.web.img2.acsta.net/pictures/17/06/09/13/42/187933.jpg",
  },
  {
    name: "hombrearana",
    ano: 2002,
    img: "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg",
  },
  {
    name: "Dragon Ball Super: Super Hero",
    ano: 2022,
    img: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/98ea4207e23a2ea3e3af39ad641d8800.jpe",
  },
  {
    name: "Crepusculo",
    ano: 2008,
    img: "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2020/05/04/5fa91af7b3bdb.r_d.496-279-0.jpeg",
  },
];
function peliculas() {
  const elemento = document.getElementById("contenedor");
  movie.map((item) => {
    const img = document.createElement("img");
    const nombre = document.createElement("h1");
    const ano = document.createElement("p");
    const listelement = document.createElement("li");

    nombre.textContent = item.name;
    img.src = item.img;
    ano.textContent = `fecha de Estreno ${item.ano}`;

    listelement.appendChild(img);
    listelement.appendChild(nombre);
    listelement.appendChild(ano);

    elemento.appendChild(listelement);
  });
}

function unload() {
  generateitemsHTML();
}

function generateitemsHTML() {
  const itemscontainer = document.querySelector("");
}
