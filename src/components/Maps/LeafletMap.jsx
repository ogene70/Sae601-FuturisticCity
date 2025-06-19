import { useEffect } from "react";
import L from "leaflet"; 
import 'leaflet/dist/leaflet.css';

export default function LeafMap(){


      useEffect(() => {
    const map = L.map("map").setView([45.750000,4.850000], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

    return(
              <div id="map" style={{ height: "400px", width: "100%", marginBottom: "1rem" }}></div>
    )
}