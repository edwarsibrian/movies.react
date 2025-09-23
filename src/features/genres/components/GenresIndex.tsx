import { useNavigate } from "react-router";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import apiClient from "../../../api/axiosClient";
import type GenreModel from "../models/Genre.model";
import GenericList from "../../../components/GenericList";

export default function GenresIndex() {

    const navigate = useNavigate();

    const [genres, setGenres] = useState<GenreModel[]>();

    useEffect(() => {
        apiClient.get<GenreModel[]>('/genres').then(res => setGenres(res.data));
    }, []);

    return (
        <>
            <h3>Genres</h3>
            <div>
                <Button onClick={() => navigate('/genres/create')}>Create Genre</Button>
            </div>
            <GenericList list={genres}>
                <table className="table table-hover align-middle shadow-sm boder rounded overflow-hidden">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col" className="text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {genres?.map(genre => (
                            <tr key={genre.id}>
                                <td>{genre.name}</td>
                                <td className="text-end">
                                    <Button className="btn btn-sm btn-outline-primary me-2" onClick={() => navigate(`/genres/edit/${genre.id}`)}>
                                        <i className="bi bi-pencil me-1"></i> Edit</Button>
                                    <Button className="btn btn-sm btn-outline-danger" onClick={() => navigate(`/genres/delete/${genre.id}`)}>
                                        <i className="bi bi-trash me-1"></i> Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </GenericList>
        </>
    )
}