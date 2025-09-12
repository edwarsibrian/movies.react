import type { SubmitHandler } from "react-hook-form";
import MovieForm from "./MovieForm";
import type CreateMovieModel from "../models/CreateMovie.model";
import type GenreModel from "../../genres/models/Genre.model";
import type CinemaModel from "../../cinemas/models/Cinema.model";

export default function CreateMovie() {

    const onSubmit: SubmitHandler<CreateMovieModel> = async (data) => {
        console.log('Creating movie...');
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(data);
    }

    const genresSelected: GenreModel[] = [];
    const genresNotSelected: GenreModel[] = [
        { id: 1, name: 'Accion' },
        { id: 2, name: 'Drama' },
        { id: 3, name: 'Comedy' }];

    const cinemasSelected: CinemaModel[] = [];
    const cinemasNotSelected: CinemaModel[] = [
        { id: 1, name: 'Metrocentro', latitude: 0, longitude: 0 },
        { id: 2, name: 'La Gran Via', latitude: 0, longitude: 0 }
    ]

    return (
        <>
            <h3>Create Movie</h3>
            <MovieForm
                genresSelected={genresSelected}
                genresNotSelected={genresNotSelected}
                cinemasSelected={cinemasSelected}
                cinemasNotSelected={cinemasNotSelected}
                actorsSelected={[]}
                onSubmit={onSubmit} />
        </>
    )
}