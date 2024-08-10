import React, { useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/shared/ui/Drawer/drawer';
import SearchBar from '@/widgets/SearchBar/ui/SearchBar';
import ChevronDownIcon from '@/shared/assets/icon/chevron_down.svg';
import SchoolFestivalInterestListEditor from '@/widgets/SchoolFestivalInterestListEditor/ui/SchoolFestivalInterestListEditor';
import Image from 'next/image';
import { Button } from '@/shared/ui/Button/button';
interface Props {}
const searchDataArr: {
  imgSrc: string;
  school: string;
  festivalName: string;
  date: string;
}[] = [
  {
    imgSrc: '',
    school: '건국대 서울캠',
    festivalName: '녹색지대',
    date: '05.06-05.08',
  },
  {
    imgSrc: '',
    school: '건국대 서울캠',
    festivalName: '녹색지대',
    date: '05.06-05.08',
  },
];
const FestivalMapDrawer: React.FC<Props> = ({}: Props) => {
  const [isSearchMode, setIsSearchMode] = useState(false);
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <div className='flex flex-row items-center gap-[6px]'>
            <p className='font-semibold text-[20px]'>건국대학교</p>
            <ChevronDownIcon />
          </div>
        </DrawerTrigger>
        <DrawerContent className='z-50 bg-white p-0'>
          <DrawerHeader className='p-0'>
            <div className='h-[90vh]'>
              <div className='w-full  pt-[20px] pb-[38px]'>
                <div className='w-full px-[20px]'>
                  <SearchBar />
                </div>
                {isSearchMode && (
                  <div>
                    <div className='pl-[21px] pt-[18px] w-full flex flex-row gap-[4px]'>
                      <p className='text-[12px] font-medium text-[#727276]'>
                        검색결과{' '}
                      </p>
                      <p className='text-[12px] font-medium text-[#131316]'>
                        총 1개
                      </p>
                    </div>
                    <ul className='flex flex-col w-full'>
                      {searchDataArr.map((dt, idx) => (
                        <li
                          className={`w-full px-[24px] flex flex-row py-[15px] items-center justify-between ${idx !== 0 && 'border-t border-t-[#E3E4EA]'}`}
                        >
                          <div className='flex flex-row items-center gap-[8px]'>
                            <Image
                              src={dt.imgSrc}
                              alt={`search img ${idx}`}
                              className='w-[55px] h-[55px]'
                            />
                            <div className='flex flex-col gap-[3px] items-start'>
                              <h1 className='text-[13px] font-normal text-[#131316]'>
                                {dt.school}
                              </h1>
                              <h2 className='text-[12px] font-bold text-[#131316]'>
                                {dt.festivalName}
                              </h2>
                              <p className='text-[12px] font-normal text-[#727276]'>
                                {dt.date}
                              </p>
                            </div>
                          </div>
                          <Button
                            variant={'outline'}
                            size={'sm'}
                            className='h-[29px] w-[57px] rounded-full font-medium text-[12px]'
                          >
                            추가
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {!isSearchMode && (
                <SchoolFestivalInterestListEditor schoolArr={['asf']} />
              )}
            </div>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FestivalMapDrawer;
