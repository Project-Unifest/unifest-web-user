import SchoolFestivalList from '@/widgets/SchoolFestivalList/ui/SchoolFestivalList';
import React from 'react';
interface Props {
  schoolArr: string[];
}
const SchoolFestivalSearchList: React.FC<Props> = ({ schoolArr }) => {
  return (
    <div className='h-[440px]'>
      <p className='font-[#4C4C4D] font-medium text-xs py-[14px]'>
        총 {schoolArr.length}개
      </p>
      {schoolArr.length === 0 ? (
        <div>
          <p className='font-[#7E7E7E] font-normal text-xs'>
            검색 결과가 없어요
          </p>
        </div>
      ) : (
        <SchoolFestivalList schoolArr={schoolArr} />
      )}
    </div>
  );
};

export default SchoolFestivalSearchList;
