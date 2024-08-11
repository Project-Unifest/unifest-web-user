import { interestFestival } from '@/shared/store/types/festival';
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
  interestSchoolList: interestFestival[];
  setInterestSchoolList: React.Dispatch<
    React.SetStateAction<interestFestival[]>
  >;
}
const SchoolFestivalSearchList: React.FC<Props> = ({
  schoolArr,
  interestSchoolList,
  setInterestSchoolList,
}) => {
  return (
    <div className='h-[440px]'>
      <p className='font-[#4C4C4D] font-medium text-xs py-[14px]'>
        총 {schoolArr.length}개
      </p>
      {schoolArr.length === 0 ? (
        <div className='py-[191px] w-full flex justify-center'>
          <p className='font-[#727276] font-normal text-[14px]'>
            검색 결과가 없어요
          </p>
        </div>
      ) : (
        <SchoolFestivalList
          schoolArr={schoolArr}
          interestSchoolList={interestSchoolList}
          setInterestSchoolList={setInterestSchoolList}
        />
      )}
    </div>
  );
};

export default SchoolFestivalSearchList;
