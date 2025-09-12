import { useForm, type SubmitHandler } from "react-hook-form";
import type CreateCinemaModel from "../models/CreateCinema.model";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FirstLetterUppercase } from "../../../Validations/Validations";
import Button from "../../../components/Button";
import { NavLink } from "react-router";
import Map from "../../../components/Map/Map";
import type CoordinateModel from "../../../components/Map/Coordinate.model";


export default function CinemaForm(props: CinemaFormProps) {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid, isSubmitting } } = useForm<CreateCinemaModel>({
            resolver: yupResolver(validationShema),
            mode: 'onChange',
            defaultValues: props.model ?? { name: '' }
        })

    function coordinatesTransform(): CoordinateModel[] | undefined {
        if (props.model) {
            const response: CoordinateModel = {
                lat: props.model.latitude,
                lng: props.model.longitude
            }

            return [response];
        }
        return undefined;
    }

    return (
        <>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" autoComplete="off" {...register('name')} />
                    {errors.name && <span className="text-danger">{errors.name.message}</span>}
                </div>

                <div className="mt-4">
                    <Map coordinates={coordinatesTransform()} selectedPlace={coordinate => {
                        setValue('latitude', coordinate.lat, { shouldValidate: true });
                        setValue('longitude', coordinate.lng, { shouldValidate: true });
                    }} />
                </div>

                <div className="mt-2">
                    <Button type="submit" disabled={!isValid || isSubmitting}>{isSubmitting ? 'Sending...' : 'Send'}</Button>
                    <NavLink to="/cinemas" className="btn btn-secondary ms-2">Cancel</NavLink>
                </div>
            </form>
        </>
    )
}

interface CinemaFormProps {
    model?: CreateCinemaModel;
    onSubmit: SubmitHandler<CreateCinemaModel>;
}

const validationShema = yup.object({
    name: yup.string().required('The name is required').test(FirstLetterUppercase()),
    latitude: yup.number().required(),
    longitude: yup.number().required()
})