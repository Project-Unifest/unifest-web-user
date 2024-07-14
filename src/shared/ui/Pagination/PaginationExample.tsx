import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from './pagination';

const PaginationExample: React.FC = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href='#'>홈</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' isActive>
            지도
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>웨이팅</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>메뉴</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationExample;
