'use client';
import React from 'react';

import { usePathname } from 'next/navigation';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/shared/ui/Pagination/pagination';
import HomeIcon from '@/shared/assets/icon/home_icon.svg';
import MapIcon from '@/shared/assets/icon/map_icon.svg';
import WaitingIcon from '@/shared/assets/icon/waiting_icon.svg';
import MenuIcon from '@/shared/assets/icon/menu_icon.svg';

const menuData = [
  { id: 'menu01', name: '홈', path: '/home', icon: HomeIcon },
  { id: 'menu02', name: '지도', path: '/map', icon: MapIcon },
  { id: 'menu03', name: '웨이팅', path: '/waiting', icon: WaitingIcon },
  { id: 'menu04', name: '메뉴', path: '/menu', icon: MenuIcon },
];
const NavigationBar: React.FC = () => {
  const pathName = usePathname();

  return (
    <Pagination className=' fixed bottom-0 left-0 bg-white'>
      <PaginationContent className='w-full'>
        {menuData.map((dt) => (
          <PaginationItem
            className='w-1/4 flex flex-row justify-center '
            key={dt.id}
          >
            <PaginationLink
              href={dt.path}
              isActive={pathName === dt.path}
              className='w-full h-[56px]'
            >
              <div className='flex flex-col items-center gap-1'>
                <dt.icon />
                <p className=' text-[11px] text-[#525252] font-normal'>
                  {dt.name}
                </p>
              </div>
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

export default NavigationBar;
