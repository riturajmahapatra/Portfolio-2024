import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Hero-Section/Home';
import Layout from './components/Layout';
import './index.css';
// import axios from 'axios';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchPortfolioData } from './app/features/userDetailSlice';

function App() {
  const portfolioData = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPortfolioData());
  }, [dispatch]);

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
