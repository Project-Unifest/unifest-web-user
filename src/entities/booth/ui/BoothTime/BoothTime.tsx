import React, { useState } from 'react';
import TimeIcon from '@/shared/assets/icon/time_icon.svg';
import ChevronDownIcon from '@/shared/assets/icon/chevron_down.svg';

interface Props {
  isOn: boolean;
}

interface BoothTime {
  date: string;
  day: string;
  startTime: string;
  endTime: string;
}

const timeArr: BoothTime[] = [
  { date: '9월 16일', day: '수', startTime: '18:00', endTime: '24:00' },
  { date: '9월 16일', day: '수', startTime: '18:00', endTime: '24:00' },
  { date: '9월 16일', day: '수', startTime: '18:00', endTime: '24:00' },
];

const BoothTime: React.FC<Props> = ({ isOn }: Props) => {
  const [isShowTime, setIsShowTime] = useState(false);
  return (
    <div className='pb-[11px] flex flex-col gap-[10px]'>
      <div
        className='flex items-center gap-[3px]  cursor-pointer'
        onClick={() => setIsShowTime((prev) => !prev)}
      >
        <TimeIcon />
        <p className='font-medium text-[13px] text-[#393939]'>
          {isOn ? '운영중' : '쉬는중'}
        </p>
        <ChevronDownIcon />
      </div>
      {isShowTime && (
        <div className='flex flex-col gap-[7px] pl-[18px]'>
          {timeArr.map((dt) => (
            <div className='flex flex-row items-center gap-[6px] font-medium text-[13px] text-[#45464A]'>
              <p>{dt.date}</p>
              <p>{dt.day}</p>
              <p>
                {dt.startTime}~{dt.endTime}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BoothTime;
