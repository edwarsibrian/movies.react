import GenericList from "../../../components/GenericList";
import type Movie from "../models/movie.model";
import IndividualMovie from "./IndividualMovie";
import styles from './MovieList.module.css';

export default function MovieList(props: MovieListProps) {

    return (

        <GenericList<Movie> list={props.movies}>
            <div className={styles.div}>
                {props.movies?.map(movie => <IndividualMovie key={movie.id} movie={movie} />)}
            </div>
        </GenericList>
    )
}

interface MovieListProps {
    movies?: Movie[];
}