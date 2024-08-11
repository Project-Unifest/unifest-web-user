'use client';
import React, { useRef } from 'react';
import { useLocation } from '../../hook/useLocation';
import { useMapWithGeocoder } from '../../hook/useMapWithGeocoder';
import { useUserLocationMap } from '../../hook/useUserLocationMap';
import NowLocationIcon from '@/shared/assets/icon/now_location.svg';

interface Props {
  isPopularBooth: boolean;
  mapContainerRef: React.RefObject<HTMLDivElement>;
  mapWrapperRef: React.RefObject<HTMLDivElement>;
  changeMapToCenter: () => void;
  plusZoom: () => void;
  minusZoom: () => void;
}

const Map: React.FC<Props> = ({
  isPopularBooth,
  mapContainerRef,
  mapWrapperRef,
  changeMapToCenter,
  plusZoom,
  minusZoom,
}) => {
  //   if (scriptError || geocoderScriptError) return <p>Map Error!</p>;
  //   if (scriptLoading || geoCoderScriptLoading) return <div>map loading..</div>;

  return (
    <>
      <div ref={mapWrapperRef} className='w-full h-[calc(100vh-216.5px)]'>
        <div ref={mapContainerRef} className='w-full h-full'></div>
        {!isPopularBooth && (
          <div className='absolute bottom bottom-[20px] flex flex-col items-center right-[20px] gap-[6px]'>
            <div className='w-[42px] h-[81px] px-[7.5px] rounded-full flex flex-col justify-center items-center bg-white'>
              <button
                onClick={plusZoom}
                className='w-full h-[40px] border-b border-b-[#BABABF] text-[35px] font-semibold text-[#131316] flex justify-center items-center cursor-pointer '
              >
                +
              </button>
              <button
                onClick={minusZoom}
                className='w-full h-[40px] text-[35px] font-semibold text-[#131316] text-center flex justify-center items-center cursor-pointer'
              >
                -
              </button>
            </div>
            <button
              className='w-[42px] h-[42px] flex rounded-full justify-center items-center bg-white cursor-pointer z-20'
              onClick={changeMapToCenter}
            >
              <NowLocationIcon />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Map;
