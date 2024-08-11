import React from 'react';
import SearchBar from '@/widgets/SearchBar/ui/SearchBar';
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/shared/ui/ToggleGroup/toggle-group';
import FestivalMapDrawer from '@/widgets/FestivalMapDrawer/ui/FestivalMapDrawer';
import { interestFestival } from '@/shared/store/types/festival';

interface Props {
  changeMapToLocation: (lat: number, lng: number) => void;
  checkedInterestFestival: interestFestival | undefined;
  setCheckedInterestFestival: React.Dispatch<
    React.SetStateAction<interestFestival | undefined>
  >;
  checkedToggleArr: string[];
  setCheckedToggleArr: React.Dispatch<React.SetStateAction<string[]>>;
}

const toggleArr = [
  { value: 'BAR', key: '주점' },
  { value: 'FOOD', key: '먹거리' },
  { value: 'EVENT', key: '이벤트' },
  { value: 'NORMAL', key: '일반' },
  { value: 'MEDICAL', key: '의무실' },
  { value: 'TOILET', key: '화장실' },
];

const MapTopBar: React.FC<Props> = ({
  changeMapToLocation,
  checkedInterestFestival,
  setCheckedInterestFestival,
  checkedToggleArr,
  setCheckedToggleArr,
}: Props) => {
  return (
    <header className='flex flex-col gap-[10px] pl-[22px] pt-[25px] pb-[14px] items-start shadow-bottom rounded-b-[23px] w-full'>
      <FestivalMapDrawer
        changeMapToLocation={changeMapToLocation}
        checkedInterestFestival={checkedInterestFestival}
        setCheckedInterestFestival={setCheckedInterestFestival}
      />
      <SearchBar />
      <ToggleGroup
        type='multiple'
        value={checkedToggleArr}
        onValueChange={(e) => setCheckedToggleArr(e)}
      >
        {toggleArr.map((dt) => (
          <ToggleGroupItem key={dt.key} value={dt.value}>
            {dt.key}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </header>
  );
};

export default MapTopBar;
