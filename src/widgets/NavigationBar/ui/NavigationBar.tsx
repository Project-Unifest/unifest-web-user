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
import ActivatedHomeIcon from '@/shared/assets/icon/activated_home_icon.svg';
import MapIcon from '@/shared/assets/icon/map_icon.svg';
import ActivatedMapIcon from '@/shared/assets/icon/activated_map_icon.svg';
import WaitingIcon from '@/shared/assets/icon/waiting_icon.svg';
import ActivatedWaitingIcon from '@/shared/assets/icon/activated_waiting_icon.svg';
import MenuIcon from '@/shared/assets/icon/menu_icon.svg';
import ActivatedMenuIcon from '@/shared/assets/icon/activated_menu_icon.svg';
import OnlyAppDialog from '@/widgets/OnlyAppDialog/ui/OnlyAppDialog';
import { Button, buttonVariants } from '@/shared/ui/Button/button';

const menuData: {
  id: string;
  name: string;
  path: string;
  icon: any;
  activatedIcon: any;
}[] = [
  {
    id: 'menu01',
    name: '홈',
    path: '/home',
    icon: HomeIcon,
    activatedIcon: ActivatedHomeIcon,
  },
  {
    id: 'menu02',
    name: '지도',
    path: '/map',
    icon: MapIcon,
    activatedIcon: ActivatedMapIcon,
  },
  {
    id: 'menu03',
    name: '웨이팅',
    path: '/waiting',
    icon: WaitingIcon,
    activatedIcon: ActivatedWaitingIcon,
  },
  {
    id: 'menu04',
    name: '메뉴',
    path: '/menu',
    icon: MenuIcon,
    activatedIcon: ActivatedMenuIcon,
  },
];
const NavigationBar: React.FC = () => {
  const pathName = usePathname();

  return (
    <Pagination className=' fixed bottom-0 left-0 bg-white z-40 shadow-top'>
      <PaginationContent className='w-full'>
        {menuData.map((dt) => (
          <PaginationItem
            className='w-1/4 flex flex-row justify-center '
            key={dt.id}
          >
            {dt.name === '웨이팅' ? (
              <OnlyAppDialog>
                <div
                  className={buttonVariants({
                    size: 'full_full',
                    variant: 'ghost',
                  })}
                >
                  <div className='flex flex-col items-center gap-1'>
                    <dt.icon />
                    <p className=' text-[11px] text-[#525252] font-normal'>
                      {dt.name}
                    </p>
                  </div>
                </div>
              </OnlyAppDialog>
            ) : (
              <PaginationLink
                href={dt.path}
                isActive={pathName === dt.path}
                className='w-full h-[56px]'
              >
                <div className='flex flex-col items-center gap-1'>
                  {pathName === dt.path ? <dt.activatedIcon /> : <dt.icon />}
                  <p
                    className={`text-[11px]  ${pathName === dt.path ? 'text-[#FF748A]' : 'text-[#525252]'} font-normal`}
                  >
                    {dt.name}
                  </p>
                </div>
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

export default NavigationBar;
