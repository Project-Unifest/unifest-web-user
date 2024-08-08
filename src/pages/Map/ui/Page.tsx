'use client';
import Map from '@/features/map/ui/Map/Map';
import MapTopBar from '@/widgets/MapTopBar.tsx/ui/MapTopBar';
import React from 'react';

interface Props {}

const MapPage: React.FC<Props> = ({}) => {
  return (
    <div className='flex flex-col w-full'>
      <MapTopBar />
      <Map />
    </div>
  );
};

export default MapPage;
