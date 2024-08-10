'use client';
import { axiosInstance } from '@/shared/store/instance';
import { Festival, Response } from '@/shared/store/types/response';
import { Button } from '@/shared/ui/Button/button';
import SchoolFestivalInterestList from '@/widgets/SchoolFestivalInterestList/ui/SchoolFestivalInterestList';
import SchoolFestivalSelect from '@/widgets/SchoolFestivalSelect/ui/SchoolFestivalSelect';
import SchoolFestivalTabs from '@/widgets/SchoolFestivalTabs/ui/SchoolFestivalTabs';
import SearchBar from '@/widgets/SearchBar/ui/SearchBar';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react';
const interestSchoolList: {
  imgSrc: string;
  schoolName: string;
  festivalName: string;
  date: string;
}[] = [
  {
    imgSrc:
      'https://i.namu.wiki/i/E4gAwg65fMroWtXG5POYiwcGseYpmfhrm9fYxCzSqXThXDMEG9yZAjkkq8_bQEkrIjAQZrQSObatdE-eDp86xQ.svg',
    schoolName: '건국대 서울캠',
    festivalName: '녹색지대',
    date: '05.06-05.08',
  },
];

const IntroPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <SchoolFestivalSelect />
      <SearchBar />
      {interestSchoolList.length > 0 && (
        <SchoolFestivalInterestList schoolArr={interestSchoolList} />
      )}
      <SchoolFestivalTabs />
      <div className='fixed w-full px-[15px] bottom-[22px]'>
        <Button size={'full_lg'} onClick={() => router.push('/home')}>
          추가 완료
        </Button>
      </div>
    </>
  );
};

export default IntroPage;
