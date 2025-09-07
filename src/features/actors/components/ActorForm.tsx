import {type SubmitHandler, useForm } from "react-hook-form";
import type CreateActorModel from "../models/CreateActor.model";
import Button from "../../../components/Button";
import { NavLink } from "react-router";

export default function ActorForm(props: ActorFormProps) {

    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm<CreateActorModel>({
        defaultValues: props.model ?? { actorName: '' }
    });

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
        <div className="form-group">
            <label htmlFor="actorName">Actor Name</label>
            <input autoComplete="off" type="text" className="form-control" id="actorName" placeholder="Enter actor name" {...register('actorName', { required: 'The Actor Name is required' })} />
                {errors.actorName && <span className="text-danger">{errors.actorName.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="birthDate">Birth Date</label>
                <input autoComplete="off" type="date" className="form-control" id="birthDate" {...register('birthDate', { required: 'The Birth Date is required' })} />
                {errors.birthDate && <span className="text-danger">{errors.birthDate.message}</span>}
            </div>

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