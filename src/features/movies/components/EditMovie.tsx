import { useParams } from "react-router";

export default function EditMovie() {
    const { id } = useParams<{ id: string }>();

    return (
        <>
            <h3>Edit Movie</h3>
            <p>Editing movie with ID: {id}</p>
            {/* Here you would typically include a form to edit the movie's details */}
            {/* For example, you might use a form component and pass the movie's*/}
        </>
    )
}