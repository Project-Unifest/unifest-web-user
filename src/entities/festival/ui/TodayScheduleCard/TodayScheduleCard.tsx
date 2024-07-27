import Image from 'next/image';
import React from 'react';
import MapIcon from '@/shared/assets/icon/map_icon.svg';
interface Props {
  dateText: string;
  festivalTitle: string;
  location: string;
  imgs: string[];
}
const TodayScheduleCard: React.FC<Props> = ({
  dateText,
  festivalTitle,
  location,
  imgs,
}) => {
  return (
    <div className='flex items-center gap-[40px] border-l-[3px] border-l-[#1FC0BA]'>
      <div className='flex flex-col gap-[5px] pl-[10px]'>
        <p className=' font-bold text-[12px] text-[#C0C0C0]'>{dateText}</p>
        <h2 className=' font-semibold text-[18px]'>{festivalTitle}</h2>
        <div className='flex items-center'>
          <MapIcon />
          <p className=' font-medium text-[11px] text-[#848484]'>{location}</p>
        </div>
      </div>
      <ul className='flex items-center gap-[10px]'>
        {imgs.map((dt, idx) => (
          <li className='' key={dt + idx}>
            <Image
              src={dt}
              alt={'TodayScheduleCard image' + dt}
              width={72}
              height={72}
              className='w-[72px] h-[72px] rounded-full'
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodayScheduleCard;
