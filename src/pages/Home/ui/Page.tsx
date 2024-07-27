import AccoridonExample from '@/shared/ui/Accordion/AccoridonExample';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/Accordion/accordion';
import { Calendar } from '@/shared/ui/Calendar/calendar';
import PaginationExample from '@/shared/ui/Pagination/PaginationExample';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionContent>
            <Calendar />
          </AccordionContent>
          <AccordionTrigger></AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HomePage;
