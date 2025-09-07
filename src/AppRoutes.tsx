import { Route, Routes } from "react-router";
import LandingPage from "./features/home/components/LandingPage";
import GenresIndex from "./features/genres/components/GenresIndex";
import CreateGenres from "./features/genres/components/CreateGenre";
import EditGenres from "./features/genres/components/EditGenre";
import ActorsIndex from "./features/actors/components/ActorsIndex";
import CreateActor from "./features/actors/components/CreateActor";
import EditActor from "./features/actors/components/EditActor";
import CinemasIndex from "./features/cinemas/components/CinemasIndex";
import CreateCinema from "./features/cinemas/components/CreateCinema";
import EditCinema from "./features/cinemas/components/EditCinema";
import CreateMovie from "./features/movies/components/CreateMovie";
import EditMovie from "./features/movies/components/EditMovie";
import NotFoundRoute from "./components/NotFoundRoute";
import MoviesFilter from "./features/movies/components/MoviesFilter";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />

            <Route path='/genres' element={<GenresIndex />} />
            <Route path='/genres/create' element={<CreateGenres />} />
            <Route path='/genres/edit/:id' element={<EditGenres />} />

            <Route path='/actors' element={<ActorsIndex />} />
            <Route path='/actors/create' element={<CreateActor />} />
            <Route path='/actors/edit/:id' element={<EditActor />} />

            <Route path='/cinemas' element={<CinemasIndex />} />
            <Route path='/cinemas/create' element={<CreateCinema />} />
            <Route path='/cinemas/edit/:id' element={<EditCinema />} />

            <Route path='/movies/create' element={<CreateMovie />} />
            <Route path='/movies/edit/:id' element={<EditMovie />} />

            <Route path='/movies/filter' element={<MoviesFilter />} />

            <Route path='*' element={<NotFoundRoute/>} />
        </Routes>
    )
}