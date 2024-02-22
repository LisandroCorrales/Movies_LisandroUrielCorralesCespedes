/*
<article>
    <img src="https://moviestack.onrender.com/static/y5szbv8zju.jpg" alt="" >
    <h2>"The Nun II"</h2>
    <h3>"Confess your sins."</h3>
    <p>"In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil."</p>
</article>
*/

console.log(movies[0])

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
    elemento.innerHTML = template
}

imprimirPeliculas(movies,main)



