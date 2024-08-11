'use client';
import BoothQueryWrapper from '@/pages/booth/ui/QueryWrapper';
import React from 'react';

const BoothPageWrapper = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <BoothQueryWrapper id={params.id} />
    </>
  );
};

export default BoothPageWrapper;
