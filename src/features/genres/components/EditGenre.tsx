import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type CreateGenreModel from "../models/CreateGenre.model";
import GenresForm from "./GenresForm";
import type { SubmitHandler } from "react-hook-form";
import Loading from "../../../components/Loading";

export default function EditGenre() {

	const { id } = useParams<{ id: string }>();
	const [model, setModel] = useState<CreateGenreModel | undefined>(undefined);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setModel({ genreName: 'Action ' + id });
		}, 1000);

        return () => clearTimeout(timerId);
	}, [id]);

	const onSubmit: SubmitHandler<CreateGenreModel> = async (data) => {
		console.log('Editing genre...');
		await new Promise(resolve => setTimeout(resolve, 2000));
		console.log(data);
	}

	return (
		<>
			<h3>Edit Genre</h3>
			{model ? < GenresForm model={model} onSubmit={onSubmit} /> : <Loading />}
		</>
	)
}