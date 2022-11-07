import './App.scss';
import { Nav } from './components/Nav/Nav';
import { HashRouter, Routes } from "react-router-dom";
import { theLinks, routes } from './routing/routing';
import { Footer } from './components/Footer/Footer';
import { LoadScreen } from './components/LoadScreen/LoadScreen';
import { LoadingContext } from './context/loading-context';
import { useState } from 'react';
import { ScrollingManager } from './components/ScrollingManager/ScrollingManager';
import { LoadingManager } from './components/LoadingManager/LoadingChronometer';
import { ContactDataContext } from './context/contact-info-context';
import { contactData } from './data/contact-info';

function App() {

  const [isLoading, setLoading] = useState(true);

  return (
    <div className="app">
      <HashRouter>
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
          <ContactDataContext.Provider value={contactData}>
            <LoadingManager />
            <ScrollingManager />
            <LoadScreen />
            <Nav links={theLinks} />
            <Routes>
              {routes()}
            </Routes>
            <Footer />
          </ContactDataContext.Provider>
        </LoadingContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;