'use client';
import { useEffect, useState } from 'react';

type Location = {
  lat: number; // 위도
  lng: number; // 경도
};

export const useUserLocationMap = (
  map: naver.maps.Map | undefined,
  userLocation: Location | undefined,
  isSetCenter = false
) => {
  const [userLocMarker, setUserLocMarker] = useState<
    naver.maps.Marker | undefined
  >();

  const changeMapToCenter = () => {
    if (userLocation && map) {
      map.setCenter(new naver.maps.LatLng(userLocation.lat, userLocation.lng));
    }
  };
  const changeMapToLocation = (lat: number, lng: number) => {
    if (userLocation && map) {
      map.setCenter(new naver.maps.LatLng(lat, lng));
    }
  };
  const plusZoom = () => {
    if (map && map.getZoom() < map.getMaxZoom()) {
      map.setZoom(map.getZoom() + 1);
    }
  };
  const minusZoom = () => {
    if (map && map.getZoom() > map.getMinZoom()) {
      map.setZoom(map.getZoom() - 1);
    }
  };

  useEffect(() => {
    if (userLocation && map) {
      if (isSetCenter) {
        map.setCenter(
          new naver.maps.LatLng(userLocation.lat, userLocation.lng)
        );
      }
      if (!userLocMarker) {
        setUserLocMarker(
          new naver.maps.Marker({
            position: new naver.maps.LatLng(userLocation.lat, userLocation.lng),
            map: map,
            icon: 'location.svg',
          })
        );
      }
    }
  }, [userLocation, map, userLocMarker, isSetCenter]);

  return {
    userLocMarker,
    changeMapToCenter,
    plusZoom,
    minusZoom,
    changeMapToLocation,
  };
};
