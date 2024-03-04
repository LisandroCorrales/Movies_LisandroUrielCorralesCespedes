import { 
    imprimirPeliculas,
    filtrarPeliculasPorNombre, 
    filtrarPeliculasPorGenero, 
    verifiqueChecked, 
    fnReduce,
    obtenerGenres
} from "./funciones.js"

const $main = document.getElementById("contenedor-main")
const $input = document.getElementById('inputBusqueda')
const $contenedorChecks = document.getElementById('contenedorChecks')




let peliculas = []
const url = "https://moviestack.onrender.com/api/movies"
const init = {
    method: "GET",
    headers: {
        "x-api-key" : "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}

fetch(url, init)
    .then ( (response) => response.json())
    .then ( (datosRespuesta) =>{
        peliculas = datosRespuesta.movies
        console.log(peliculas)

        imprimirPeliculas(peliculas,$main)//aca
        const arrayGenres = obtenerGenres(peliculas) //sin repetidos
        $contenedorChecks.innerHTML = arrayGenres.reduce(fnReduce,"")
    
        $input.addEventListener('input', () => {
            
            const peliculasFiltradasPorNombre = filtrarPeliculasPorNombre( peliculas, $input.value)
            const valueChecked = verifiqueChecked() 
            if (valueChecked == "All"){
                imprimirPeliculas(peliculasFiltradasPorNombre, $main)
            } else {
                const peliculasFiltradasPorGenres = filtrarPeliculasPorGenero(peliculasFiltradasPorNombre, valueChecked)
                imprimirPeliculas(peliculasFiltradasPorGenres, $main)
            }
        })
    
    
        $contenedorChecks.addEventListener( 'input', () => {
            const peliculasFiltradasPorNombre = filtrarPeliculasPorNombre( peliculas, $input.value)
            const valueChecked = verifiqueChecked() 
            if (valueChecked == "All"){
                imprimirPeliculas(peliculasFiltradasPorNombre, $main)
            } else {
                const peliculasFiltradasPorGenres = filtrarPeliculasPorGenero(peliculasFiltradasPorNombre, valueChecked)
                imprimirPeliculas(peliculasFiltradasPorGenres, $main)
            }
    
        })
        
    })
    












