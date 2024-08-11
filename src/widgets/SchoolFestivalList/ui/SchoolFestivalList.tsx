import SchoolCard from '@/entities/school/ui/SchoolCard/SchoolCard';
import {
  interestFestival,
  interestFestivalArrData,
} from '@/shared/store/types/festival';
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
  setInterestSchoolList?: React.Dispatch<
    React.SetStateAction<interestFestival[]>
  >;
}
const SchoolFestivalList: React.FC<Props> = ({
  schoolArr,
  interestSchoolList,
  setInterestSchoolList,
}) => {
  return (
    <ul className='w-full flex flex-row gap-[7px] flex-wrap'>
      {schoolArr.map((dt) => (
        <SchoolCard
          {...dt}
          onClick={() => {
            if (setInterestSchoolList) {
              if (interestSchoolList.length > 0) {
                if (
                  !interestSchoolList.find(
                    (x) =>
                      x.festivalId === dt.festivalId &&
                      x.schoolId === dt.schoolId
                  )
                ) {
                  const newData = { data: [...interestSchoolList, { ...dt }] };
                  localStorage.setItem(
                    'unifest-interest-festival',
                    JSON.stringify(newData)
                  );
                  setInterestSchoolList([...interestSchoolList, { ...dt }]);
                }
              } else {
                const newData = { data: [dt] };
                localStorage.setItem(
                  'unifest-interest-festival',
                  JSON.stringify(newData)
                );
                setInterestSchoolList([{ ...dt }]);
              }
            }
          }}
        />
      ))}
    </ul>
  );
};

export default SchoolFestivalList;
