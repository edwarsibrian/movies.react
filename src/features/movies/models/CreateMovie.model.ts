import type MovieActorModel from "./MovieActor.model";

export default interface CreateMovieModel{
    title: string;
    launchDate: string;
    trailer?: string;
    poster?: File | string;
    genresId?: number[];
    cinemasId?: number[];
    actors?: MovieActorModel[];
}