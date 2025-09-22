import { useForm, type SubmitHandler } from "react-hook-form";
import type CreateGenreModel from "../models/CreateGenre.model";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink } from "react-router";
import { FirstLetterUppercase } from "../../../Validations/Validations";
import Button from "../../../components/Button";
import ShowErrorsApi from "../../../components/ShowErrorsApi";

export default function GenresForm(props: GenresFormProps) {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting } } = useForm<CreateGenreModel>({
            resolver: yupResolver(validationSchema),
            mode: 'onChange',
            defaultValues: props.model ?? { genreName: '' }
        });

    return (
        <>
            <ShowErrorsApi errors={props.errors ?? []} />
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div className="form-group">
                    <label htmlFor="genreName">Genre Name</label>
                    <input autoComplete="off" type="text" className="form-control" id="genreName" placeholder="Enter genre name" {...register('genreName')} />
                    {errors.genreName && <span className="text-danger">{errors.genreName.message}</span>}
                </div>
                <div className="mt-2">
                    <Button type="submit" disabled={!isValid || isSubmitting}>{isSubmitting ? 'Sending...' : 'Send'}</Button>
                    <NavLink to="/genres" className="btn btn-secondary ms-2">Cancel</NavLink>
                </div>
            </form>
        </>
    )
}

interface GenresFormProps {
    model?: CreateGenreModel;
    onSubmit: SubmitHandler<CreateGenreModel>;
    errors?: string[];
}

const validationSchema = yup.object({
    genreName: yup.string().required('The Genre Name is required').test(FirstLetterUppercase())
})