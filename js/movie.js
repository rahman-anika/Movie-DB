const loadMovies = () => {

    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=1ad3ac55e4f2e5d9901faaa3273c6445&language=en-US&page=1')
        .then(res => res.json())
        .then(data => setMovies(data.results));

}

loadMovies();


const setMovies = (movies) => {
    const first10Movie = movies.slice(0, 10);
    console.log(first10Movie);


    const movieSpinner = document.getElementById('movie-spinner');
    movieSpinner.style.display = 'none';
    // console.log(movies);   //object ashbe jodi only data pass kora hoy and array ashbe jodi data.results pass kora hoy cause results ekhane array.We can not apply for loop in object, can apply in array.


    const movieContainer = document.getElementById('movie-container');

    for (const movie of first10Movie) {
        // console.log(movie);
        const movieBox = document.createElement('div');
        movieBox.classList.add('col-md-3');
        const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

        movieBox.innerHTML = `
            <div class="shadow rounded p-3 m-2">
                <img class="img-fluid" src="${imageUrl}">
                <h3>${movie.title}</h3>
                <p>${movie.overview.slice(0, 200)}</p >
                <button onclick="loadMovieDetails('${movie.id}')" class="btn btn-primary">See Details</button>
            </div >
    `;

        movieContainer.appendChild(movieBox);


    }

}


const loadMovieDetails = (id) => {
    // console.log('button clicked and id is: ', id);
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1ad3ac55e4f2e5d9901faaa3273c6445&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieDetails(data));

}

const setMovieDetails = (movie) => {
    console.log(movie);

    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML = " ";
    const movieBox = document.createElement('div');
    movieBox.innerHTML = `
        <h3>${movie.original_title}</h3>
`;
    movieDetails.appendChild(movieBox);

}


