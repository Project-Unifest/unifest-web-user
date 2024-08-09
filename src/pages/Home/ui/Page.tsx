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
          <AccordionOuter>
            <Calendar showOnlyWeek={true} />
          </AccordionOuter>
          <AccordionContent>
            <Calendar showOnlyWeek={false} />
          </AccordionContent>
          <AccordionTrigger></AccordionTrigger>
        </AccordionItem>
      </Accordion>
      <TodayFestivalSchedule />
    </div>
  );
};

export default HomePage;
