import FestivalMapDrawer from '@/widgets/FestivalMapDrawer/ui/FestivalMapDrawer';
import MapTopBar from '@/widgets/MapTopBar.tsx/ui/MapTopBar';
import React from 'react';

interface Props {}

const MapPage: React.FC<Props> = ({}) => {
  return (
    <div>
      <MapTopBar />
      <FestivalMapDrawer />
    </div>
  );
};

export default MapPage;
