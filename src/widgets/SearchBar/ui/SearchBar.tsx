import SearchBtn from '@/features/search/ui/SearchBtn/SearchBtn';
import { Input } from '@/shared/ui/Input/input';
import React, { useState } from 'react';
import BackIcon from '@/shared/assets/icon/chevron_left.svg';
interface Props {
  onClickSearchBtn?: (word: string) => void;
  isBackBtn?: boolean;
  onClickBackBtn?: () => void;
}
const SearchBar: React.FC<Props> = ({
  onClickSearchBtn = () => {},
  isBackBtn = false,
  onClickBackBtn = () => {},
}) => {
  const [searchWord, setSearchWord] = useState('');

  return (
    <div className='flex w-full justify-center px-4'>
      <div className='flex w-full max-w-sm items-center  relative'>
        {isBackBtn && (
          <button
            className='absolute top-0 left-[8px] h-full flex justify-center items-center'
            onClick={onClickBackBtn}
          >
            <BackIcon />
          </button>
        )}
        <Input
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder='학교를 검색해보세요'
        />
        <div className='absolute top-0 right-0'>
          <SearchBtn onClick={() => onClickSearchBtn(searchWord)} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
