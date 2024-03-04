export function crearPelicula(movie){
    return `
    <article class="flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-3/12 rounded-lg border border-[#701a75] bg-[#D2CCFF]">
        <img class="w-full rounded-t-lg" src=" https://moviestack.onrender.com/static/${movie.image}" alt="" >
        <h2 class="font-bold text-2xl font-serif text-center">${movie.title}</h2>
        <h3 class="italic font-medium px-3">${movie.tagline}</h3>
        <p class="px-3 pb-4 ">${movie.overview}</p>
        <a class="flex justify-end p-2 font-medium text-indigo-800 underline" href="./details.html?id=${movie.id}">See more</a>
    </article>
    `;
}

export function imprimirPeliculas(listaPeliculas, elemento){
    let template = ""
    for (const movieIterado of listaPeliculas) {
        template += crearPelicula(movieIterado)
    }
    if(listaPeliculas.length == 0){
        template = `<h2 class="font-semibold text-2xl">There are no matching results</h2>`
    }
    elemento.innerHTML = template
}

export function crearLista(genero){
    return `<option value="${genero}">
                    ${genero}     
            </option>`
}


export function filtrarPeliculasPorNombre(listaPeliculas, nombre){
    return listaPeliculas.filter (pelicula => pelicula.title.toLowerCase().startsWith(nombre.toLowerCase()))
}

export function filtrarPeliculasPorGenero(listaPeliculas, seleccionados){
    if(seleccionados.length == 0) {
        return listaPeliculas
    } else {
        return listaPeliculas.filter( pelicula => seleccionados.some(seleccionado => pelicula.genres.includes (seleccionado)))
    } 
}

export function verifiqueChecked() {
    const elementosSeleccionados = [];
    const opcionesSeleccionadas = document.querySelectorAll('option:checked');
    
    opcionesSeleccionadas.forEach(opcion => {
        elementosSeleccionados.push(opcion.value);
    });

    return elementosSeleccionados;
}
export const fnReduce = (template, genero) => template + crearLista(genero)

export function obtenerGenres(movies){
    const generos = movies.map( movie => movie.genres).flat()  
    const setGenres = new Set(generos);
    const generosSinRepetidos = (Array.from(setGenres)).sort();
    generosSinRepetidos.unshift('All');

    return generosSinRepetidos
}