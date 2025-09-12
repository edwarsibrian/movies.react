import { useForm, type SubmitHandler } from "react-hook-form";
import type CreateMovieModel from "../models/CreateMovie.model";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import ImageSelect from "../../../components/ImageSelect";
import Button from "../../../components/Button";
import { NavLink } from "react-router";
import MultipleSelector from "../../../components/MultipleSelector/MultipleSelector";
import type GenreModel from "../../genres/models/Genre.model";
import type MultipleSelectorModel from "../../../components/MultipleSelector/MultipleSelector.model";
import { useState } from "react";
import type CinemaModel from "../../cinemas/models/Cinema.model";
import ActorsTypeahead from "./ActorsTypeahead";
import type MovieActorModel from "../models/MovieActor.model";

export default function MovieForm(props: MovieFormProps) {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid, isSubmitting }
    } = useForm<CreateMovieModel>({
        resolver: yupResolver(validationSchema),
        mode: 'onChange',
        defaultValues: props.model ?? { title: '' }
    })

    const actualImageURL: string | undefined = props.model?.poster ? props.model.poster as string : undefined;

    const customMap = (customArray: { id: number, name: string }[]): MultipleSelectorModel[] => {
        return customArray.map(value => {
            return { key: value.id, description: value.name }
        })
    }

    const [genresSelected, setGenresSelected] = useState(customMap(props.genresSelected));
    const [genresNotSelected, setGenresNotSelected] = useState(customMap(props.genresNotSelected));

    const [cinemasSelected, setCinemasSelected] = useState(customMap(props.cinemasSelected));
    const [cinemasNotSelected, setCinemasNotSelected] = useState(customMap(props.cinemasNotSelected));

    const [actorsSelected, setActorsSelected] = useState(props.actorsSelected);

    const onSubmit: SubmitHandler<CreateMovieModel> = (data) => {
        data.genresId = genresSelected.map(x => x.key);
        data.cinemasId = cinemasSelected.map(x => x.key);
        data.actors = actorsSelected;

        props.onSubmit(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" autoComplete="off" className="form-control" placeholder="Enter movie title" {...register('title')} />
                    {errors.title && <span className="text-danter">{errors.title.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="launchDate">Launch Date</label>
                    <input type="date" id="launchDate" autoComplete="off" className="form-control" placeholder="Enter launch date" {...register('launchDate')} />
                    {errors.launchDate && <span className="text-danter">{errors.launchDate.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="trailer">Trailer (Youtube)</label>
                    <input type="text" id="trailer" autoComplete="off" className="form-control" placeholder="Enter trailer" {...register('trailer')} />
                </div>

                <ImageSelect label="Poster" imageURL={actualImageURL} selectedImage={poster => {
                    setValue('poster', poster);
                }} />

                <div className="form-group">
                    <ActorsTypeahead actors={actorsSelected}
                        onAdd={actors => {
                            setActorsSelected(actors);
                        }}
                        onRemove={actor => {
                            const actors = actorsSelected.filter(x => x !== actor);
                            setActorsSelected(actors);
                        }}
                        onChangeCharacter={(id, character) => {
                            const index = actorsSelected.findIndex(i => i.id === id);

                            const actors = [...actorsSelected];
                            actors[index].character = character;
                            setActorsSelected(actors);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label>Genres:</label>
                    <MultipleSelector selected={genresSelected} notSelected={genresNotSelected}
                        onChange={(selected, notSelected) => {
                            setGenresSelected(selected);
                            setGenresNotSelected(notSelected);
                        }} />
                </div>

                <div className="form-group">
                    <label>Cinemas:</label>
                    <MultipleSelector selected={cinemasSelected} notSelected={cinemasNotSelected}
                        onChange={(selected, notSelected) => {
                            setCinemasSelected(selected);
                            setCinemasNotSelected(notSelected);
                        }} />
                </div>

                <div className="mt-2">
                    <Button type="submit" disabled={!isValid || isSubmitting}>{isSubmitting ? 'Sending...' : 'Send'}</Button>
                    <NavLink to="/" className="btn btn-secondaty ms-2">Cancel</NavLink>
                </div>
            </form>
        </>
    )
}

interface MovieFormProps{
    model?: CreateMovieModel;
    onSubmit: SubmitHandler<CreateMovieModel>;
    genresSelected: GenreModel[];
    genresNotSelected: GenreModel[];
    cinemasSelected: CinemaModel[];
    cinemasNotSelected: CinemaModel[];
    actorsSelected: MovieActorModel[];
}

const validationSchema=yup.object({
    title: yup.string().required('The title is required'),
    launchDate: yup.string().required('The launch date is requered')
});