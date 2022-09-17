import { useState } from "react";
import Link from "next/link";
import Map, { Marker, NavigationControl, Popup } from "react-map-gl";
import Image from "next/image";
import { IMylocationData } from "./types";
import "mapbox-gl/dist/mapbox-gl.css";
import { Button } from "./Button";

type DataProps = {
  result: IMylocationData[];
};
const Mapbox: React.FC<DataProps> = ({ result }) => {
  const MAP_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const [popupInfo, setPopupInfo] = useState<IMylocationData | null>(null);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [track, setTrack] = useState(0);

  const handleClick = (data: any) => {
    console.log(data);
    setLng(data.location[1]);
    setLat(data.location[0]);
  };

  const initialViewState = {
    zoom: 12,
  };

  const handlePrev = () => {
    setTrack(track - 1);
    setLat(result ? result[track - 1]?.location[0] : 0);
    setLng(result ? result[track - 1]?.location[1] : 0);
  };

  const handleNext = () => {
    setTrack(track + 1);
    setLat(result ? result[track]?.location[0] : 0);
    setLng(result ? result[track]?.location[1] : 0);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <h1 className="text-lg mt-2 mb-2 ml-2">
        <Link
          href={{
            pathname: `/`,
          }}
        >
          <span className="text-amber-300 mx-2 font-bold hover:text-amber-500 cursor-pointer">
            Home
          </span>
        </Link>
        |
        <span className="text-amber-500 mx-2 font-bold">
          {result ? result[0]?.category : ""}
        </span>
      </h1>
      <section className="md:w-full md:h-80 w-100 h-80 relative z-1">
        <Map
          mapboxAccessToken={MAP_TOKEN}
          initialViewState={initialViewState}
          latitude={lat ? lat : 36.55945606396816}
          longitude={lng ? lng : 132.94146081217664}
          mapStyle="mapbox://styles/kimute/cl84ahs3s001215p0a21j1hmf"
        >
          {result &&
            result.map((data, idx) => (
              <>
                <Marker
                  key={idx}
                  latitude={data ? data.location[0] : 36.55945606396816}
                  longitude={data ? data.location[1] : 132.94146081217664}
                  style={{ position: "absolute", top: "0" }}
                  onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    setPopupInfo(data);
                  }}
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
          {popupInfo && (
            <Popup
              key={popupInfo.id}
              longitude={Number(popupInfo.location[1])}
              latitude={Number(popupInfo.location[0])}
              className="w-96 h-80 px-3"
              onClose={() => setPopupInfo(null)}
            >
              <div className="flex flex-col">
                <span className="mb-2 ">
                  {popupInfo.title} | {popupInfo.category}
                </span>
                <Image
                  className="mt-2"
                  src={popupInfo.imgSrc}
                  width="100%"
                  height="100%"
                  alt="mark"
                />
              </div>
            </Popup>
          )}
          <NavigationControl></NavigationControl>
        </Map>
      </section>
      <section className="md:grid md:grid-cols-3 md:gap-2 md:mt-2 md:border-black">
        <div className="flex justify-center gap-20 mt-2 md:hidden">
          <div onClick={handlePrev}>
            <Button
              size="sm"
              disabled={track === 1 ? true : false}
              actionText="< prev"
            />
          </div>
          <div onClick={handleNext}>
            <Button
              size="sm"
              disabled={track > Number(result?.length) - 1 ? true : false}
              actionText="next >"
            />
          </div>
        </div>
        {result &&
          result.map((data, idx) => (
            <div
              key={`track-btn-${idx}`}
              className="flex flex-col md:flex-col md:justify-between md:items-center md:gap-2 mt-2"
            >
              <h2
                key={`title-${idx}`}
                className="mt-2 mx-2 md:mt-4 text-blue-500 md:text-3xl"
              >
                {data?.title}
              </h2>
              <div
                key={`details-${idx}`}
                className="text-sm mx-2 text-slate-600 py-3 md:break-word md:w-40 md:text-center"
              >
                {data?.details}
              </div>
              <div
                key={`button-${idx}`}
                className="mx-2 hidden md:block"
                onClick={() => handleClick(data)}
              >
                <Button size="" disabled={false} actionText="Fly to" />
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Mapbox;
