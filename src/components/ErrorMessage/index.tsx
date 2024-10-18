import React, { FC } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { CenteredFlex, FullHeight, MainContainer } from '../../pages/styled';
import { colors } from '../../constants/colors';
import { MainTitle } from '../Title/styled';
import { Title } from '../Title';

interface ErrorMessageProps {
   error: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
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

export default ErrorMessage;
