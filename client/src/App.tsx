import Header from './components/Header';
import Home from './components/Home';
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
