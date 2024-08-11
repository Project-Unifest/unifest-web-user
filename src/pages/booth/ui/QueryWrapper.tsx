import ReactQueryProviders from '@/shared/utils/react-query-provider';
import React from 'react';
import BoothPage from './Page';
interface Props {
  id: string;
}
const BoothQueryWrapper: React.FC<Props> = ({ id }) => {
  return (
    <ReactQueryProviders>
      <BoothPage id={id} />
    </ReactQueryProviders>
  );
};

export default BoothQueryWrapper;
