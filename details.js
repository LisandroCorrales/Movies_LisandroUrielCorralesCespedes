const $main = document.getElementById('main')
const urlParams =  new URLSearchParams(location.search)
const id = urlParams.get('id')

const peliculaEncontrada = movies.find (pelicula => pelicula.id == id)
console.log(peliculaEncontrada)

$main.innerHTML = crearContenido(peliculaEncontrada)

function crearContenido (pelicula){
    return `
    <section class="flex items-center bg-[#D2CCFF]">
        <div class="py-5 px-8 ">
            <img class="border border-indigo-900" src="${pelicula.image}"> 
        </div>
        <div class="py-5 pl-3">
            <h2 Class="font-bold text-3xl text-fuchsia-900 py-2">${pelicula.title}</h2>
            <h3 class="italic">${pelicula.tagline}</h3>
            <h4 class="font-medium">${pelicula.genres}</h4>
            <p class="mr-8">${pelicula.overview}</p>
        </div>
    </section>
    <section class="flex bg-[#edeaff] p-10 justify-center items-center">
        <div class="p-8">
            <table class="border-collapse border border-indigo-900 ">
                <tr>
                    <td class="p-2 border border-indigo-900 font-medium">Original Language</td>
                    <td class="p-2 border border-indigo-900">${pelicula.original_language}</td>
                </tr>
                <tr>
                    <td class="p-2 border border-indigo-900 font-medium">Realease Date</td>
                    <td class="p-2 border border-indigo-900">${pelicula.release_date}</td>
                </tr>
                <tr>
                    <td class="p-2 border border-indigo-900 font-medium">Runtime</td>
                    <td class="p-2 border border-indigo-900">${pelicula.runtime}</td>
                </tr>
                <tr>
                    <td class="p-2 border border-indigo-900 font-medium">Status</td>
                    <td class="p-2 border border-indigo-900">${pelicula.status}</td>
                </tr>
            </table>
        </div>
        <div class="p-8">
            <table class="border-collapse border border-indigo-900">
                <tr>
                    <td class="p-2 border border-indigo-900 font-medium"> Vote Average</td>
                    <td class="p-2 border border-indigo-900">${pelicula.vote_average}</td>
                </tr>
                <tr>
                    <td class="p-2 border border-indigo-900 font-medium">Budget</td>
                    <td class="p-2 border border-indigo-900"> USD ${pelicula.budget}</td>
                </tr>
                <tr>
                    <td class="p-2 border border-indigo-900 font-medium">Revenue</td>
                    <td class="p-2 border border-indigo-900"> USD ${pelicula.revenue}</td>
                </tr>
            </table>
        </div>
    </section>
    `
}
