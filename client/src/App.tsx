import Header from './components/Header';
import Home from './components/Hero-Section/Home';
import Layout from './components/Layout';
import './index.css';

function App() {
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
