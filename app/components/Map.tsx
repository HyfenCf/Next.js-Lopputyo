"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapRef = useRef(null); // Kartan kontti
  const mapInstance = useRef<L.Map | null>(null); // Viittaus kartan instanssiin

  useEffect(() => {
    // Varmistetaan, että kartta alustetaan vain kerran
    if (!mapInstance.current && mapRef.current) {
      // Alustetaan kartta
      mapInstance.current = L.map(mapRef.current).setView(
        [60.387363, 25.6530059],
        12
      );

      // Lisätään kartan kerros
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mapInstance.current);

      // Lisätään merkki kartalle
      L.marker([60.387363, 25.6530059])
        .addTo(mapInstance.current)
        .bindPopup("Hevosenkengän katu")
        .openPopup();
    }
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default Map;
