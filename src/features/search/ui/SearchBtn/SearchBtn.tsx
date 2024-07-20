import React from 'react';
import SearchIcon from '@/shared/assets/icon/search.svg';
import { Button } from '@/shared/ui/Button/button';

const SearchBtn: React.FC = () => {
  return (
    <Button variant='ghost' size='icon'>
      <SearchIcon />
    </Button>
  );
};

export default SearchBtn;
