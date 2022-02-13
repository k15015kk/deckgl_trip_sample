import maplibregl from 'maplibre-gl';
import {useEffect, useRef} from 'react';

const useMap = () => {
    let map: maplibregl.Map;

    const mapContainer = useRef<HTMLDivElement | null>(null);

    useEffect (() => {

        if (!mapContainer.current) {
            return;
        }

        console.log(process.env.NEXT_PUBLIC_MAP_URL)

        map = new maplibregl.Map({
            container: mapContainer.current,
            style: process.env.NEXT_PUBLIC_MAP_URL || '',
            center: [139.77, 35.67],
            zoom: 11,
            bearing: 0,
            pitch: 0
        });

    },[])

    return [mapContainer]
};

export default useMap;