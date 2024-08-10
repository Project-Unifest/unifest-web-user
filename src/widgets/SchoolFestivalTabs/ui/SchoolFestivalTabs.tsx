import { axiosInstance } from '@/shared/store/instance';
import { Festival, Response } from '@/shared/store/types/response';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/ui/Tabs/tabs';
import SchoolFestivalSearchList from '@/widgets/SchoolFestivalSearchList/ui/SchoolFestivalSearchList';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const regionArr = [
  '전체',
  '서울',
  '경기/인천',
  '강원',
  '대전/충청',
  '광주/전라',
  '부산/대구',
  '경상',
];

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

const SchoolFestivalTabs: React.FC = () => {
  const getAllFestival = async () => {
    const res = await axiosInstance.get('/festival/all');
    const response: Response<Festival[]> = res.data;
    return response;
  };
  const getFestivalByRegion = async (region: string) => {
    const res = await axiosInstance.get(`/festival/region?region=${region}`);
    const response: Response<Festival[]> = res.data;
    return response;
  };

  const { data: allData } = useQuery({
    queryKey: ['festivalAll'],
    queryFn: getAllFestival,
  });

  const [nowTab, setNowTab] = useState(regionArr[0]);

  const { data: regionData } = useQuery({
    queryKey: ['festivalReigion', nowTab],
    queryFn: () => getFestivalByRegion(nowTab),
  });

  const dateToDateFormat = (beginDate: string, endDate: string) => {
    const begin = new Date(beginDate);
    const end = new Date(endDate);
    const beginMonth = begin.getMonth() + 1;
    const beginDay = begin.getDate();
    const endMonth = end.getMonth() + 1;
    const endDay = end.getDate();
    const beginText =
      (beginMonth < 10 ? `0${beginMonth}` : `${beginMonth}`) +
      '.' +
      (beginDay < 10 ? `0${beginDay}` : `${beginDay}`);
    const endText =
      (endMonth < 10 ? `0${endMonth}` : `${endMonth}`) +
      '.' +
      (endDay < 10 ? `0${endDay}` : `${endDay}`);
    return beginText + '~' + endText;
  };

  const dataToShow: {
    imgSrc: string;
    schoolName: string;
    festivalName: string;
    date: string;
  }[] =
    (nowTab === '전체'
      ? allData?.data.map((dt) => ({
          imgSrc: dt.thumbnail,
          schoolName: dt.schoolName,
          festivalName: dt.festivalName,
          date: dateToDateFormat(dt.beginDate, dt.endDate),
        }))
      : regionData?.data.map((dt) => ({
          imgSrc: dt.thumbnail,
          schoolName: dt.schoolName,
          festivalName: dt.festivalName,
          date: dateToDateFormat(dt.beginDate, dt.endDate),
        }))) || [];

  return (
    <div className='w-full flex justify-start mt-[23px]'>
      <Tabs value={nowTab} className='w-full'>
        <TabsList className='overflow-scroll whitespace-nowrap scrollbar-hide'>
          {regionArr.map((dt) => (
            <TabsTrigger value={dt} onClick={() => setNowTab(dt)}>
              {dt}
            </TabsTrigger>
          ))}
        </TabsList>
        {regionArr.map((dt) => (
          <TabsContent value={dt} className='px-[19px]'>
            <SchoolFestivalSearchList schoolArr={dataToShow} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default SchoolFestivalTabs;
