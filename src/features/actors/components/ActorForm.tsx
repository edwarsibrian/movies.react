import {type SubmitHandler, useForm } from "react-hook-form";
import type CreateActorModel from "../models/CreateActor.model";
import Button from "../../../components/Button";
import { NavLink } from "react-router";
import * as yup from "yup";
import { DateNotInFuture, FirstLetterUppercase } from "../../../Validations/Validations";
import { yupResolver } from "@hookform/resolvers/yup";
import ImageSelect from "../../../components/ImageSelect";

export default function ActorForm(props: ActorFormProps) {

    const { register, handleSubmit, setValue, formState: { errors, isValid, isSubmitting } } = useForm<CreateActorModel>({
        resolver: yupResolver(validationSchema),
        mode: 'onChange',
        defaultValues: props.model ?? { actorName: '' }
    });

    const actualImageURL: string | undefined = props.model?.picture ? props.model.picture as string : undefined;

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
        <div className="form-group">
            <label htmlFor="actorName">Actor Name</label>
            <input autoComplete="off" type="text" className="form-control" id="actorName" placeholder="Enter actor name" {...register('actorName')} />
                {errors.actorName && <span className="text-danger">{errors.actorName.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="birthDate">Birth Date</label>
                <input autoComplete="off" type="date" className="form-control" id="birthDate" {...register('birthDate')} />
                {errors.birthDate && <span className="text-danger">{errors.birthDate.message}</span>}
            </div>

            <ImageSelect label="Picture" imageURL={actualImageURL} selectedImage={picture => setValue('picture', picture)} />

            <div className="mt-2">
                <Button type="submit" disabled={!isValid || isSubmitting}>{isSubmitting ? 'Sending...' : 'Send'}</Button>
                <NavLink className="btn btn-secondary ms-2" to="/actors">Cancel</NavLink>
            </div>
        </form>
    )
}

interface ActorFormProps {
    model?: CreateActorModel;
    onSubmit: SubmitHandler<CreateActorModel>;
}

const validationSchema = yup.object({
    actorName: yup.string().required('The Actor Name is required').test(FirstLetterUppercase()),
    birthDate: yup.string().required('The Birth Date is required').test(DateNotInFuture())
})