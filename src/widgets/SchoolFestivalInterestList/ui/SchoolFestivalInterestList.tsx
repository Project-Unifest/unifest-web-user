import SchoolFestivalList from '@/widgets/SchoolFestivalList/ui/SchoolFestivalList';
import React from 'react';
interface Props {
  schoolArr: string[];
}
const SchoolFestivalInterestList: React.FC<Props> = ({ schoolArr }) => {
  return (
    <div className=' w-full flex flex-col items-center'>
      <div className='w-[550px] py-[14px] flex items-center justify-between'>
        <h1 className='font-[#000000] font-semibold text-[15px]'>
          나의 관심 축제
        </h1>
        <button className='font-[#848484] font-medium text-xs underline'>
          모두 선택 해제
        </button>
      </div>
      <SchoolFestivalList schoolArr={schoolArr} />
    </div>
  );
};

export default SchoolFestivalInterestList;
