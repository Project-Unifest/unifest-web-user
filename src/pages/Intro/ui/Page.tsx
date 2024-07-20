import { Button } from '@/shared/ui/Button/button';
import SchoolFestivalInterestList from '@/widgets/SchoolFestivalInterestList/ui/SchoolFestivalInterestList';
import SchoolFestivalSelect from '@/widgets/SchoolFestivalSelect/ui/SchoolFestivalSelect';
import SchoolFestivalTabs from '@/widgets/SchoolFestivalTabs/ui/SchoolFestivalTabs';
import SearchBar from '@/widgets/SearchBar/ui/SearchBar';
import React from 'react';

const IntroPage: React.FC = () => {
  return (
    <>
      <SchoolFestivalSelect />
      <SearchBar />
      <SchoolFestivalInterestList schoolArr={['asf']} />
      <SchoolFestivalTabs />
      <div className='fixed w-full px-[15px] bottom-[22px]'>
        <Button size={'full_lg'}>추가 완료</Button>
      </div>
    </>
  );
};

export default IntroPage;
