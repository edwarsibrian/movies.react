import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type CreateMovieModel from "../models/CreateMovie.model";
import MovieForm from "./MovieForm";
import type { SubmitHandler } from "react-hook-form";
import Loading from "../../../components/Loading";
import type GenreModel from "../../genres/models/Genre.model";
import type CinemaModel from "../../cinemas/models/Cinema.model";
import type MovieActorModel from "../models/MovieActor.model";

export default function EditMovie() {

    const { id } = useParams<{ id: string }>();
    const [model, setModel] = useState<CreateMovieModel | undefined>(undefined);

    const onSubmit: SubmitHandler<CreateMovieModel> = async (data) => {
        console.log('Editing movie...');
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(data);
    }

    const genresSelected: GenreModel[] = [{ id: 2, name: 'Drama' }];
    const genresNotSelected: GenreModel[] = [
        { id: 1, name: 'Accion' },
        { id: 3, name: 'Comedy' }];

    const cinemasSelected: CinemaModel[] = [{ id: 2, name: 'La Gran Via', latitude: 0, longitude: 0 }];
    const cinemasNotSelected: CinemaModel[] = [{ id: 1, name: 'Metrocentro', latitude: 0, longitude: 0 }];

    const movieActorsSelected: MovieActorModel[] = [{ id: 2, name: 'Anne Hathaway', character: 'Catwoman', picture: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Anne_Hathaway_at_The_Apprentice_in_NYC_03_%28cropped2%29.jpg' }]

    useEffect(() => {
        setTimeout(() => {
            setModel({ title: 'Kimetsu no Yaiba – The Movie: Infinity Castle ' + id, launchDate: '2025-09-11', trailer: 'test', poster: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Kimetsu_No_Yaiba_Mugen_Jyo-hen_theatrical_poster.jpg' })
        }, 500);
    }, [id]);

    return (
        <>
            <h3>Edit Movie</h3>
            {model ? <MovieForm
                genresSelected={genresSelected}
                genresNotSelected={genresNotSelected}
                cinemasSelected={cinemasSelected}
                cinemasNotSelected={cinemasNotSelected}
                actorsSelected={movieActorsSelected}
                model={model} onSubmit={onSubmit} /> : <Loading />}
        </>
    )
}