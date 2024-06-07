import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Hero-Section/Home';
import Layout from './components/Layout';
import './index.css';
// import axios from 'axios';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { ReloadData, fetchPortfolioData } from './app/features/userDetailSlice';

function App() {
  const { portfolioData, reloadData } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPortfolioData());
  }, [dispatch]);

  useEffect(() => {
    console.log(portfolioData);
  }, [portfolioData]);

  useEffect(() => {
    if (reloadData) {
      dispatch(fetchPortfolioData());
      dispatch(ReloadData(false)); // Reset reloadData to false after triggering reload
    }
  }, [reloadData, dispatch]);
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
