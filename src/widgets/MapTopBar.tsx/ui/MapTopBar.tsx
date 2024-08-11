import React from 'react';
import SearchBar from '@/widgets/SearchBar/ui/SearchBar';
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/shared/ui/ToggleGroup/toggle-group';
import FestivalMapDrawer from '@/widgets/FestivalMapDrawer/ui/FestivalMapDrawer';

interface Props {
  changeMapToLocation: (lat: number, lng: number) => void;
}

const toggleArr = ['주점', '먹거리', '이벤트', '일반', '의무실', '화장실'];

const MapTopBar: React.FC<Props> = ({ changeMapToLocation }: Props) => {
  return (
    <header className='flex flex-col gap-[10px] pl-[22px] pt-[25px] pb-[14px] items-start shadow-bottom rounded-b-[23px] w-full'>
      <FestivalMapDrawer changeMapToLocation={changeMapToLocation} />
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
