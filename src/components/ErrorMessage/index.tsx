import { FC } from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { Title } from '../Title';

interface ErrorMessageProps {
   error: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
   return (
      <>
         <Header />
         <div className='main-container'>
            <div className='centered-flex'>
               <div className='full-height'>
                  <Title
                     preTitle={'Something went wrong'}
                     title={'Please reload the page!'}
                  />
                  <div className='main-title'>{error}</div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
};
