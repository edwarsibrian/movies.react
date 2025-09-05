import { useParams } from "react-router";

export default function EditActor() {
    const { id } = useParams<{ id: string }>();

    return (
        <>
            <h3>Edit Actor</h3>
            <p>Editing actor with ID: {id}</p>
            {/* Here you would typically include a form to edit the actor's details */}
            {/* For example, you might use a form component and pass the actor's*/}
        </>
    )
}