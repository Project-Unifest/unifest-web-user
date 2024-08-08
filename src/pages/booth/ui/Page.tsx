import BoothBottomBar from '@/widgets/BoothBottomBar/ui/BoothBottomBar';
import BoothDescription from '@/widgets/BoothDescription/ui/BoothDescription';
import HeaderWithBackBtn from '@/widgets/HeaderWithBackBtn/ui/HeaderWithBackBtn';
import React from 'react';

interface Props {}

const BoothPage: React.FC<Props> = ({}: Props) => {
  return (
    <>
      <HeaderWithBackBtn />
      <BoothDescription />
      <BoothBottomBar />
    </>
  );
};

export default BoothPage;
