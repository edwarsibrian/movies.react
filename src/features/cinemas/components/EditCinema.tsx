import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type CreateCinemaModel from "../models/CreateCinema.model";
import CinemaForm from "./CinemaForm";
import type { SubmitHandler } from "react-hook-form";
import Loading from "../../../components/Loading";

export default function EditCinema() {

    const { id } = useParams<{ id: string }>();

    const [model, setModel] = useState<CreateCinemaModel | undefined>(undefined);

    const onSubmit: SubmitHandler<CreateCinemaModel> = async (data) => {
        console.log('Editing cinema...');
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(data);
    }

    useEffect(() => {
        setTimeout(() => {
            setModel({ name: 'Metrocentro', latitude: 13.706080767651002, longitude: -89.21174168586732 });
        }, 1000);
    }, [id]);

    return (
        <>
            <h3>Edit Cinema</h3>
            {model ? <CinemaForm model={model} onSubmit={onSubmit} /> : <Loading />}
        </>
    )
}