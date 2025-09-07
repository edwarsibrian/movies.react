import { useForm, type SubmitHandler } from "react-hook-form"
import Button from "../../../components/Button"
import type GenreModel from "../../genres/models/Genre.model"

export default function MoviesFilter() {

    const initialValues: FormType = {
        title: '',
        genreId: 0,
        upcomingReleases: false,
        inCinemas: false
    };

    const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormType>({
        defaultValues: initialValues
    });

    const genres: GenreModel[] = [{ id: 1, name: 'Action' }, { id: 2, name: 'Comedy' }, { id: 3, name: 'Drama' }]

    const onSubmit: SubmitHandler<FormType> = async (data) => {
        console.log('Filtering movies...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    return (
        <>
            <h3>Movies Filter</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                    <input id="title" placeholder="Movie Title" autoComplete="off" className="form-control" {...register("title")} />
                </div>
                <div className="col-12">
                    <select className="form-select" {...register("genreId")}>
                        <option value="0">-- Select a genre --</option>
                        {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                    </select>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="upcomingReleases" {...register("upcomingReleases")} />
                        <label className="form-check-label" htmlFor="upcomingReleases">Upcoming Releases</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inCinemas" {...register("inCinemas")} />
                        <label className="form-check-label" htmlFor="inCinemas">In Cinemas</label>
                    </div>
                </div>
                <div className="col-12">
                    <Button disabled={isSubmitting} type="submit">{isSubmitting ? 'Filtering...' : 'Filter'}</Button>
                    <Button onClick={() => reset()} className="btn btn-danger ms-2">Clear</Button>
                </div>
            </form>
        </>
    )
}

interface FormType {
    title: string;
    genreId: number;
    upcomingReleases: boolean;
    inCinemas: boolean;
}
