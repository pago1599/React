import { useState } from "react";

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getGeoLocation = () => {
    setLoading(true);
    setError(null);
    setLocation(null);

    if (!navigator.geolocation) {
      setError("Not supported");
      setLoading(false);
      return;
    }

    // Success callback
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
      setLoading(false);
    };

    // Error callback
    const error = () => {
      setError("errore");
      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  };

  return { location, error, loading, getGeoLocation };
};

export default useCurrentLocation;
