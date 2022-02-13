import ReactMapGL from 'react-map-gl'
import { useState } from "react";
import {DeckGL} from "deck.gl";
import {GeoJsonLayer} from "@deck.gl/layers";
import maplibregl from 'maplibre-gl';

const Map = () => {

    const data = require('@/data/data.json')

    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 35.681236,
        longitude: 139.767125,
        zoom: 10
    });

    const layer = new GeoJsonLayer({
        data,
        filled: true,
        stroked: true,
        getLineWidth: 10,
        getLineColor: [0, 0, 0],
        getFillColor: [0, 64, 245, 60]
    })

    return (
        <>
        <DeckGL
            width={"100vw"}
            height={"100vh"}
            controller
            layers={[layer]}
            viewState={viewport}
            onViewStateChange={(viewState) => setViewport(viewState.viewState)}
        >
            <ReactMapGL
                mapLib={maplibregl}
                mapStyle={process.env.NEXT_PUBLIC_MAP_URL}
                // mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
            />
        </DeckGL>
        </>
    );
}
export default Map;