import Map, { Marker, NavigationControl } from "react-map-gl";
import Image from "next/image";
import { IMylocationData } from "./types";
import React from "react";

type DataProps = {
  datas: IMylocationData[];
};

const NavArea: React.FC<DataProps> = ({ datas }) => {
  const MAP_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const initialViewState = {
    zoom: 0.5,
  };

  return (
    <div className=" md:w-full md:h-80 w-100 h-80 relative z-1 overflow-hidden">
      <Map
        mapboxAccessToken={MAP_TOKEN}
        initialViewState={initialViewState}
        latitude={30}
        longitude={127}
        mapStyle="mapbox://styles/kimute/cl84ahs3s001215p0a21j1hmf"
      >
        {datas &&
          datas.map((data: any, idx: any) => (
            <>
              <Marker
                key={idx}
                latitude={data ? data.location[0] : 0}
                longitude={data ? data.location[1] : 0}
                style={{ position: "absolute", top: "0" }}
              >
                <Image
                  src="/location-dot-solid.svg"
                  width="30px"
                  height="30px"
                  alt="mark"
                />
              </Marker>
            </>
          ))}
        <NavigationControl></NavigationControl>
      </Map>
    </div>
  );
};

export default NavArea;
