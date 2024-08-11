'use client';
import BoothPage from '@/pages/booth/ui/Page';
import React from 'react';

const BoothPageWrapper = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <BoothPage id={params.id} />
    </>
  );
};

export default BoothPageWrapper;
