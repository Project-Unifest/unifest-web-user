import React from 'react';
import ScheduleIcon from '@/shared/assets/icon/schedule.svg';
import UpcomingScheduleCard from '@/entities/festival/ui/UpcomingScheduleCard/UpcomingScheduleCard';

interface Props {}
interface Schedule {
  dateText: string;
  festivalTitle: string;
  location: string;
  imgUrl: string;
}
const festivalArr: Schedule[] = [
  {
    dateText: '05/21(화) ~ 05/23(목)',
    festivalTitle: '녹색지대',
    location: '건국대학교 서울캠퍼스',
    imgUrl:
      'https://i.namu.wiki/i/E4gAwg65fMroWtXG5POYiwcGseYpmfhrm9fYxCzSqXThXDMEG9yZAjkkq8_bQEkrIjAQZrQSObatdE-eDp86xQ.svg',
  },
  {
    dateText: '05/21(화) ~ 05/23(목)',
    festivalTitle: '녹색지대',
    location: '건국대학교 서울캠퍼스',
    imgUrl:
      'https://i.namu.wiki/i/E4gAwg65fMroWtXG5POYiwcGseYpmfhrm9fYxCzSqXThXDMEG9yZAjkkq8_bQEkrIjAQZrQSObatdE-eDp86xQ.svg',
  },
  {
    dateText: '05/21(화) ~ 05/23(목)',
    festivalTitle: '녹색지대',
    location: '건국대학교 서울캠퍼스',
    imgUrl:
      'https://i.namu.wiki/i/E4gAwg65fMroWtXG5POYiwcGseYpmfhrm9fYxCzSqXThXDMEG9yZAjkkq8_bQEkrIjAQZrQSObatdE-eDp86xQ.svg',
  },
];
const UpcomingFestivalSchdule: React.FC<Props> = ({}) => {
  return (
    <section className='w-full pb-[60px]'>
      <h1 className=' font-semibold text-[15px] px-[19px] pt-[18px] pb-[25px]'>
        다가오는 축제 일정
      </h1>
      {festivalArr.length !== 0 ? (
        <ul className=' flex flex-col gap-[16px] pb-[30px]'>
          {festivalArr.map((dt, idx) => (
            <li className={`w-full px-[19px]`} key={dt.festivalTitle + idx}>
              <UpcomingScheduleCard {...dt} />
            </li>
          ))}
        </ul>
      ) : (
        <div className='w-full py-[100px] flex flex-col items-center justify-center gap-[9px]'>
          <ScheduleIcon />
          <p className='font-semibold text-[18px]'>축제 일정 없음</p>
          <p className='font-medium text-[#848484] text-[12px]'>
            다가오는 축제가 존재하지 않습니다.
          </p>
        </div>
      )}
    </section>
  );
};

export default UpcomingFestivalSchdule;
