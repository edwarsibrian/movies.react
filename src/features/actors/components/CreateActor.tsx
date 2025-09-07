import type { SubmitHandler } from "react-hook-form";
import type CreateActorModel from "../models/CreateActor.model";
import ActorForm from "./ActorForm";

export default function CreateActor() {

    const onSubmit: SubmitHandler<CreateActorModel> = async (data) => {
        console.log('Creating actor...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    return (
        <>
            <h3>Create Actor</h3>
            <ActorForm onSubmit={onSubmit} />
        </>
    )
}