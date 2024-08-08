import React from 'react';
import BackIcon from '@/shared/assets/icon/chevron_left.svg';
interface Props {}

const HeaderWithBackBtn: React.FC<Props> = ({}: Props) => {
  return (
    <header className='absolute top-0 w-full py-[23px] px-[20px] bg-transparent'>
      <BackIcon />
    </header>
  );
};

export default HeaderWithBackBtn;
