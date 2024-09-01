'use client';
import { Booth } from '@/shared/store/types/response';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useBoothMarkerInMap = (
  map: naver.maps.Map | undefined,
  filteredBoothDataInMap: Booth[]
) => {
  const [boothLocMarkerArr, setBoothLocMarkerArr] = useState<
    naver.maps.Marker[]
  >([]);

  const router = useRouter();

  useEffect(() => {
    if (map && filteredBoothDataInMap.length > 0) {
      if (boothLocMarkerArr.length > 0) {
        boothLocMarkerArr.forEach((val) => {
          val.setMap(null);
        });
      }
      setBoothLocMarkerArr(
        filteredBoothDataInMap.map((dt) => {
          let imgSrc: string = '';
          switch (dt.category) {
            case 'BAR':
              imgSrc = 'drink_location.svg';
              break;
            case 'FOOD':
              imgSrc = 'food_location.svg';
              break;
            case 'EVENT':
              imgSrc = 'event_location.svg';
              break;
            case 'NORMAL':
              imgSrc = 'general_location.svg';
              break;
            case 'MEDICAL':
              imgSrc = 'infimary_location.svg';
              break;
            case 'TOILET':
              imgSrc = 'toilet_location.svg';
              break;
          }

          const newMarker = new naver.maps.Marker({
            position: new naver.maps.LatLng(dt.latitude, dt.longitude),
            map: map,
            icon: imgSrc,
          });
          naver.maps.Event.addListener(newMarker, 'click', function (e) {
            router.push(`/booth/${dt.id}`);
          });

          return newMarker;
        })
      );
    }
  }, [map, filteredBoothDataInMap]);

  return {
    boothLocMarkerArr,
  };
};
