'use client';
import React, { useRef } from 'react';
import { useScript } from '../../hook/useScript';
import { useLocation } from '../../hook/useLocation';
import { useMapWithGeocoder } from '../../hook/useMapWithGeocoder';
import { useUserLocationMap } from '../../hook/useUserLocationMap';

interface Props {}

const Map: React.FC<Props> = ({}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapWrapperRef = useRef<HTMLDivElement>(null);
  const { userLocation } = useLocation();

  const { map } = useMapWithGeocoder(
    undefined,
    false,
    undefined,
    false,
    mapContainerRef
  );
  //   useUserLocationMap(map, userLocation);

  //   if (scriptError || geocoderScriptError) return <p>Map Error!</p>;
  //   if (scriptLoading || geoCoderScriptLoading) return <div>map loading..</div>;

  return (
    <>
      <div ref={mapWrapperRef} className='w-full h-[calc(100vh-216.5px)]'>
        <div ref={mapContainerRef} className='w-full h-full'></div>
      </div>
    </>
  );
};

export default Map;
