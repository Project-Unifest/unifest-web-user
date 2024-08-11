'use client';
import TodayScheduleCard from '@/entities/festival/ui/TodayScheduleCard/TodayScheduleCard';
import React from 'react';
import ScheduleIcon from '@/shared/assets/icon/schedule_outline_icon.svg';
import { Button } from '@/shared/ui/Button/button';
import { useRouter } from 'next/navigation';
import { axiosInstance } from '@/shared/store/instance';
import { Response, TodayFestival } from '@/shared/store/types/response';
import { useQuery } from '@tanstack/react-query';

interface Props {
  selectedDate: Date | undefined;
}
interface Schedule {
  dateText: string;
  festivalTitle: string;
  location: string;
  imgs: string[];
}
const festivalArr: Schedule[] = [
  // {
  //   dateText: '05/21(화)',
  //   festivalTitle: '녹색지대 DAY1',
  //   location: '건국대학교 서울캠퍼스',
  //   imgs: [
  //     'https://i.namu.wiki/i/E4gAwg65fMroWtXG5POYiwcGseYpmfhrm9fYxCzSqXThXDMEG9yZAjkkq8_bQEkrIjAQZrQSObatdE-eDp86xQ.svg',
  //   ],
  // },
  // {
  //   dateText: '05/21(화)',
  //   festivalTitle: '녹색지대 DAY1',
  //   location: '건국대학교 서울캠퍼스',
  //   imgs: [
  //     'https://i.namu.wiki/i/E4gAwg65fMroWtXG5POYiwcGseYpmfhrm9fYxCzSqXThXDMEG9yZAjkkq8_bQEkrIjAQZrQSObatdE-eDp86xQ.svg',
  //   ],
  // },
  // {
  //   dateText: '05/21(화)',
  //   festivalTitle: '녹색지대 DAY1',
  //   location: '건국대학교 서울캠퍼스',
  //   imgs: [
  //     'https://i.namu.wiki/i/E4gAwg65fMroWtXG5POYiwcGseYpmfhrm9fYxCzSqXThXDMEG9yZAjkkq8_bQEkrIjAQZrQSObatdE-eDp86xQ.svg',
  //   ],
  // },
];
const dayArr = ['일', '월', '화', '수', '목', '금', '토'];
const TodayFestivalSchedule: React.FC<Props> = ({ selectedDate }) => {
  const router = useRouter();
  const dateStringFormat = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1).toString() : date.getMonth() + 1}-${date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate()}`;
  };
  const monthAndDayStringFormat = (date: Date) => {
    return `${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1).toString() : date.getMonth() + 1}-${date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate()}(${dayArr[date.getDay()]})`;
  };
  const getTodayFestivals = async (dateStr: string) => {
    const res = await axiosInstance.get(`/festival/today?date=${dateStr}`);
    const data: Response<TodayFestival[]> = res.data;
    return data;
  };

  const { data: todayFestivalsData } = useQuery({
    queryKey: ['todayFestivals', selectedDate || 'today'],
    queryFn: () =>
      getTodayFestivals(dateStringFormat(selectedDate || new Date())),
  });

  const festivalArr: Schedule[] =
    todayFestivalsData?.data.map((dt) => ({
      dateText: monthAndDayStringFormat(selectedDate || new Date()),
      festivalTitle: dt.festivalName,
      location: dt.schoolName,
      imgs: dt.starList.map((d) => d.imgUrl),
    })) || [];

  return (
    <section className='w-full border-b-[8px] border-b-[#F1F3F7]'>
      <h1 className=' font-semibold text-[15px] px-[19px] pt-[18px] pb-[25px]'>
        {(selectedDate?.getMonth() || new Date().getMonth()) + 1}월{' '}
        {selectedDate?.getDate() || new Date().getDate()}일 축제 일정
      </h1>
      {festivalArr.length !== 0 ? (
        <ul className='pl-[19px] flex flex-col gap-[16px] pb-[30px]'>
          {festivalArr.map((dt, idx) => (
            <li
              className={`${idx === 0 ? '' : 'border-t border-t-[#DFDFDF] pt-[16px]'}`}
              key={dt.festivalTitle + idx}
            >
              <TodayScheduleCard {...dt} />
            </li>
          ))}
        </ul>
      ) : (
        <div className='w-full pt-[194px] pb-[17px] flex flex-col items-center justify-center gap-[9px]'>
          <ScheduleIcon />
          <p className='font-semibold text-[18px]'>축제 일정 없음</p>
          <p className='font-medium text-[#848484] text-[12px]'>
            오늘은 축제가 열리는 학교가 없어요
          </p>
        </div>
      )}
      <div className='w-full px-[20px] pb-[220px]'>
        <Button
          variant={'outline'}
          size={'full_sm'}
          onClick={() => {
            router.push('/intro');
          }}
        >
          관심 축제 추가하기
        </Button>
      </div>
    </section>
  );
};

export default TodayFestivalSchedule;
