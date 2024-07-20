import SearchBtn from '@/features/search/ui/SearchBtn/SearchBtn';
import { Input } from '@/shared/ui/Input/input';
import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className='flex w-full justify-center'>
      <div className='flex max-w-sm items-center space-x-2'>
        <Input type='email' placeholder='Email' />
        <div className=' translate-x-[-120%]'>
          <SearchBtn />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
