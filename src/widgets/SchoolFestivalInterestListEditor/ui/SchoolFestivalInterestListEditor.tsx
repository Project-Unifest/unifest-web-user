import { interestFestival } from '@/shared/store/types/festival';
import { Button } from '@/shared/ui/Button/button';
import SchoolFestivalListEditor from '@/widgets/SchoolFestivalListEditor/ui/SchoolFestivalListEditor';
import React, { useState } from 'react';
interface Props {
  interestSchoolList: interestFestival[];
  setInterestSchoolList: React.Dispatch<
    React.SetStateAction<interestFestival[]>
  >;
  changeMapToLocation: (lat: number, lng: number) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckedInterestFestival: React.Dispatch<
    React.SetStateAction<interestFestival | undefined>
  >;
}
const SchoolFestivalInterestListEditor: React.FC<Props> = ({
  interestSchoolList,
  setInterestSchoolList,
  changeMapToLocation,
  setIsOpen,
  setCheckedInterestFestival,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <div className=' w-full flex flex-col items-center px-[19px] pb-[21px] relative border-t-[8px] border-t-[#F1F3F7]'>
      <div className='w-full py-[14px] flex items-center justify-between'>
        <h1 className='font-[#000000] font-semibold text-[15px]'>
          나의 관심 축제
        </h1>
        {!isEditMode && (
          <button
            className='font-[#848484] font-medium text-xs underline'
            onClick={() => setIsEditMode(true)}
          >
            편집
          </button>
        )}
      </div>
      <SchoolFestivalListEditor
        interestSchoolList={interestSchoolList}
        isEditMode={isEditMode}
        setInterestSchoolList={setInterestSchoolList}
        changeMapToLocation={changeMapToLocation}
        setIsOpen={setIsOpen}
        setCheckedInterestFestival={setCheckedInterestFestival}
      />
      {isEditMode && (
        <div className='fixed bottom-[22px] w-full left-0 px-[15px]'>
          <Button size={'full_lg'} onClick={() => setIsEditMode(false)}>
            편집 완료
          </Button>
        </div>
      )}
    </div>
  );
};

export default SchoolFestivalInterestListEditor;
