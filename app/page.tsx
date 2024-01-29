'use client';
import Image from 'next/image';
import iconArrow from './images/icon-arrow.svg';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { Map as LeafletMap } from 'leaflet';
import { Icon } from 'leaflet';
type UseMap = () => LeafletMap;
export default function Home() {
  interface locationJSON {
    ip: string;
    location: {
      country: string;
      region: string;
      city: string;
      lat: number;
      lng: number;
      postalCode: string;
      timezone: string;
      geonameId: number;
    };
    domains: string[];
    as: {
      asn: number;
      name: string;
      route: string;
      domain: string;
      type: string;
    };
    isp: string;
  }
  // MapUpdater component
  function MapUpdater({ center }: { center: [number, number] }) {
    const map = (useMap as UseMap)();
    useEffect(() => {
      map.panTo(center);
    }, [center, map]);
    return null;
  }
  interface errorJSON {
    code: string;
    messages: string;
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localStorageApiKey = localStorage.getItem('apiKey');
      if (localStorageApiKey) {
        setApiKey(localStorageApiKey);
      }
    }
  }, []);
  enum MenuPhase {
    initial,
    apiSettings,
    apiKey,
  }
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string>('');
  const [menuPhase, setMenuPhase] = useState<MenuPhase>(MenuPhase.initial);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isMockup, setIsMockup] = useState(true);
  const [text, setText] = useState('');
  const [ip, setIp] = useState('');
  const [location, setLocation] = useState<locationJSON | null>(null);
  const [sendRequest, setSendRequest] = useState(false);
  const [mapCenter, setMapCenter] = useState<[number, number]>([34.04915, -118.09462]);

  useEffect(() => {
    if (sendRequest) {
      const fetchData = async () => {
        await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`)
          .then((res) => res.json())
          .then((data) => {
            if ((data as unknown as errorJSON).code) {
              setError((data as unknown as errorJSON).messages);
              return;
            } else {
              setLocation(data as locationJSON);
              setMapCenter([(data as locationJSON).location.lat, (data as locationJSON).location.lng]);
              setIsMenuOpen(false);
            }
          })
          .catch((err) => {
            console.log(err);
            setError((location as unknown as errorJSON).messages);
          });
      };
      void fetchData();
      setSendRequest(false);
    }
  }, [apiKey, ip, isMockup, location, sendRequest]);

  const customIcon = new Icon({
    iconUrl: './icon-location.svg',
    iconSize: [45, 58],
  });

  return !isMenuOpen ? (
    (location ?? isMockup) && (
      <main className="flex min-h-screen flex-col items-center justify-center font-rubik">
        <div className="flex h-[50em] w-full flex-col bg-white">
          <div className="flex h-full w-full flex-col bg-[url('./images/pattern-bg-desktop.png')] bg-no-repeat">
            <div className="mt-[1.6em] flex h-[24.5em] w-full flex-col items-center">
              <h1>IP Address Tracker</h1>
              <form
                id="form"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setIp(text);
                    setSendRequest(true);
                  }
                }}
                className="mt-[1.35em] flex h-[3.65em] w-[34.688em] rounded-[1em] "
              >
                <input
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  value={text}
                  className="h-full w-full rounded-l-[1em] pl-[1.3em] pr-[2.5em] text-[1.15em] tracking-[-0.008em] outline-none"
                  type="text"
                  placeholder="Search for any IP address or domain"
                />
                <button
                  aria-label="search"
                  onClick={() => {
                    setIp(text);
                    setSendRequest(true);
                  }}
                  className="flex h-full w-[4.1em] items-center justify-center rounded-r-[1em] bg-[#000000] pl-[0.1em]"
                >
                  <Image src={iconArrow as string} alt="Search" />
                </button>
              </form>
              <div className="absolute z-10 mt-[10.95em] flex min-h-[10.05em] w-[69.4em] rounded-[1em] bg-white pb-[1em] pl-[2em] ">
                <div className="flex w-[15.3em] flex-col gap-[0.45em] pt-[2.1em]">
                  <h2>IP ADDRESS</h2>
                  <span className="span1">{location ? location.ip : '192.212.174.101'}</span>
                </div>
                <div className="flex items-start gap-[2em]">
                  <div className="mt-[1em] h-[4.7em] w-[1px] self-center bg-[#d3cfcf]"></div>
                  <div className="flex w-[15.35em] flex-col gap-[0.7em] pr-[1em] pt-[2.1em]">
                    <h2>LOCATION</h2>
                    <span className="span1 leading-[1.2em]">
                      {location ? location.location.country + ', ' + location.location.region : 'US, California'}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-[2em]">
                  <div className="mt-[1em] h-[4.7em]  w-[1px] self-center bg-[#d3cfcf]"></div>
                  <div className="flex w-[15.25em] flex-col gap-[0.7em] pr-[1em] pt-[2.1em]">
                    <h2>TIMEZONE</h2>
                    <span className="span1 leading-[1.2em]">
                      {location ? 'UTC ' + location.location.timezone : 'UTC -08:00'}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-[2em]">
                  <div className="mt-[1em] h-[4.7em]  w-[1px] self-center bg-[#d3cfcf]"></div>
                  <div className="flex w-[12em] flex-col gap-[0.7em] pr-[1em] pt-[2.1em]">
                    <h2>ISP</h2>
                    <span className="span1 leading-[1.2em]">
                      {location ? location.isp : 'Southern California Edison'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div id="map" className=" h-full w-full">
              <MapContainer
                center={mapCenter}
                zoom={13}
                scrollWheelZoom={false}
                dragging={false}
                doubleClickZoom={false}
                touchZoom={false}
                zoomControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={customIcon} position={mapCenter}></Marker>
                <MapUpdater center={mapCenter} />
              </MapContainer>
            </div>
          </div>
        </div>
      </main>
    )
  ) : (
    <main className="flex min-h-screen flex-col items-center justify-center font-rubik">
      <div className="flex h-full w-full flex-col">
        <div className="flex h-full w-full flex-col bg-[url('./images/pattern-bg-desktop.png')] bg-no-repeat">
          <div className="mt-[1.6em] flex h-[24.5em] w-full flex-col items-center gap-2">
            <h1>IP Address Tracker</h1>
            {menuPhase === MenuPhase.initial ? (
              <div className="flex flex-col items-center gap-3 text-white">
                <span className="text-[1.6rem] font-[500]">{'Chose Variant:'}</span>
                <div className="flex justify-center gap-5">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMockup(true);
                    }}
                    className="w-44 rounded-md border bg-[#be59ddbd] py-1 outline outline-1 outline-offset-4 transition hover:bg-[#ac26d4]"
                  >
                    <span>{'Mockup (fake)'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setMenuPhase(MenuPhase.apiSettings);
                    }}
                    className="w-44 rounded-md border bg-[#5987ddd8] py-1 outline outline-1 outline-offset-4 transition hover:bg-[#1f65e6]"
                  >
                    <span>{'API Fetch (real)'}</span>
                  </button>
                </div>
              </div>
            ) : menuPhase === MenuPhase.apiSettings ? (
              <div className="flex flex-col items-center gap-3 text-white">
                <span className="text-[1.6rem] font-[500]">{'API Fetch'}</span>
                <div className="flex justify-center gap-5">
                  <button
                    onClick={() => {
                      setMenuPhase(MenuPhase.apiKey);
                      setError(null);
                    }}
                    className="w-44 rounded-md border bg-[#b38c44d3] py-1 outline outline-1 outline-offset-4 transition hover:bg-[#ddaf59]"
                  >
                    <span>{'Change key'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setSendRequest(true);
                    }}
                    className="w-44 rounded-md border bg-[#39aa84c5] py-1 outline outline-1 outline-offset-4 transition hover:bg-[#40c599]"
                  >
                    <span>{'Start'}</span>
                  </button>
                </div>
                <div className="mt-1">
                  {error && (
                    <span className="underline decoration-red-600 decoration-2 underline-offset-[3px]">{error}</span>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1 text-white">
                <span className="text-[1.6rem] font-[500]">{'API Key'}</span>
                <div className="flex justify-center"> </div>
                <form
                  id="key"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setIp(text);
                      setSendRequest(true);
                    }
                  }}
                  className="flex h-[3em] w-[34.688em] rounded-[0.6em] text-black"
                >
                  <input
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                    value={text}
                    className="h-full w-full rounded-l-[0.6em] pl-[1.3em] pr-[2.5em] text-[1.15em] tracking-[-0.008em] outline-none"
                    type="text"
                    placeholder="enter Api Key"
                  />
                  <button
                    aria-label="enter Api Key"
                    onClick={() => {
                      setApiKey(text);
                      localStorage.setItem('apiKey', text);
                      setMenuPhase(MenuPhase.apiSettings);
                      setText('');
                    }}
                    className="flex h-full w-[4.1em] items-center justify-center rounded-r-[0.6em] bg-[#000000] pl-[0.1em]"
                  >
                    <Image src={iconArrow as string} alt="Search" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
