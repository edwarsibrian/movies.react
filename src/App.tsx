import { useEffect, useState } from 'react';
import './App.css'
import MovieList from './features/movies/components/MovieList';
import type Movie from './features/movies/models/movie.model'

export default function App() {

    const [movies, setMovies] = useState<AppState>({});

    useEffect(() => {
        setTimeout(() => {
            const inCinemas: Movie[] = [{
                id: 1,
                title: "Inception",
                posterUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
            }, {
                id: 2,
                title: "The Dark Knight",
                posterUrl: "https://upload.wikimedia.org/wikipedia/sco/8/8a/Dark_Knight.jpg"
            }, {
                id: 3,
                title: "Interstellar",
                posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
            }];

            const comingSoon: Movie[] = [{
                id: 4,
                title: "Dune",
                posterUrl: "https://translate.google.com/website?sl=en&tl=es&hl=es&client=srp&u=https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%25282021_film%2529.jpg"
            }, {
                id: 5,
                title: "No Time to Die",
                posterUrl: "https://upload.wikimedia.org/wikipedia/en/f/fe/No_Time_to_Die_poster.jpg"
            }, {
                id: 6,
                title: "The French Dispatch",
                posterUrl: "https://upload.wikimedia.org/wikipedia/en/7/78/The_French_Dispatch.jpeg"
                }];

            setMovies({ inCinemas, comingSoon });

        }, 1000);
    }, []);

    


    return (
        <>
            <h3>On Cinema</h3>
            <MovieList movies={movies.inCinemas} />

            <h3>Coming Soon</h3>
            <MovieList movies={movies.comingSoon} />
        </>
    );
}

interface AppState {
    inCinemas?: Movie[];
    comingSoon?: Movie[];
}

