import type Movie from "../models/movie.model";
import styles from './IndividualMovie.module.css';


export default function IndividualMovie(props: IndividualMovieProps) {

    const constructedUrl = () => `/movies/${props.movie.id}`;

    return (
        <div className={styles.div}>
            <a href={constructedUrl()}>
                <img src={props.movie.posterUrl} />
            </a>
            <p>
                <a href={constructedUrl()}>{props.movie.title}</a>
            </p>
        </div>
    );
}

interface IndividualMovieProps {
    movie: Movie;
}

