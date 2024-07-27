'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';

import { cn } from '@/lib/utils';
import { buttonVariants } from '../Button/button';
import { format } from 'date-fns';
import { log } from 'console';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;
export type CustomProps = {
  showOnlyWeek?: boolean;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  showOnlyWeek = true,
  ...props
}: CalendarProps & CustomProps) {
  const getRemainingDatesInMonthExcludingCurrentWeek = (): Date[] => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    // 이번 달의 첫 번째 날과 마지막 날을 계산합니다.
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // 이번 주의 시작 날짜와 끝 날짜를 계산합니다.
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    const firstCalendarDay = new Date(firstDayOfMonth);
    firstCalendarDay.setDate(
      firstDayOfMonth.getDate() - firstDayOfMonth.getDay()
    );
    const endCalendarDay = new Date(lastDayOfMonth);
    endCalendarDay.setDate(lastDayOfMonth.getDate() - lastDayOfMonth.getDay());

    const remainingDates: Date[] = [];
    startOfWeek.setHours(0);
    endOfWeek.setHours(4);
    for (
      let day = new Date(firstCalendarDay);
      day <= endCalendarDay;
      day.setDate(day.getDate() + 1)
    ) {
      const currentDay = new Date(day);
      currentDay.setHours(2);
      if (currentDay < startOfWeek || currentDay > endOfWeek) {
        remainingDates.push(new Date(currentDay));
      }
    }

    return remainingDates;
  };

  const remainingDates = showOnlyWeek
    ? getRemainingDatesInMonthExcludingCurrentWeek()
    : [];

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      locale={ko}
      disabled={remainingDates}
      formatters={{
        formatCaption: (date, options) => format(date, 'LLLL', options),
      }}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: `${showOnlyWeek ? 'hidden' : 'flex'} pl-2 pt-1 relative items-center`,
        caption_label: ' text-[24px] font-bold',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute right-10',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-0 h-auto',
        cell: 'h-auto w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100'
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside:
          'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        day_disabled: 'hidden',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className='h-6 w-6' />,
        IconRight: ({ ...props }) => <ChevronRight className='h-6 w-6' />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
