import { useNavigate } from "react-router";
import Button from "../../../components/Button";

export default function ActorsIndex() {
    const navigate = useNavigate();

    return (
        <>
            <h3>Actors</h3>
            <Button onClick={() => navigate('/actors/create')}>Create Actor</Button>
        </>
    )
}