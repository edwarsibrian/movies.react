import { useNavigate } from "react-router";
import Button from "../../../components/Button";

export default function CinemasIndex() {
    const navigate = useNavigate();

    return (
        <>
            <h3>Cinemas</h3>
            <Button onClick={() => navigate('/cinemas/create')}>Create Cinema</Button>
        </>
    )
}