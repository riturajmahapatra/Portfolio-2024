import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login.tsx';
import Error from './components/Error.tsx';
import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from 'react-error-boundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/admin',
    element: <Login />,
  },
  {
    path: '/',
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Error}>
      <RouterProvider router={router} />
      <Toaster />
    </ErrorBoundary>
  </React.StrictMode>
);
