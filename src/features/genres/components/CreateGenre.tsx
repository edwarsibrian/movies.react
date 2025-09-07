import { type SubmitHandler } from "react-hook-form";
import type CreateGenreModel from "../models/CreateGenre.model";
import GenresForm from "./GenresForm";


export default function CreateGenre() {

	const onSubmit: SubmitHandler<CreateGenreModel> = async (data) => {
        console.log('Creating genre...');
		await new Promise(resolve => setTimeout(resolve, 2000));
		console.log(data);
	}

	return (
		<>
			<h3>Create Genre</h3>
            <GenresForm onSubmit={onSubmit} />
		</>
	)
}

//interface FormType {
//	genreName: string;
//}

