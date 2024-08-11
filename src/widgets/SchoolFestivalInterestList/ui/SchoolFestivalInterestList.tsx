import { interestFestival } from '@/shared/store/types/festival';
import SchoolFestivalList from '@/widgets/SchoolFestivalList/ui/SchoolFestivalList';
import React from 'react';
interface Props {
  interestSchoolList: interestFestival[];
  clearInterestSchoolList: () => void;
}
const SchoolFestivalInterestList: React.FC<Props> = ({
  interestSchoolList,
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
        schoolArr={interestSchoolList}
        interestSchoolList={interestSchoolList}
      />
    </div>
  );
};

export default SchoolFestivalInterestList;
