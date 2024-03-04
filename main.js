import { 
    imprimirPeliculas,
    filtrarPeliculasPorNombre, 
    filtrarPeliculasPorGenero, 
    verifiqueChecked, 
    fnReduce,
    obtenerGenres
} from "./funciones.js"

const $main = document.getElementById("contenedor-main")



imprimirPeliculas(movies,$main)

/*---------------------Sprint 2--------------------- */


const $input = document.getElementById('inputBusqueda')
const $contenedorChecks = document.getElementById('contenedorChecks')
const arrayGenres = obtenerGenres(movies) //sin repetidos

$contenedorChecks.innerHTML = arrayGenres.reduce(fnReduce,"")

$input.addEventListener('input', () => {
    
    const peliculasFiltradasPorNombre = filtrarPeliculasPorNombre( movies, $input.value)
    const valueChecked = verifiqueChecked() //agregar if
    const peliculasFiltradasPorGenres = filtrarPeliculasPorGenero(peliculasFiltradasPorNombre, valueChecked)
    imprimirPeliculas(peliculasFiltradasPorGenres, $main)
})


$contenedorChecks.addEventListener( 'input', () => {
    const peliculasFiltradasPorNombre = filtrarPeliculasPorNombre( movies, $input.value)
    const valueChecked = verifiqueChecked()
    const peliculasFiltradasPorGenres = filtrarPeliculasPorGenero(peliculasFiltradasPorNombre, valueChecked)
    imprimirPeliculas(peliculasFiltradasPorGenres, $main)

})









/*
- detectar evento
- filtrar por genero (tag)
- mostrar las pelis filtradas
*/

