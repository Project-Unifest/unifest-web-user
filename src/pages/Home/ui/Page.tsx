import AccoridonExample from '@/shared/ui/Accordion/AccoridonExample';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionOuter,
  AccordionTrigger,
} from '@/shared/ui/Accordion/accordion';
import { Calendar } from '@/shared/ui/Calendar/calendar';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <Accordion type='single' collapsible>
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
    </div>
  );
};

export default HomePage;
