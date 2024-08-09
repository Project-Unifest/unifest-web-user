import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/ui/Tabs/tabs';
import SchoolFestivalSearchList from '@/widgets/SchoolFestivalSearchList/ui/SchoolFestivalSearchList';
import React from 'react';

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

const SchoolFestivalTabs: React.FC = () => {
  return (
    <div className='w-full flex justify-start mt-[23px]'>
      <Tabs defaultValue={regionArr[0]} className='w-full'>
        <TabsList className='overflow-scroll whitespace-nowrap scrollbar-hide'>
          {regionArr.map((dt) => (
            <TabsTrigger value={dt}>{dt}</TabsTrigger>
          ))}
        </TabsList>
        {regionArr.map((dt) => (
          <TabsContent value={dt} className='px-[19px]'>
            <SchoolFestivalSearchList
              schoolArr={['asf', 'asfa', 'fas', 'asf', 'fasf', 'asf']}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default SchoolFestivalTabs;
