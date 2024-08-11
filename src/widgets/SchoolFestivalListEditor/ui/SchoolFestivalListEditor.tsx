import SchoolCardEditor from '@/entities/school/ui/SchoolCardEditor/SchoolCardEditor';
import { interestFestival } from '@/shared/store/types/festival';
import React from 'react';
interface Props {
  interestSchoolList: interestFestival[];
  isEditMode: boolean;
  setInterestSchoolList: React.Dispatch<
    React.SetStateAction<interestFestival[]>
  >;
  changeMapToLocation: (lat: number, lng: number) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckedInterestFestival: React.Dispatch<
    React.SetStateAction<interestFestival | undefined>
  >;
}
const SchoolFestivalListEditor: React.FC<Props> = ({
  interestSchoolList,
  isEditMode,
  setInterestSchoolList,
  changeMapToLocation,
  setIsOpen,
  setCheckedInterestFestival,
}) => {
  return (
    <ul className='w-full flex flex-row gap-[7px] flex-wrap'>
      {interestSchoolList.map((dt) => (
        <SchoolCardEditor
          imgSrc={dt.imgSrc}
          schoolName={dt.schoolName}
          festivalName={dt.festivalName}
          date={dt.date}
          isEditMode={isEditMode}
          onClickCard={() => {
            changeMapToLocation(dt.lat, dt.lng);
            setCheckedInterestFestival(dt);
            setIsOpen(false);
          }}
          onDeleteCard={() => {
            const newData = {
              data: [
                ...interestSchoolList.filter(
                  (x) =>
                    !(
                      x.festivalId === dt.festivalId &&
                      x.schoolId === dt.schoolId
                    )
                ),
              ],
            };
            localStorage.setItem(
              'unifest-interest-festival',
              JSON.stringify(newData)
            );
            setInterestSchoolList([
              ...interestSchoolList.filter(
                (x) =>
                  !(
                    x.festivalId === dt.festivalId && x.schoolId === dt.schoolId
                  )
              ),
            ]);
          }}
        />
      ))}
    </ul>
  );
};

export default SchoolFestivalListEditor;
