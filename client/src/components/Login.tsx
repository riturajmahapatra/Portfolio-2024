import React, { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import { FaEye, FaEyeSlash, FaPaperPlane } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import AdminPages from './Admin/AdminPages';
import toast from 'react-hot-toast';
import { useAppSelector } from '../app/hooks';

interface LoginCredentials {
  username: string;
  password: string;
  email: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: '',
    password: '',
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const portfolioData = useAppSelector((state) => state.app);
  console.log(portfolioData);
  /* login logout */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setIsLoggedIn(true);
      console.log('logged in');
      navigate('/adminpages');
    }
  }, [navigate]);

  /* handle change of forms */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        'https://portfolio-2024-server.vercel.app/api/v1/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        }
      );
      if (!response.ok) {
        toast.error('Wrong Credentials', {
          position: 'top-right',
        });
        throw new Error(`Login failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log('Login successful:', data);
      localStorage.setItem('loggedInUser', data.username);
      setIsLoggedIn(true);
    } catch (error) {
      (error as Error).message;
    } finally {
      setIsLoading(false);
    }
  };

  /* password eye */
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return isLoggedIn ? (
    <AdminPages />
  ) : (
    <form onSubmit={handleSubmit}>
      <div className=" flex items-center justify-center">
        <SectionHeading>Admin</SectionHeading>
      </div>
      <div className="flex  max-md:grid  items-center justify-center text-center gap-5">
        <input
          className="h-14  px-4 border rounded-lg borderBlack  dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="text"
          placeholder="username"
          name="username"
          id="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          className="h-14 px-4 border rounded-lg borderBlack  dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="email"
          id="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />

        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="password"
          className="h-14  px-4 border rounded-lg borderBlack  dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          id="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="group flex items-center pr-3"
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>

        <button
          type="submit"
          className=" flex group items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
        </button>
      </div>
    </form>
  );
};

export default Login;
