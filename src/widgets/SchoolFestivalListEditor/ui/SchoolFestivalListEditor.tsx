import SchoolCardEditor from '@/entities/school/ui/SchoolCardEditor/SchoolCardEditor';
import React from 'react';
interface Props {
  schoolArr: string[];
  isEditMode: boolean;
}
const SchoolFestivalListEditor: React.FC<Props> = ({
  schoolArr,
  isEditMode,
}) => {
  return (
    <ul className='w-full flex flex-row gap-[7px] flex-wrap'>
      {schoolArr.map((dt) => (
        <SchoolCardEditor
          imgSrc='https://i.namu.wiki/i/E4gAwg65fMroWtXG5POYiwcGseYpmfhrm9fYxCzSqXThXDMEG9yZAjkkq8_bQEkrIjAQZrQSObatdE-eDp86xQ.svg'
          schoolName='zxcv'
          festivalName='fas'
          date='qrw'
          isEditMode={isEditMode}
        />
      ))}
    </ul>
  );
};

export default SchoolFestivalListEditor;
