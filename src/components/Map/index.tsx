import ReactMapGL, {NavigationControl} from 'react-map-gl'
import { useState } from "react";
import {DeckGL} from "deck.gl";
import {GeoJsonLayer} from "@deck.gl/layers";
import maplibregl from 'maplibre-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {

    const data = require('@/data/data.json')

    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 35.495694,
        longitude: 140.304306,
        zoom: 9
    });

    const layer = new GeoJsonLayer({
        data,
        filled: true,
        stroked: true,
        getLineWidth: 16,
        getLineColor: [255, 255, 255],
        getFillColor: [25, 118, 210, 128]
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
            >
                <NavigationControl />
            </ReactMapGL>
        </DeckGL>
        </>
    );

}
export default Map;