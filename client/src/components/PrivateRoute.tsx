import { Navigate, useLocation } from 'react-router-dom';

interface ChildProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: ChildProps) => {
  // i was storing the loggedInuser in localStorage
  const isLoggedIn = localStorage.getItem('loggedInUser') !== null;
  const location = useLocation();
  if (!isLoggedIn) {
    return (
      <Navigate to="/you_arent_logged_in" replace state={{ from: location }} />
    );
  }

  return children;
};

export default PrivateRoute;
