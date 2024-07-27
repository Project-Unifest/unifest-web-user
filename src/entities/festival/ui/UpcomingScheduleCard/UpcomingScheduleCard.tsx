import Image from 'next/image';
import React from 'react';
import MapIcon from '@/shared/assets/icon/map_icon.svg';
interface Props {
  dateText: string;
  festivalTitle: string;
  location: string;
  imgUrl: string;
}
const UpcomingScheduleCard: React.FC<Props> = ({
  dateText,
  festivalTitle,
  location,
  imgUrl,
}) => {
  return (
    <div className='flex items-center gap-[9px] border border-[#DEDEDE] rounded-[10px] w-full p-[19px]'>
      <Image
        src={imgUrl}
        alt={'TodayScheduleCard image' + imgUrl}
        width={52}
        height={52}
        className='w-[52px] h-[52px] rounded-full'
      />
      <div className='flex flex-col gap-[5px] pl-[10px]'>
        <p className=' font-bold text-[12px] text-[#848484]'>{dateText}</p>
        <h2 className=' font-semibold text-[12px]'>{festivalTitle}</h2>
        <div className='flex items-center'>
          <MapIcon />
          <p className=' font-medium text-[12px] text-[#848484]'>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingScheduleCard;
