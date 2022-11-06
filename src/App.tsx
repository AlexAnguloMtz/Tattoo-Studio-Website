import './App.scss';
import { Nav } from './components/Nav/Nav';
import { HashRouter, Routes } from "react-router-dom";
import { theLinks, routes } from './routing/routing';
import { Footer } from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';

const loadingScreenVisibilityTimeout: number = 1000;

function App() {

  const [isLoadingScreenVisible, setLoadingScreenVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoadingScreenVisible(false), loadingScreenVisibilityTimeout);
    return () => clearTimeout(timeout);
  }, [isLoadingScreenVisible]);


  return (
    <div className="app">
      <HashRouter>
        <LoadingScreen isVisible={isLoadingScreenVisible} />
        <Nav links={theLinks} onLinkClick={() => setLoadingScreenVisible(true)} />
        <Routes>
          {routes()}
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;