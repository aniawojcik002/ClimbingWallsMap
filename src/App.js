import React from "react";
import * as L from "leaflet";

import { MapContainer, TileLayer} from "react-leaflet";
import { Popup, Marker } from "react-leaflet";

import {logo} from './images.js'

import "./App.css";


function App() {
  const BouldPos = new Map();
  BouldPos.set("Cube", [
    1,
    [50.067772, 20.014579],
    [
      [15, 23],
      [7, 23],
      [7, 23],
      [7, 23],
      [7, 23],
      [9, 23],
      [9, 23],
    ],
    "798650096",
    "https://cubeboulder.com",
    logo[0],
    [60, 40]
   
  ]);
  BouldPos.set("Avatar-Sikorki", [
    2,
    [50.061628, 20.016987],
    [
      [7, 23],
      [7, 23],
      [7, 23],
      [7, 23],
      [7, 23],
      [9, 21],
      [9, 21],
    ],
    "733434332",
    "https://myavatar.pl/avatar-centrala-ruchu",
    logo[2],
    [60, 40]
  ]);
  BouldPos.set("Forteca-Ludowa", [
    3,
    [50.03878, 19.963542],
    [
      [10, 23],
      [10, 23],
      [10, 23],
      [10, 23],
      [10, 23],
      [10, 23],
      [10, 23],
    ],
    "512631621",
    "http://cwf.pl/",
    logo[3],
    [50, 50],
  ]);
  BouldPos.set("Forteca-Racławicka", [
    4,
    [50.081027, 19.920963],
    [
      [10, 23],
      [10, 23],
      [10, 23],
      [10, 23],
      [10, 23],
      [10, 22],
      [10, 22],
    ],
    "509228998",
    "http://cwf.pl/",
    logo[3],
    [50, 50],
  ]);
  BouldPos.set("Mood", [
    5,
    [50.049413, 19.969659],
    [
      [15, 23],
      [7, 23],
      [7, 23],
      [7, 23],
      [7, 23],
      [9, 23],
      [9, 23],
    ],
    "780134474",
    "https://hellomood.pl/",
    logo[1],
    [50, 40],
  ]);
  BouldPos.set("Bronx", [
    6,
    [50.104669, 19.882294],
    [
      [14, 23],
      [7, 23],
      [10, 23],
      [7, 23],
      [7, 23],
      [10, 23],
      [10, 22],
    ],
    "122222243",
    "http://bronx.com.pl/",
    logo[4],
    [40, 40]
  ]);


  function createIcon(url, size) {
    return new L.Icon ({
      iconUrl: url,
      iconSize: size,
    });
  };

  const iterator = BouldPos.keys();
  // console.log(iterator);

  const markersXY = [...BouldPos.values()];
)
  return (
    <MapContainer
      center={{ lat: 50.06611, lng: 19.95207 }}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {markersXY.map((item) => {
        return (
          <Marker key={item[0]} position={item[1]} icon={createIcon(item[5], item[6])}>
            <Popup> 
            <h3>{iterator.next().value}</h3>
            <div>
              <p>Godziny otwarcia</p>
              <p>Poniedziałek: {item[2][0][0]}-{item[2][0][1]}</p>
              <p>Wtorek: {item[2][1][0]}-{item[2][1][1]}</p>
              <p>Środa: {item[2][2][0]}-{item[2][2][1]}</p>
              <p>Czwartek: {item[2][3][0]}-{item[2][3][1]}</p>
              <p>Piątek: {item[2][4][0]}-{item[2][4][1]}</p>
              <p>Sobota: {item[2][5][0]}-{item[2][5][1]}</p>
              <p>Niedziela: {item[2][6][0]}-{item[2][6][1]}</p>
            </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default App;
