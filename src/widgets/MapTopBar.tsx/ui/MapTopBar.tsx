import React from 'react';
import ChevronDownIcon from '@/shared/assets/icon/chevron_down.svg';
import SearchBar from '@/widgets/SearchBar/ui/SearchBar';
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/shared/ui/ToggleGroup/toggle-group';

interface Props {}

const toggleArr = ['주점', '먹거리', '이벤트', '일반', '의무실', '화장실'];

const MapTopBar: React.FC<Props> = ({}: Props) => {
  return (
    <header className='flex flex-col gap-[10px] pl-[22px] pt-[25px] pb-[14px] items-start shadow-bottom rounded-b-[23px]'>
      <button className='flex flex-row items-center gap-[6px]'>
        <p className='font-semibold text-[20px]'>건국대학교</p>
        <ChevronDownIcon />
      </button>
      <SearchBar />
      <ToggleGroup type='multiple'>
        {toggleArr.map((dt) => (
          <ToggleGroupItem key={dt} value={dt}>
            {dt}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </header>
  );
};

export default MapTopBar;
