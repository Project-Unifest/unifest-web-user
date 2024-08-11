import ReactQueryProviders from '@/shared/utils/react-query-provider';
import MapPage from '@/widgets/MapPage/ui/MapPage';
import React from 'react';

const MapQueryWrapper: React.FC = () => {
  return (
    <ReactQueryProviders>
      <MapPage />
    </ReactQueryProviders>
  );
};

export default MapQueryWrapper;
