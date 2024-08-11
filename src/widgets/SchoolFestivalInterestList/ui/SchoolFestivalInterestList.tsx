import SchoolFestivalList from '@/widgets/SchoolFestivalList/ui/SchoolFestivalList';
import React from 'react';
interface Props {
  schoolArr: {
    imgSrc: string;
    schoolName: string;
    festivalName: string;
    date: string;
    festivalId: string;
    schoolId: string;
  }[];
  clearInterestSchoolList: () => void;
}
const SchoolFestivalInterestList: React.FC<Props> = ({
  schoolArr,
  clearInterestSchoolList,
}) => {
  return (
    <div className=' w-full flex flex-col items-center px-[19px] border-b-[8px] border-b-[#F1F3F7] pb-[21px]'>
      <div className='w-full py-[14px] flex items-center justify-between'>
        <h1 className='font-[#000000] font-semibold text-[15px]'>
          나의 관심 축제
        </h1>
        <button
          className='font-[#848484] font-medium text-xs underline'
          onClick={clearInterestSchoolList}
        >
          모두 선택 해제
        </button>
      </div>
      <SchoolFestivalList
        schoolArr={schoolArr}
        interestSchoolList={schoolArr}
      />
    </div>
  );
};

export default SchoolFestivalInterestList;
