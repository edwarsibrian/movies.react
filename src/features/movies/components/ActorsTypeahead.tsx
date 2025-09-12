import { Typeahead } from "react-bootstrap-typeahead";
import type { Option } from "react-bootstrap-typeahead/types/types";
import type MovieActorModel from "../models/MovieActor.model";
import { useState } from "react";

export default function ActorsTypeahead(props: ActorsTypeaheadProps) {

    const actors: MovieActorModel[] = [
        { id: 1, name: 'Christian Bale', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Christian_Bale-7837.jpg' },
        { id: 2, name: 'Anne Hathaway', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Anne_Hathaway_at_The_Apprentice_in_NYC_03_%28cropped2%29.jpg' },
        { id: 3, name: 'Scarlett Johansson', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Scarlett_Johansson-8588.jpg' }
    ];

    const selection: MovieActorModel[] = [];

    const [elementDrawing, setElementDrawing] = useState<MovieActorModel | undefined>(undefined);

    const dragStartHandle = (actor: MovieActorModel) => {
        setElementDrawing(actor);
    }

    const dragOverHandle = (actor: MovieActorModel) => {

        if (!elementDrawing || actor.id === elementDrawing.id) {
            return;
        }

        const actors = [...props.actors];
        const indexFrom = actors.findIndex(x => x.id === elementDrawing.id);
        const indexTo = actors.findIndex(x => x.id === actor.id);

        if (indexFrom !== -1 && indexTo !== -1) {
            [actors[indexFrom], actors[indexTo]] = [actors[indexTo], actors[indexFrom]];
            props.onAdd(actors);
        }
    }

    return (
        <>
            <label>Actors</label>
            <Typeahead id="typeahead" onChange={(actors: Option[]) => {
                const selectedActor = actors[0] as MovieActorModel;
                if (props.actors.findIndex(x => x.id === selectedActor.id) === -1) {
                    props.onAdd([...props.actors, selectedActor]);
                }
            }}
                options={actors}
                labelKey={(option: Option) => {
                    const actor = option as MovieActorModel;
                    return actor.name
                }}
                filterBy={['name']}
                placeholder="Actor name..."
                minLength={2}
                flip={true}
                selected={selection}
                renderMenuItemChildren={(option: Option) => {
                    const actor = option as MovieActorModel;
                    return (
                        <>
                            <img alt="actor picture" src={actor.picture}
                                style={{
                                    height: '64px',
                                    width: '64px',
                                    marginRight: '10px'
                                }} />
                            <span>{actor.name}</span>
                        </>
                    )
                }}
            />

            <ul className="list-group">
                {props.actors.map(actor => (
                    <li
                        draggable={true}
                        onDragStart={() => dragStartHandle(actor)}
                        onDragOver={() => dragOverHandle(actor)}
                        className="list-group-item d-flex align-items-center" key={actor.id}>
                        <div style={{ width: '70px' }}>
                            <img style={{ height: '60px' }} src={actor.picture} alt="picture" />
                        </div>
                        <div style={{ width: '150px', marginLeft: '1rem' }}>
                            {actor.name}
                        </div>
                        <div className="flex-grow-1 mx-3">
                            <input className="form-control" placeholder="Character" type="text" value={actor.character}
                                onChange={c => props.onChangeCharacter(actor.id, c.currentTarget.value)} />
                        </div>
                        <span role="button" className="badge text-bg-secondary"
                            onClick={() => props.onRemove(actor)}>X</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

interface ActorsTypeaheadProps {
    actors: MovieActorModel[];
    onAdd(actors: MovieActorModel[]): void;
    onChangeCharacter(id: number, character: string): void;
    onRemove(actor: MovieActorModel): void;
}