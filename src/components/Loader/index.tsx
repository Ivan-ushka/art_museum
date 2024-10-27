import { FC } from 'react';

interface LoaderProps {
   size?: number;
}

export const Loader: FC<LoaderProps> = ({ size = 50 }) => {
   return (
      <div
         className='loader-container'
         style={{ width: `${size}px`, height: `${size}px` }}
      >
         <div className='spinner' />
      </div>
   );
};
