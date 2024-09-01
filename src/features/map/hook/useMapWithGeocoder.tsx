import { useEffect, useState } from 'react';

export const useMapWithGeocoder = (
  scriptError: ErrorEvent | undefined,
  scriptLoading: boolean,
  geocoderScriptError: ErrorEvent | undefined,
  geoCoderScriptLoading: boolean,
  mapContainerRef: React.RefObject<HTMLDivElement>,
  mapWrapperRef: React.RefObject<HTMLDivElement>
) => {
  const [map, setMap] = useState<naver.maps.Map | undefined>();

  const hideMap = () => {
    if (map) {
      map.setSize(
        new naver.maps.Size(
          mapWrapperRef.current?.getBoundingClientRect().width || 0,
          0
        )
      );
    }
  };
  const showMap = () => {
    if (map) {
      map.setSize(
        new naver.maps.Size(
          mapWrapperRef.current?.getBoundingClientRect().width || 0,
          mapWrapperRef.current?.getBoundingClientRect().height || 0
        )
      );
    }
  };

  useEffect(() => {
    if (
      !scriptError &&
      !scriptLoading &&
      !geocoderScriptError &&
      !geoCoderScriptLoading &&
      mapContainerRef.current
    ) {
      const defaultCenter: naver.maps.LatLng = new naver.maps.LatLng(
        37.3595704,
        127.105399
      );
      setMap(
        new naver.maps.Map(mapContainerRef.current, {
          center: defaultCenter,
          zoom: 16,
          size: new naver.maps.Size(
            mapWrapperRef.current?.getBoundingClientRect().width || 0,
            0
          ),
        })
      );
    } else {
      console.log('안뜨다가');
    }
  }, [
    scriptError,
    scriptLoading,
    mapContainerRef,
    geoCoderScriptLoading,
    geocoderScriptError,
  ]);

  return { map, hideMap, showMap };
};
