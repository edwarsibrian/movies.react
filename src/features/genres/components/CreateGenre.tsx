import { type SubmitHandler } from "react-hook-form";
import type CreateGenreModel from "../models/CreateGenre.model";
import GenresForm from "./GenresForm";
import apiClient from "../../../api/axiosClient";
import { useNavigate } from "react-router";
import { useState } from "react";
import { type AxiosError } from "axios";
import { gettingErrorsApi } from "../../../Utils/gettingErrorsApi";

export default function CreateGenre() {

	const navigate = useNavigate();

    const [errorList, setErrorList] = useState<string[]>([]);

	const onSubmit: SubmitHandler<CreateGenreModel> = async (data) => {
		try {
			await apiClient.post('/genres', data);
			navigate('/genres');
		} catch (error) {
			const errors = gettingErrorsApi(error as AxiosError);
            setErrorList(errors);
		}
	}

	return (
		<>
			<h3>Create Genre</h3>
			<GenresForm errors={errorList} onSubmit={onSubmit} />
		</>
	)
}

//interface FormType {
//	genreName: string;
//}