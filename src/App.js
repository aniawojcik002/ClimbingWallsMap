import React from "react";
import { useState, useEffect } from "react";
import * as L from "leaflet";

import { MapContainer, TileLayer } from "react-leaflet";
import { Popup, Marker } from "react-leaflet";

import { logo, popupPhoto } from "./images.js";

import { addressIcon, phoneIcon } from "./images.js";

import "./App.css";
import Modal from "./Modal.jsx";
import Header from "./Header.jsx";

function App() {
  //data of climbing walls in Cracow -> hash map
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
    "798 650 096",
    "https://cubeboulder.com",
    logo[0],
    [60, 40],
    popupPhoto[0],
    "Centralna 41A, 31-586 Kraków",
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
    "733 434 332",
    "https://myavatar.pl/avatar-centrala-ruchu",
    logo[2],
    [60, 40],
    popupPhoto[2],
    "Sikorki 21A, 31-589 Kraków",
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
    "512 631 621",
    "http://cwf.pl/",
    logo[3],
    [50, 50],
    popupPhoto[3],
    "Ludowa 6, 30-544 Kraków",
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
    "509 228 998",
    "http://cwf.pl/",
    logo[3],
    [50, 50],
    popupPhoto[3],
    "Racławicka 60, 30-017 Kraków",
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
    "780 134 474",
    "https://hellomood.pl/",
    logo[1],
    [50, 40],
    popupPhoto[1],
    "Klimeckiego 14B, 30-706 Kraków",
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
    "12 222 22 43",
    "http://bronx.com.pl/",
    logo[4],
    [40, 40],
    popupPhoto[4],
    "Ojcowska 166A, 31-344 Kraków",
  ]);

  //Geolocation
  // ----------------------------------------------------

  const [coordsUser, setCoordsUser] = useState([51, 20]);
  function locateMarker() {
    let status = "";
    status = "Error";
    function success(position) {
      setCoordsUser([position.coords.latitude, position.coords.longitude]);
      // console.log("success");
    }

    function error() {
      status = "Error";
      console.log(status);
    }

    if (!navigator.geolocation) {
      console.log(`Can't find your position!`);
    } else {
      status = "Locating...";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  useEffect(() => {
    locateMarker();
  }, []);

  //variables for markers
  const markersXY = [...BouldPos.values()];
  const iterator = BouldPos.keys();

  //states for markers
  const [openImage, setOpenImage] = useState(false);
  const [urlImage, setUrlImage] = useState(null);

  //function which create icon for popup marker
  function createIcon(url, size) {
    return new L.Icon({
      iconUrl: url,
      iconSize: size,
    });
  }

  //function which automates creating photo for each popup
  function createPopupPhoto(url) {
    return (
      <img
        onClick={() => {
          setOpenImage(true);
          setUrlImage(url);
        }}
        src={url}
        alt="Climbing Wall"
        className="pointer w100"
      />
    );
  }

  return (
    <>
      <Header>Header</Header>
      <MapContainer
        center={{ lat: 50.06611, lng: 19.95207 }}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* map function which creates marker for every climbing wall */}
        {markersXY.map((item) => {
          return (
            <div>
              <Marker
                key={item[0]}
                position={item[1]}
                icon={createIcon(item[5], item[6])}
              >
                <Popup className="popup">
                  <h3>{iterator.next().value}</h3>
                  <div className="popupWrapper">
                    <div className="popupText">
                      <p>
                        {" "}
                        <b>Godziny otwarcia</b>
                      </p>

                      <p>
                        Poniedziałek:{" "}
                        <b>
                          {item[2][0][0]}-{item[2][0][1]}
                        </b>
                      </p>
                      <p>
                        Wtorek:
                        <b>
                          {" "}
                          {item[2][1][0]}-{item[2][1][1]}
                        </b>
                      </p>
                      <p>
                        Środa:{" "}
                        <b>
                          {" "}
                          {item[2][2][0]}-{item[2][2][1]}
                        </b>
                      </p>
                      <p>
                        Czwartek:{" "}
                        <b>
                          {item[2][3][0]}-{item[2][3][1]}
                        </b>
                      </p>
                      <p>
                        Piątek:{" "}
                        <b>
                          {" "}
                          {item[2][4][0]}-{item[2][4][1]}
                        </b>
                      </p>
                      <p>
                        Sobota:{" "}
                        <b>
                          {item[2][5][0]}-{item[2][5][1]}
                        </b>
                      </p>
                      <p>
                        Niedziela:{" "}
                        <b>
                          {" "}
                          {item[2][6][0]}-{item[2][6][1]}
                        </b>
                      </p>

                      <p className="flex-ac-jc">
                        <img
                          className="addressIcon"
                          src={addressIcon}
                          alt="Address icon"
                        />
                        <span>{item[8]}</span>
                      </p>
                      <p className="flex-ac">
                        <img
                          className="phoneIcon"
                          src={phoneIcon}
                          alt="Phone icon"
                        />
                        <span>{item[3]}</span>
                      </p>
                    </div>
                    <div className="popupImage">
                      {createPopupPhoto(item[7])}
                    </div>
                  </div>
                </Popup>
              </Marker>
              {/* {userPosition()} */}
            </div>
          );
        })}
        <Modal
          open={openImage}
          onClose={() => {
            setOpenImage(false);
          }}
          url={urlImage}
        />
        <Marker key={`marker-1`} position={coordsUser}></Marker>
        {/* {userLocationRef !== 'null' && <Marker  key={`marker-1`} position={userLocationRef}>
        <Popup>lalala</Popup>
      </Marker>} */}
      </MapContainer>
    </>
  );
}

export default App;
