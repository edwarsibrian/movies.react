import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type CreateActorModel from "../models/CreateActor.model";
import ActorForm from "./ActorForm";
import Loading from "../../../components/Loading";
import type { SubmitHandler } from "react-hook-form";

export default function EditActor() {

    const { id } = useParams<{ id: string }>();

    const [model, setModel] = useState<CreateActorModel | undefined>(undefined);

    const onSubmit: SubmitHandler<CreateActorModel> = async (data) => {
        console.log('Editing actor...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    useEffect(() => {
        const timerId = setTimeout(() => {
            setModel({ actorName: 'Robert Downey Jr. ' + id, birthDate: '1965-04-04' });
        }, 1000);

        return () => clearTimeout(timerId);
    }, [id]);

    return (
        <>
            <h3>Edit Actor</h3>
            {model ? <ActorForm model={model} onSubmit={onSubmit} /> : <Loading />}
        </>
    )
}