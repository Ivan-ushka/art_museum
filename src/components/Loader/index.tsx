import React from 'react';
import { LoaderContainer, Spinner } from './styled';

interface LoaderProps {
   size?: number;
}

const Loader: React.FC<LoaderProps> = ({ size = 50 }) => {
   return (
      <LoaderContainer size={size}>
         <Spinner />
      </LoaderContainer>
   );
};

export default Loader;
