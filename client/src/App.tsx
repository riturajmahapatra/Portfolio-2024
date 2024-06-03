import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Hero-Section/Home';
import Layout from './components/Layout';
import './index.css';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { SetPortFolioData } from './app/features/userDetailSlice';

function App() {
  const dispatch = useAppDispatch();
  const portfolioData = useAppSelector((state) => state.app);
  const getPortfolio = async () => {
    const response = await axios.get('http://localhost:8500/api/v1/data');
    try {
      const tryResponse = await response.data;
      dispatch(SetPortFolioData(tryResponse));
      console.log(tryResponse);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  useEffect(() => {
    console.log(portfolioData);
  }, [portfolioData]);

  return (
    <>
      <Layout>
        <Header />
        <Home />
      </Layout>
    </>
  );
}

export default App;
