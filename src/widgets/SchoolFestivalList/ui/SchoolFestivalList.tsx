import SchoolCard from '@/entities/school/ui/SchoolCard/SchoolCard';
import React from 'react';
interface Props {
  schoolArr: {
    imgSrc: string;
    schoolName: string;
    festivalName: string;
    date: string;
  }[];
}
const SchoolFestivalList: React.FC<Props> = ({ schoolArr }) => {
  return (
    <ul className='w-full flex flex-row gap-[7px] flex-wrap'>
      {schoolArr.map((dt) => (
        <SchoolCard {...dt} />
      ))}
    </ul>
  );
};

export default SchoolFestivalList;
