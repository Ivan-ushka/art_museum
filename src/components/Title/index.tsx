import { FC } from 'react';

interface PropsTitle {
   preTitle: string;
   title: string;
}

export const Title: FC<PropsTitle> = ({ preTitle, title }) => {
   return (
      <>
         <div className='pre-title'>{preTitle}</div>
         <div className='main-title'>{title}</div>
      </>
   );
};
