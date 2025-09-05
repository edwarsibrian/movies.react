import { useParams } from "react-router";

export default function EditGenre() {
	const { id } = useParams<{ id: string }>();

	return (
		<>
			<h3>Edit Genre</h3>
			<p>Editing genre with ID: {id}</p>
			{/* Here you would typically include a form to edit the genre's details */}
			{/* For example, you might use a form component and pass the genre's*/}
		</>
	)
}