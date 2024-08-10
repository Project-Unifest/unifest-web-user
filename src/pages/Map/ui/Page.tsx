'use client';
import Map from '@/features/map/ui/Map/Map';
import { Button } from '@/shared/ui/Button/button';
import MapTopBar from '@/widgets/MapTopBar.tsx/ui/MapTopBar';
import React, { useState } from 'react';
import ChevronUpIcon from '@/shared/assets/icon/pink_chevron_up.svg';
import NowLocationIcon from '@/shared/assets/icon/now_location.svg';
import XIcon from '@/shared/assets/icon/x.svg';
import Image from 'next/image';
import LocationIcon from '@/shared/assets/icon/green_map_icon.svg';
import { useRouter } from 'next/navigation';
interface Props {}

const boothArr: {
  imgSrc: string;
  name: string;
  description: string;
  location: string;
}[] = [
  {
    imgSrc: '',
    name: '학생회 부스',
    description:
      '저희 주점은 일본 이자카야를 모티브로 만든 컴공인을 위한 곳일지도 모릅니다.',
    location: '청심대 앞',
  },
  {
    imgSrc: '',
    name: '학생회 부스',
    description:
      '저희 주점은 일본 이자카야를 모티브로 만든 컴공인을 위한 곳일지도 모릅니다.',
    location: '청심대 앞',
  },
  {
    imgSrc: '',
    name: '학생회 부스',
    description:
      '저희 주점은 일본 이자카야를 모티브로 만든 컴공인을 위한 곳일지도 모릅니다.',
    location: '청심대 앞',
  },
];

const MapPage: React.FC<Props> = ({}) => {
  const [isPopularBooth, setIsPopularBooth] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div className='flex flex-col w-full relative'>
      <MapTopBar />
      <Map />
      <div className='absolute bottom bottom-[20px] w-full flex flex-col gap-[18px]'>
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
            <div className={`${isPopularBooth ? 'rotate-180' : 'rotate-360'}`}>
              <ChevronUpIcon />
            </div>
          </Button>
        </div>
        {isPopularBooth && (
          <ul className='w-full px-[44px] flex items-center gap-[12px] overflow-scroll whitespace-nowrap scrollbar-hide'>
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
        )}
      </div>
      {!isPopularBooth && (
        <div className='absolute bottom bottom-[20px] flex flex-col items-center right-[20px] gap-[6px]'>
          <div className='w-[42px] h-[81px] px-[7.5px] rounded-full flex flex-col justify-center items-center bg-white'>
            <button className='w-full h-[40px] border-b border-b-[#BABABF] text-[35px] font-semibold text-[#131316] flex justify-center items-center cursor-pointer '>
              +
            </button>
            <button className='w-full h-[40px] text-[35px] font-semibold text-[#131316] text-center flex justify-center items-center cursor-pointer'>
              -
            </button>
          </div>
          <button className='w-[42px] h-[42px] flex rounded-full justify-center items-center bg-white'>
            <NowLocationIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default MapPage;
