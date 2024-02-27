/*
<article>
    <img src="https://moviestack.onrender.com/static/y5szbv8zju.jpg" alt="" >
    <h2>"The Nun II"</h2>
    <h3>"Confess your sins."</h3>
    <p>"In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil."</p>
</article>
*/



const main = document.getElementById("contenedor-main")

function crearPelicula(movie){
    return `
    <article class="flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-3/12 rounded-lg border border-[#701a75] bg-[#D2CCFF]">
        <img class="w-full rounded-t-lg" src="${movie.image}" alt="" >
        <h2 class="font-bold text-2xl font-serif text-center">${movie.title}</h2>
        <h3 class="italic font-medium px-3">${movie.tagline}</h3>
        <p class="px-3 pb-4 ">${movie.overview}</p>
    </article>
    `;
}

function imprimirPeliculas(listaPeliculas, elemento){
    let template = ""
    for (const movieIterado of listaPeliculas) {
        template += crearPelicula(movieIterado)
    }
    if(listaPeliculas.length == 0){
        template = `<h2 class="font-semibold text-2xl">There are no matching results</h2>`
    }
    elemento.innerHTML = template
}

imprimirPeliculas(movies,main)

/*---------------------Sprint 2--------------------- */
/*
<label> genero
    <input type="checkbox" name="" id="">
 </label>
*/


const $input = document.getElementById('inputBusqueda')
const $contenedorChecks = document.getElementById('contenedorChecks')

/* CREAR CHECKBOX:

- conseguir tags
- quitar repetidos
- crear checks

*/

const generos = movies.map( movie => movie.genres).flat()  //tags

const generosSinRepetidos = [] //array de no repetidos
generos.forEach(genero => {
    if (!generosSinRepetidos.includes(genero)){
        generosSinRepetidos.push(genero)
    }
} )


function crearLista(genero){
    return `<option value=${genero}>
                    ${genero}     
            </option>`
}

const fnReduce = (template, genero) => template + crearLista(genero)

$contenedorChecks.innerHTML = generosSinRepetidos.reduce(fnReduce,"")

$input.addEventListener('input', () => {
    
    const peliculasFiltradasPorNombre = filtrarPeliculasPorNombre( movies, $input.value)
    const valueChecked = verifiqueChecked()
    const peliculasFiltradasPorGenres = filtrarPeliculasPorGenero(peliculasFiltradasPorNombre, valueChecked)
    imprimirPeliculas(peliculasFiltradasPorGenres, main)
} )

//Quedo algo mal xq no filtra por nombre

$contenedorChecks.addEventListener( 'input', () => {
    const peliculasFiltradasPorNombre = filtrarPeliculasPorNombre( movies, $input.value)
    const valueChecked = verifiqueChecked()
    const peliculasFiltradasPorGenres = filtrarPeliculasPorGenero(peliculasFiltradasPorNombre, valueChecked)
    imprimirPeliculas(peliculasFiltradasPorGenres, main)

})




function filtrarPeliculasPorNombre(listaPeliculas, nombre){
    return listaPeliculas.filter (pelicula => pelicula.title.toLowerCase().startsWith(nombre.toLowerCase()))
}

function filtrarPeliculasPorGenero(listaPeliculas, seleccionados){
    if(seleccionados.length == 0) {
        return listaPeliculas
    } else {
        return listaPeliculas.filter( pelicula => seleccionados.some(seleccionado => pelicula.genres.includes (seleccionado)))
    } 
}

function verifiqueChecked() {
    const elementosSeleccionados = [];
    const opcionesSeleccionadas = document.querySelectorAll('option:checked');
    
    opcionesSeleccionadas.forEach(opcion => {
        elementosSeleccionados.push(opcion.value);
    });

    return elementosSeleccionados;
}






/*
- detectar evento
- filtrar por genero (tag)
- mostrar las pelis filtradas
*/

