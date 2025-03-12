import useCurrentLocation from "./hooks/useCurrentLocation";

const GeoLocation = () => {
  const { location, error, loading, getGeoLocation } = useCurrentLocation();

  return (
    <div>
      <button onClick={getGeoLocation} disabled={loading}>
        {loading ? "Localizzazione..." : "Cerca la mia posizione"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {location && (
        <div className="flex flex-col border-2 border-gray-200 rounded-lg gap-2 p-2">
          <p>Latitudine: {location.latitude}°</p>
          <p>Longitudine: {location.longitude}°</p>
          <a
            href={`https://www.openstreetmap.org/#map=18/${location.latitude}/${location.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cerca
          </a>
        </div>
      )}
    </div>
  );
};

export default GeoLocation;
