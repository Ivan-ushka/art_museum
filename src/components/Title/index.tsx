import React, { FC } from 'react';
import { MainTitle, PreTitle } from './styled';

interface PropsTitle {
   preTitle: string;
   title: string;
}

export const Title: FC<PropsTitle> = ({ preTitle, title }) => {
   return (
      <>
         <PreTitle>{preTitle}</PreTitle>
         <MainTitle>{title}</MainTitle>
      </>
   );
};
