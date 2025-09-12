import { MapContainer, Marker, TileLayer, useMapEvent, Popup } from "react-leaflet";
import type CoordinateModel from "./Coordinate.model";
import { useState } from "react";

export default function Map(props: MapProps) {

    const [coordinates, setCoordinates] = useState<CoordinateModel[] | undefined>(props.coordinates);
    return (
        <MapContainer
            center={[13.701305816269826, -89.22444373155558]}
            zoom={14} scrollWheelZoom={true} style={{ height: '500px' }} >
            <TileLayer attribution='Movies React' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <MapClick setPoint={coordinate => {
                setCoordinates([coordinate]);
                if (props.selectedPlace) {
                    props.selectedPlace(coordinate);
                }
            }} />

            {coordinates?.map(coordinate =>
                <Marker key={coordinate.lat + coordinate.lng} position={[coordinate.lat, coordinate.lng]}>
                    {coordinate.message ? <Popup>{coordinate.message}</Popup> : undefined}
                </Marker>
            )}
        </MapContainer>
    )
}

function MapClick(props: MapClickProps) {

    useMapEvent('click', e => {
        props.setPoint({ lat: e.latlng.lat, lng: e.latlng.lng })
    })

    return null;
}

interface MapClickProps {
    setPoint: (coordinate: CoordinateModel) => void;
}

interface MapProps {
    selectedPlace?: (coordinate: CoordinateModel) => void;
    coordinates?: CoordinateModel[];
}