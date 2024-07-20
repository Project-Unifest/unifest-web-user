import SearchBtn from '@/features/search/ui/SearchBtn/SearchBtn';
import { Input } from '@/shared/ui/Input/input';
import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className='flex w-full justify-center px-4'>
      <div className='flex w-full max-w-sm items-center space-x-2'>
        <Input placeholder='학교를 검색해보세요' />
        <div className=' translate-x-[-120%]'>
          <SearchBtn />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
