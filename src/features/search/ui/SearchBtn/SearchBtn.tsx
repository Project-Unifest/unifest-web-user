import React from 'react';
import SearchIcon from '@/shared/assets/icon/search.svg';
import { Button } from '@/shared/ui/Button/button';
interface Props {
  onClick: () => void;
}
const SearchBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={onClick}
      className='hover:bg-transparent'
    >
      <SearchIcon />
    </Button>
  );
};

export default SearchBtn;
