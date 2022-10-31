import './App.scss';
import { Nav } from './components/Nav/Nav';
import { BrowserRouter, Routes, useLocation } from "react-router-dom";
import { theLinks, routes } from './routing/routing';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';
import { FullScreenLayer } from './components/FullScreenLayer/FullScreenLayer';

function App() {

  const [isNavExpanded, setLinksExpanded] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <Nav links={theLinks} />
        <Routes>
          {routes()}
        </Routes>
        <Footer />
      </BrowserRouter>
      <FullScreenLayer className='landscape-only'>
        {<h1>La versión de escritorio sigue en construcción!</h1>}
      </FullScreenLayer>
    </div>
  );
}

export default App;