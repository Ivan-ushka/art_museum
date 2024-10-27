import { colors } from '@constants/colors';
import { CenteredFlex, FullHeight, MainContainer } from '@pages/styled';
import { FC } from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { Title } from '../Title';
import { MainTitle } from '../Title/styled';

interface ErrorMessageProps {
   error: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
   return (
      <>
         <Header />
         <MainContainer $backgroundColor={colors.background}>
            <CenteredFlex>
               <FullHeight>
                  <Title
                     preTitle={'Something went wrong'}
                     title={'Please reload the page!'}
                  />
                  <MainTitle>{error}</MainTitle>
               </FullHeight>
            </CenteredFlex>
         </MainContainer>
         <Footer />
      </>
   );
};
