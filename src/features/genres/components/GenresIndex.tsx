import { useNavigate } from "react-router";
import Button from "../../../components/Button";
import { useEffect } from "react";
import apiClient from "../../../api/axiosClient";

export default function GenresIndex() {

    const navigate = useNavigate();

    useEffect(() => {
        apiClient.get('/genres').then(res => console.log(res.data));
    }, []);

    return (
        <>
            <h3>Genres</h3>
            <Button onClick={() => navigate('/genres/create')}>Create Genre</Button>
        </>
    )
}