import React from 'react';
import ScrabIcon from '@/shared/assets/icon/scrab_icon.svg';
import { Button } from '@/shared/ui/Button/button';
import OnlyAppDialog from '@/widgets/OnlyAppDialog/ui/OnlyAppDialog';
interface Props {}

const BoothBottomBar: React.FC<Props> = ({}: Props) => {
  return (
    <div className='fixed p-[15px] gap-[18px] bottom-0 w-full flex items-center shadow-top bg-white'>
      <div className='flex flex-col gap-[3px] items-center px-[12px] translate-y-[4px] cursor-pointer'>
        <OnlyAppDialog>
          <ScrabIcon />
          <p>76</p>
        </OnlyAppDialog>
      </div>
      <div className='flex-1'>
        <OnlyAppDialog>
          <Button size={'full_lg'}>웨이팅 하기</Button>
        </OnlyAppDialog>
      </div>
    </div>
  );
};

export default BoothBottomBar;
