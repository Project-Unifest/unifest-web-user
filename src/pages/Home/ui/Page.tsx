import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionOuter,
  AccordionTrigger,
} from '@/shared/ui/Accordion/accordion';
import { Calendar } from '@/shared/ui/Calendar/calendar';
import TodayFestivalSchedule from '@/widgets/TodayFesitivalSchedule/ui/TodayFestivalSchedule';
// import UpcomingFestivalSchdule from '@/widgets/UpcomingFestivalSchdule/ui/UpcomingFestivalSchdule';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <Accordion type='single' collapsible defaultValue='item-1'>
        <AccordionItem value='item-1'>
          <AccordionOuter className='px-[19px] py-[27px]'>
            <Calendar showOnlyWeek={true} />
          </AccordionOuter>
          <AccordionContent className='px-[19px] py-[27px]'>
            <div className='w-full relative'>
              <div className='w-full flex flex-row items-center gap-[16px] absolute top-[40px] left-[10px]'>
                <div className='before:w-[7px] before:h-[7px] before:rounded-full before:bg-[#1FC0BA] flex items-center gap-[6px] text-medium text-[12px] text-[#727276]'>
                  1개
                </div>
                <div className='before:w-[7px] before:h-[7px] before:rounded-full before:bg-[#FF8A1F] flex items-center gap-[6px] text-medium text-[12px] text-[#727276]'>
                  2개
                </div>
                <div className='before:w-[7px] before:h-[7px] before:rounded-full before:bg-[#FF5858] flex items-center gap-[6px] text-medium text-[12px] text-[#727276]'>
                  3개 이상
                </div>
              </div>
              <Calendar showOnlyWeek={false} />
            </div>
          </AccordionContent>
          <AccordionTrigger></AccordionTrigger>
        </AccordionItem>
      </Accordion>
      <TodayFestivalSchedule />
    </div>
  );
};

export default HomePage;
