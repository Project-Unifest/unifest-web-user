import React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui/Drawer/drawer';
import SearchBar from '@/widgets/SearchBar/ui/SearchBar';
import SchoolFestivalInterestList from '@/widgets/SchoolFestivalInterestList/ui/SchoolFestivalInterestList';
import ChevronDownIcon from '@/shared/assets/icon/chevron_down.svg';
interface Props {}

const FestivalMapDrawer: React.FC<Props> = ({}: Props) => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <div className='flex flex-row items-center gap-[6px]'>
            <p className='font-semibold text-[20px]'>건국대학교</p>
            <ChevronDownIcon />
          </div>
        </DrawerTrigger>
        <DrawerContent className='z-50 bg-white'>
          <DrawerHeader>
            <div className='w-full border-b-[8px] border-b-[#F1F3F7] px-[20px] pt-[20px] pb-[38px]'>
              <SearchBar />
            </div>
            <SchoolFestivalInterestList schoolArr={['asf']} />
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FestivalMapDrawer;
