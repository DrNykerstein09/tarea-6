const listaDeCompra = ['Fish', 'eggs', 'Meal', 'Spaghetti', 'lasgne'];
listaDeCompra.push('Aceite de Girasol');
listaDeCompra.pop();

const peliculas = [
    { titulo: 'Mobbie Dick', director: 'John Huston', fecha: 1981 },
    { titulo: 'Pelicula2', director: 'Director2', fecha: 1982},
    { titulo: 'Pelicula3', director: 'Director3', fecha: 1983 }
]
const fil = peliculas.filter( titulo => titulo.fecha > 2000);
console.log(fil)