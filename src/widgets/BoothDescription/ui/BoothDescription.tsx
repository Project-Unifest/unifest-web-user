import Image from 'next/image';
import React from 'react';
import LocationIcon from '@/shared/assets/icon/green_map_icon.svg';

import { Button } from '@/shared/ui/Button/button';

import { BoothDetail, Response } from '@/shared/store/types/response';
import { axiosInstance } from '@/shared/store/instance';
import { useQuery } from '@tanstack/react-query';
interface Props {
  id: string;
}

const BoothDescription: React.FC<Props> = ({ id }: Props) => {
  const getFestivalBoothDetail = async (festivalId: string) => {
    const res = await axiosInstance.get(`/api/booths/${festivalId}`);
    const response: Response<BoothDetail> = res.data;
    return response;
  };

  const { data: boothDetailDataRes } = useQuery({
    queryKey: ['getFestivalBoothDetail', id],
    queryFn: () => getFestivalBoothDetail(id),
    enabled: !!id,
  });

  const boothDetailData = boothDetailDataRes?.data;
  console.log(boothDetailData);

  return (
    <section className='w-full border-b-[8px] border-b-[#F1F3F7]'>
      <img
        src={boothDetailData?.thumbnail || ''}
        className='w-full h-auto'
        alt='booth image'
      />
      <div className='w-full flex justify-center '>
        <main className='w-full pb-[80px]'>
          <div className='py-[30px] px-[20px]'>
            <div className='flex gap-[5px] items-center'>
              <h1 className=' font-bold text-[22px] text-black'>
                {boothDetailData?.name || ''}
              </h1>
              <h2 className='font-semibold text-[10px] text-[#F5687E]'>
                {boothDetailData?.warning || ''}
              </h2>
            </div>
            <p className='text-[#3D3D3D] font-normal text-[13px] pt-[15px] pb-[21px]'>
              {boothDetailData?.description || ''}
            </p>

            <div className='flex items-center gap-[3px] pb-[16px]'>
              <LocationIcon />
              <p className='font-medium text-[13px] text-[#393939]'>
                {boothDetailData?.location || ''}
              </p>
            </div>
            <Button variant={'outline'} size={'full_sm'}>
              위치 확인하기
            </Button>
          </div>
          <div className='py-[22px] px-[20px]'>
            <h1 className='font-semibold text-[18px] text-black mb-[18px]'>
              메뉴
            </h1>
            <ul className='flex flex-col gap-[16px]'>
              {boothDetailData && boothDetailData.menus.length > 0 ? (
                boothDetailData.menus.map((dt, idx) => (
                  <li
                    className='flex flex-row gap-[13px] items-center'
                    key={dt.id + idx}
                  >
                    <Image
                      src={dt.imgUrl}
                      className='w-[86px] h-[86px] rounded-[12px]'
                      width={86}
                      height={86}
                      alt={`food image ${idx}`}
                    />
                    <div className='flex flex-col h-[86px] justify-center items-start'>
                      <h2 className='font-semibold text-[14px] text-[#727276]'>
                        {dt.name}
                      </h2>
                      <h3 className='font-semibold text-[16px] text-[#131316]'>
                        {dt.price}원
                      </h3>
                    </div>
                  </li>
                ))
              ) : (
                <div className='h-[145px] w-full flex justify-center items-center'>
                  <p className='font-normal text-[14px] text-[#727276]'>
                    등록된 메뉴가 없어요
                  </p>
                </div>
              )}
            </ul>
          </div>
        </main>
      </div>
    </section>
  );
};

export default BoothDescription;
