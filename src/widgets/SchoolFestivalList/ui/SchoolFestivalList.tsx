import SchoolCard from '@/entities/school/ui/SchoolCard/SchoolCard';
import React from 'react';
interface Props {
  schoolArr: string[];
}
const SchoolFestivalList: React.FC<Props> = ({ schoolArr }) => {
  return (
    <ul className='w-full flex flex-row gap-[7px] flex-wrap'>
      {schoolArr.map((dt) => (
        <SchoolCard
          imgSrc='https://i.namu.wiki/i/E4gAwg65fMroWtXG5POYiwcGseYpmfhrm9fYxCzSqXThXDMEG9yZAjkkq8_bQEkrIjAQZrQSObatdE-eDp86xQ.svg'
          schoolName='zxcv'
          festivalName='fas'
          date='qrw'
        />
      ))}
    </ul>
  );
};

export default SchoolFestivalList;
