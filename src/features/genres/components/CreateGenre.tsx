import { type SubmitHandler } from "react-hook-form";
import type CreateGenreModel from "../models/CreateGenre.model";
import GenresForm from "./GenresForm";
import apiClient from "../../../api/axiosClient";
import { useNavigate } from "react-router";


export default function CreateGenre() {

    const navigate = useNavigate();

	const onSubmit: SubmitHandler<CreateGenreModel> = async (data) => {
		apiClient.post('/genres', data).then(() => navigate('/genres'));
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

