import { FC } from 'react';

import { LoaderContainer, Spinner } from './styled';

interface LoaderProps {
   size?: number;
}

export const Loader: FC<LoaderProps> = ({ size = 50 }) => {
   return (
      <LoaderContainer size={size}>
         <Spinner />
      </LoaderContainer>
   );
};
