import { useParams } from "react-router";

export default function EditCinema() {
    const { id } = useParams<{ id: string }>();

    return (
        <>
            <h3>Edit Cinema</h3>
            <p>Editing cinema with ID: {id}</p>
            {/* Here you would typically include a form to edit the cinema's details */}
            {/* For example, you might use a form component and pass the cinema's ID to fetch its current data */}
        </>
    )
}