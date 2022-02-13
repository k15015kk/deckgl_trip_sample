import useMap from "@/hooks/useMap";

const Map = () => {
    const [mapContainer] = useMap();

    console.log(mapContainer)

    return (
        <>
            <div className="h-full" ref={mapContainer}/>
        </>
    );
}
export default Map;