'use client';
import React from 'react';

import { usePathname } from 'next/navigation';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/shared/ui/Pagination/pagination';
const menuData = [
  { id: 'menu01', name: '홈', path: '/home' },
  { id: 'menu02', name: '지도', path: '/map' },
  { id: 'menu03', name: '웨이팅', path: '/waiting' },
  { id: 'menu04', name: '메뉴', path: '/menu' },
];
const NavigationBar: React.FC = () => {
  const pathName = usePathname();

  return (
    <Pagination>
      <PaginationContent>
        {menuData.map((dt) => (
          <PaginationItem>
            <PaginationLink href={dt.path} isActive={pathName === dt.path}>
              {dt.name}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

export default NavigationBar;
