import { useRef, useEffect, useState } from 'react';
import './osMap.css';
import mapboxgl from 'mapbox-gl';
import { Navbar } from '../navbar/Navbar';

mapboxgl.accessToken = 'pk.eyJ1IjoiZnN0dXJsaWMiLCJhIjoiY2xyaTA5M3pxMDNzcDJscG51YjZwaGk2byJ9.qkTOWLRu5m_V1eZxSnF0UQ';

export default function OSMap() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(15.9779806);
  const [lat, setLat] = useState(45.8144389);
  const [zoom, setZoom] = useState(13);
  const markers = useRef([]); // Use useRef to store markers
  const geojson = useRef([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        geojson.current = [];
        data.forEach(function (user) {
          fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${user.adresa}.json?access_token=${mapboxgl.accessToken}`)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data2 => {
              let geojsonelem = {
                naziv: user.naziv,
                adresa: user.adresa,
                coords: data2.features[0].center,
                email: user.email,
                telefon: user.telefon
              }
              geojson.current.push(geojsonelem);
            })
            .catch(error => {
              console.error('Error:', error);
            });
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {

    if (geojson.current.length === 0 || map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    // Create markers and store them in the markers ref
    markers.current = geojson.current.map((feature) => {
      const el = document.createElement('div');
      el.className = 'marker';
      return new mapboxgl.Marker(el).setLngLat(feature.coords)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h3>${feature.naziv}</h3>
              <p>${feature.adresa}</p>
              <p>${feature.email}</p>
              <p>${feature.telefon}</p>`
            )
        )
        .addTo(map.current);
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));

      // Update each marker's location without adding new ones
      markers.current.forEach((marker, index) => {
        marker.setLngLat(geojson.current[index].coords);
      });
    });
  }, [geojson, lat, lng, zoom]); // This effect runs whenever geojson changes

  return (
    <div>
      <Navbar />
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}