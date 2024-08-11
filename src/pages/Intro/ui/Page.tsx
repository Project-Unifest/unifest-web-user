'use client';
import {
  interestFestival,
  interestFestivalArrData,
} from '@/shared/store/types/festival';
import { Button } from '@/shared/ui/Button/button';
import ReactQueryProviders from '@/shared/utils/react-query-provider';
import SchoolFestivalInterestList from '@/widgets/SchoolFestivalInterestList/ui/SchoolFestivalInterestList';
import SchoolFestivalSelect from '@/widgets/SchoolFestivalSelect/ui/SchoolFestivalSelect';
import SchoolFestivalTabs from '@/widgets/SchoolFestivalTabs/ui/SchoolFestivalTabs';
import SearchBar from '@/widgets/SearchBar/ui/SearchBar';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const IntroPage: React.FC = () => {
  const router = useRouter();
  const [interestSchoolList, setInterestSchoolList] = useState<
    interestFestival[]
  >([]);
  useEffect(() => {
    const interestFestivalData = localStorage.getItem(
      'unifest-interest-festival'
    );
    if (interestFestivalData) {
      const data: interestFestivalArrData = JSON.parse(interestFestivalData);
      setInterestSchoolList(data.data);
    }
  }, []);

  const clearInterestSchoolList = () => {
    setInterestSchoolList([]);
    localStorage.removeItem('unifest-interest-festival');
  };

  return (
    <>
      <ReactQueryProviders>
        <SchoolFestivalSelect />
        <SearchBar />
        {interestSchoolList.length > 0 && (
          <SchoolFestivalInterestList
            interestSchoolList={interestSchoolList}
            clearInterestSchoolList={clearInterestSchoolList}
          />
        )}
        <SchoolFestivalTabs
          interestSchoolList={interestSchoolList}
          setInterestSchoolList={setInterestSchoolList}
        />
        <div className='fixed w-full px-[15px] bottom-[22px]'>
          <Button size={'full_lg'} onClick={() => router.push('/home')}>
            추가 완료
          </Button>
        </div>
      </ReactQueryProviders>
    </>
  );
};

export default IntroPage;
