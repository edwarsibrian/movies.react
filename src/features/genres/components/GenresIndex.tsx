import { useNavigate } from "react-router";
import Button from "../../../components/Button";

export default function GenresIndex() {
    const navigate = useNavigate();

    return (
        <>
            <h3>Genres</h3>
            <Button onClick={() => navigate('/genres/create')}>Create Genre</Button>
        </>
    )
}