'use client';
import React from 'react';
import BackIcon from '@/shared/assets/icon/chevron_left.svg';
import { useRouter } from 'next/navigation';
interface Props {}

const HeaderWithBackBtn: React.FC<Props> = ({}: Props) => {
  const router = useRouter();
  return (
    <header className='absolute top-0 w-full py-[23px] px-[20px] bg-transparent'>
      <button onClick={() => router.back()}>
        <BackIcon />
      </button>
    </header>
  );
};

export default HeaderWithBackBtn;
