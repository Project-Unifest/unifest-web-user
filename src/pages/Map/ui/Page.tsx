'use client';
import Map from '@/features/map/ui/Map/Map';
import { Button } from '@/shared/ui/Button/button';
import MapTopBar from '@/widgets/MapTopBar.tsx/ui/MapTopBar';
import React, { useRef, useState } from 'react';
import ChevronUpIcon from '@/shared/assets/icon/pink_chevron_up.svg';
import XIcon from '@/shared/assets/icon/x.svg';
import Image from 'next/image';
import LocationIcon from '@/shared/assets/icon/green_map_icon.svg';
import { useRouter } from 'next/navigation';
import { useLocation } from '@/features/map/hook/useLocation';
import { useMapWithGeocoder } from '@/features/map/hook/useMapWithGeocoder';
import { useUserLocationMap } from '@/features/map/hook/useUserLocationMap';
import { interestFestival } from '@/shared/store/types/festival';
import { axiosInstance } from '@/shared/store/instance';
import {
  Festival,
  PopularBooth,
  Response,
} from '@/shared/store/types/response';
import { useQuery } from '@tanstack/react-query';
interface Props {}

interface Booth {
  imgSrc: string;
  name: string;
  description: string;
  location: string;
}

const MapPage: React.FC<Props> = ({}) => {
  const [isPopularBooth, setIsPopularBooth] = useState<boolean>(false);
  const router = useRouter();

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
  const { changeMapToCenter, plusZoom, minusZoom, changeMapToLocation } =
    useUserLocationMap(map, userLocation, true);

  const [checkedInterestFestival, setCheckedInterestFestival] =
    useState<interestFestival>();

  const get5PopularFestivalBooth = async (festivalId: string) => {
    const res = await axiosInstance.get(`/api/booths?festivalId=${festivalId}`);
    const response: Response<PopularBooth[]> = res.data;
    return response;
  };

  const { data: popular5BoothData } = useQuery({
    queryKey: ['get5PopularFestivalBooth', checkedInterestFestival],
    queryFn: () =>
      get5PopularFestivalBooth(checkedInterestFestival?.festivalId || '0'),
    enabled: !!checkedInterestFestival,
  });

  const boothArr: Booth[] =
    popular5BoothData?.data.map((dt) => ({
      imgSrc: dt.thumbnail,
      name: dt.name,
      description: dt.description,
      location: dt.location,
    })) || [];

  return (
    <div className='flex flex-col w-full relative'>
      <MapTopBar
        changeMapToLocation={changeMapToLocation}
        checkedInterestFestival={checkedInterestFestival}
        setCheckedInterestFestival={setCheckedInterestFestival}
      />
      <Map
        isPopularBooth={isPopularBooth}
        mapContainerRef={mapContainerRef}
        mapWrapperRef={mapWrapperRef}
        changeMapToCenter={changeMapToCenter}
        plusZoom={plusZoom}
        minusZoom={minusZoom}
      />
      {!!checkedInterestFestival && (
        <div className='absolute bottom bottom-[20px] w-full flex flex-col gap-[18px] z-10'>
          <div className='flex justify-center gap-[5px] w-full'>
            {isPopularBooth && (
              <Button
                variant={'outline'}
                className='rounded-full w-[36px] h-[36px] bg-white p-0'
                onClick={() => setIsPopularBooth(false)}
              >
                <XIcon />
              </Button>
            )}
            <Button
              variant={'outline'}
              className={`flex flex-row justify-center items-center gap-[4px] rounded-full w-[116px] `}
              onClick={() => setIsPopularBooth((prev) => !prev)}
            >
              <p className='font-bold text-[13px] text-[#FF748A]'>인기부스</p>
              <div
                className={`${isPopularBooth ? 'rotate-180' : 'rotate-360'}`}
              >
                <ChevronUpIcon />
              </div>
            </Button>
          </div>
          {isPopularBooth && (
            <div className='w-full relative h-[138.5px] overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar-hide'>
              <ul className='absolute left-0 top-0 px-[44px] flex items-center gap-[12px] '>
                {boothArr.map((dt, idx) => (
                  <li
                    className='w-[80vw] rounded-xl bg-white flex flex-row gap-[15px] px-[16px] py-[15px]'
                    onClick={() => router.push('/booth')}
                  >
                    <div className='relative'>
                      <Image
                        src={dt.imgSrc}
                        alt={`인기부스 사진 ${idx}`}
                        className='w-[86px] h-[86px] rounded-xl'
                        width={86}
                        height={86}
                      />
                      <div className='absolute left-0 flex justify-center items-center top-[-10px] w-[36px] h-[36px] rounded-full bg-[#FF748A] text-white text-[13px] font-semibold'>
                        {idx + 1}위
                      </div>
                    </div>
                    <div className='flex flex-col gap-[5px] break-normal'>
                      <h1 className='font-semibold text-[18px] text-[#131316]'>
                        {dt.name}
                      </h1>
                      <p className='font-normal text-[13px] text-[#727276] w-[155px] h-[36px] whitespace-normal line-clamp-2'>
                        {dt.description}
                      </p>
                      <div className='flex items-center gap-[3px] pb-[16px]'>
                        <LocationIcon />
                        <p className='font-medium text-[13px] text-[#393939]'>
                          {dt.location}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MapPage;
