import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login.tsx';
import Error from './components/Error.tsx';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import AdminPages from './components/Admin/AdminPages.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/admin',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/adminpages',
    element: (
      <PrivateRoute>
        <AdminPages />
      </PrivateRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster />
  </Provider>
);
