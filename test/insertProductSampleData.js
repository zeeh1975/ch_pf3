const { productosDAO } = require("../src/daos/productosDAO");

const productosMuestra = [
  {
    nombre: "Vino Cafayate Cabernet Sauvignon",
    descripcion: "Vino Tinto Cabernet Sauvignon Cafayate Reserve Bodega Etchart 750ml",
    codigo: "VINO0001",
    foto: "https://http2.mlstatic.com/D_NQ_NP_984845-MLA43940662040_102020-W.webp",
    precio: 740,
    stock: 100,
  },
  {
    nombre: "Vino Cafayate Malbec",
    descripcion: "Vino Tinto Malbec Cafayate Bodega Etchart 750ml",
    codigo: "VINO0002",
    foto: "https://http2.mlstatic.com/D_NQ_NP_647407-MLA43940685144_102020-W.webp",
    precio: 490,
    stock: 100,
  },
  {
    nombre: "Vino Cafayate Torrontés ",
    descripcion: "Vino Blanco Torrontés Cafayate Bodega Etchart 750ml",
    codigo: "VINO0003",
    foto: "https://http2.mlstatic.com/D_NQ_NP_906258-MLA45296333960_032021-W.webp",
    precio: 550,
    stock: 100,
  },
  {
    nombre: "Vino Cafayate Malbec Reserve",
    descripcion: "Vino Tinto Malbec Cafayate Reserve Bodega Etchart 750ml",
    codigo: "VINO0004",
    foto: "https://http2.mlstatic.com/D_NQ_NP_651020-MLA45296375032_032021-W.webp",
    precio: 740,
    stock: 100,
  },
  {
    nombre: "Vino Unoaked Chardonnay",
    descripcion: "Vino La Linda Chardonnay Unoaked Caja X6 750ml",
    codigo: "VINO0005",
    foto: "https://http2.mlstatic.com/D_NQ_NP_674633-MLA43835156446_102020-W.webp",
    precio: 4890,
    stock: 100,
  },
  {
    nombre: "Vino Lagarde Rose Goes Pink",
    descripcion: "Vino Lagarde Rose Goes Pink Malbec Pinot Noir 750ml Caja X6",
    codigo: "VINO0006",
    foto: "https://http2.mlstatic.com/D_NQ_NP_668617-MLA45259444328_032021-W.webp",
    precio: 5940,
    stock: 100,
  },
  {
    nombre: "Vino Luigi Bosca Malbec",
    descripcion: "Luigi Bosca Malbec Vino 750ml Caja X6 Botellas",
    codigo: "VINO0007",
    foto: "https://http2.mlstatic.com/D_NQ_NP_812359-MLA44091547731_112020-W.webp",
    precio: 10100,
    stock: 100,
  },
  {
    nombre: "Vino Latitud 33 Malbec",
    descripcion: "Vino Tinto Latitud 33 Malbec 750ml Tinto Caja X6",
    codigo: "VINO0008",
    foto: "https://http2.mlstatic.com/D_NQ_NP_657793-MLA44132147006_112020-W.webp",
    precio: 3240,
    stock: 100,
  },
  {
    nombre: "Vino Luigi Bosca Chardonnay",
    descripcion: "Luigi Bosca Chardonnay Vino Blanco 750ml X6 Botellas",
    codigo: "VINO0009",
    foto: "https://http2.mlstatic.com/D_NQ_NP_999928-MLA48284905771_112021-W.webp",
    precio: 8820,
    stock: 100,
  },
  {
    nombre: "Vino Luigi Bosca Malbec",
    descripcion: "Luigi Bosca Malbec Vino 750ml Pack X3 Botellas",
    codigo: "VINO0010",
    foto: "https://http2.mlstatic.com/D_NQ_NP_660229-MLA44091544800_112020-W.webp",
    precio: 5700,
    stock: 100,
  },
];

async function insertProducts() {
  await productosDAO.deleteAll();
  for (let i = 0; i < productosMuestra.length; i++) {
    console.log(await productosDAO.save(productosMuestra[i]));
  }
  console.log(await productosDAO.getAll());
  await productosDAO.disconnect();
}

insertProducts();
