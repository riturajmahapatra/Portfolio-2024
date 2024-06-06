import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  const onLogout = () => {
    console.log('clicked');

    localStorage.removeItem('loggedInUser');

    console.log('logged out');

    navigate('/');
  };

  return (
    <div className="flex items-center justify-end">
      <button
        className="bg-red-500 text-white px-4 py-2 rounded border"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
