import './sass/app.scss';

import { ErrorBoundary } from '@components/ErrorBoundary';
import { ErrorMessage } from '@components/ErrorMessage';
import { routes } from '@utils/routes';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
   const routeComponents = routes.map(({ path, element }, key) => (
      <Route path={path} Component={element} key={key} />
   ));

   return (
      <ErrorBoundary fallback={<ErrorMessage error={'Error in application'} />}>
         <div className='App'>
            <Routes>{routeComponents}</Routes>
         </div>
      </ErrorBoundary>
   );
};
