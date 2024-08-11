import { axiosInstance } from '@/shared/store/instance';
import { interestFestival } from '@/shared/store/types/festival';
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

interface Props {
  interestSchoolList: interestFestival[];
  setInterestSchoolList: React.Dispatch<
    React.SetStateAction<interestFestival[]>
  >;
}

const SchoolFestivalTabs: React.FC<Props> = ({
  interestSchoolList,
  setInterestSchoolList,
}) => {
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

  const dataToShow: interestFestival[] =
    (nowTab === '전체'
      ? allData?.data.map((dt) => ({
          imgSrc: dt.thumbnail,
          schoolName: dt.schoolName,
          festivalName: dt.festivalName,
          date: dateToDateFormat(dt.beginDate, dt.endDate),
          festivalId: dt.festivalId,
          schoolId: dt.schoolId,
          lat: dt.latitude,
          lng: dt.longitude,
        }))
      : regionData?.data.map((dt) => ({
          imgSrc: dt.thumbnail,
          schoolName: dt.schoolName,
          festivalName: dt.festivalName,
          date: dateToDateFormat(dt.beginDate, dt.endDate),
          festivalId: dt.festivalId,
          schoolId: dt.schoolId,
          lat: dt.latitude,
          lng: dt.longitude,
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
            <SchoolFestivalSearchList
              schoolArr={dataToShow}
              interestSchoolList={interestSchoolList}
              setInterestSchoolList={setInterestSchoolList}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default SchoolFestivalTabs;
