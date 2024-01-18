import { useRef, useEffect, useState } from 'react';
import './osMap.css';
import mapboxgl from 'mapbox-gl';
import { Navbar } from '../navbar/Navbar';

mapboxgl.accessToken = 'pk.eyJ1IjoiZnN0dXJsaWMiLCJhIjoiY2xyaTA5M3pxMDNzcDJscG51YjZwaGk2byJ9.qkTOWLRu5m_V1eZxSnF0UQ';

export function OSMap() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(15.9779806);
  const [lat, setLat] = useState(45.8144389);
  const [zoom, setZoom] = useState(10);
  const [geojsonData, setGeojsonData] = useState([]); // Use state to store geojson data

  // Fetch users and their offers, then set the geojsonData state
  useEffect(() => {
    async function fetchData() {
      const usersResponse = await fetch("http://localhost:8080/users");
      if (!usersResponse.ok) throw new Error('Network response was not ok');
      const users = await usersResponse.json();

      const allGeojson = await Promise.all(users.map(async (user) => {
        const addressResponse = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${user.adresa}.json?access_token=${mapboxgl.accessToken}`);
        if (!addressResponse.ok) throw new Error('Network response was not ok');
        const addressData = await addressResponse.json();

        const offersResponse = await fetch(`http://localhost:8080/offer/users/${user.id}`);
        if (!offersResponse.ok) throw new Error('Network response was not ok');
        const offers = await offersResponse.json();

        const bookDetails = offers.map(offer => {
          const book = offer.knjiga;
          return `
            <div>
              <h4>${book.naziv}</h4>
              <p>Author: ${book.autor}</p>
              <p>Publisher: ${book.izdavac}</p>
              <p>Category: ${book.kategorija}</p>
              <p>Genre: ${book.zanr}</p>
            </div>
          `;
        }).join('');

        return {
          naziv: user.naziv,
          adresa: user.adresa,
          coords: addressData.features[0].center,
          email: user.email,
          telefon: user.telefon,
          ponude: bookDetails
        };
      }));

      setGeojsonData(allGeojson); // Update state with all geojson data
    }

    fetchData().catch(console.error);
  }, []);

  // Initialize map and markers using the geojsonData
  useEffect(() => {
    if (geojsonData.length && !map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
      });

      geojsonData.forEach((feature) => {
        const el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker(el)
          .setLngLat(feature.coords)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(
                `<h3>${feature.naziv}</h3>
                <p>${feature.adresa}</p>
                <p>${feature.email}</p>
                <p>${feature.telefon}</p>
                <h3>Offers:</h4>
                <p>${feature.ponude}</p>`
              )
          )
          .addTo(map.current);
      });

      map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
      });
    }
  }, [geojsonData]);
  
  return (
    <div>
      <Navbar />
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}