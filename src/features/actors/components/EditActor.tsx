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
            setModel({ actorName: 'Liv Tyler ' + id, birthDate: '1977-07-01', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Liv_Tyler_%282016%29_%28cropped%29.jpg/800px-Liv_Tyler_%282016%29_%28cropped%29.jpg' });
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