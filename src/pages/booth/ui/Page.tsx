'use client';
import ReactQueryProviders from '@/shared/utils/react-query-provider';
import BoothBottomBar from '@/widgets/BoothBottomBar/ui/BoothBottomBar';
import BoothDescription from '@/widgets/BoothDescription/ui/BoothDescription';
import HeaderWithBackBtn from '@/widgets/HeaderWithBackBtn/ui/HeaderWithBackBtn';
import React from 'react';

interface Props {
  id: string;
}

const BoothPage: React.FC<Props> = ({ id }: Props) => {
  return (
    <>
      <ReactQueryProviders>
        <HeaderWithBackBtn />
        <BoothDescription id={id} />
        <BoothBottomBar />
      </ReactQueryProviders>
    </>
  );
};

export default BoothPage;
