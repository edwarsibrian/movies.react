import type { SubmitHandler } from "react-hook-form";
import CinemaForm from "./CinemaForm";
import type CreateCinemaModel from "../models/CreateCinema.model";

export default function CreateCinema() {

    const onSubmit: SubmitHandler<CreateCinemaModel> = async (data) => {
        console.log('Creating cinema...');
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(data);
    }

    return (
        <>
            <h3>Create Cinema</h3>
            <CinemaForm onSubmit={onSubmit }/>
        </>
    )
}