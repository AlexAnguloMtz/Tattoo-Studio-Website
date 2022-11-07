import './App.scss';
import { Nav } from './components/Nav/Nav';
import { HashRouter, Routes } from "react-router-dom";
import { theLinks, routes } from './routing/routing';
import { Footer } from './components/Footer/Footer';
import { LoadScreen } from './components/LoadScreen/LoadScreen';
import { LoadingContext } from './context/loading-context';
import { useState } from 'react';
import { LoadingChronometer } from './components/LoadingChronometer/LoadingChronometer';
import { ScrollingManager } from './components/ScrollingManager/ScrollingManager';

function App() {

  const [isLoading, setLoading] = useState(true);

  return (
    <div className="app">
      <HashRouter>
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
          <LoadingChronometer />
          <ScrollingManager />
          <LoadScreen />
          <Nav links={theLinks} />
          <Routes>
            {routes()}
          </Routes>
          <Footer />
        </LoadingContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;