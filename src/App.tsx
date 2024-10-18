import React from 'react';
import AppRouter from './AppRouter';
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
   return (
      <ErrorBoundary fallback={<ErrorMessage error={'Error in application'} />}>
         <div className='App'>
            <AppRouter />
         </div>
      </ErrorBoundary>
   );
};

export default App;
