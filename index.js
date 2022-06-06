const listaDeCompra = ['Fish', 'eggs', 'Meal', 'Spaghetti', 'lasgne'];
listaDeCompra.push('Aceite de Girasol');
listaDeCompra.pop();

const peliculas = [
    { titulo: 'Mobbie Dick', director: 'John Huston', fecha: new Date(2018, 9 , 24)  },
    { titulo: 'Pelicula2', director: 'Director2', fecha: new Date(2015, 2 , 30) },
    { titulo: 'Pelicula3', director: 'Director3', fecha: new Date(1989, 11, 26)  }
]
const fil = peliculas.filter( titulo => titulo.fecha < 2000, 1, 1 );
console.log(fil);

const directores = peliculas.map(dir => dir.director);
console.log(directores);

const titulos = peliculas.map(tit => tit.titulo);
console.log(titulos);

const concat = directores.concat(titulos);
console.log(concat)

const concat2 = [...directores, ...titulos];
console.log(concat)
