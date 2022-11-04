import './App.scss';
import { Nav } from './components/Nav/Nav';
import { BrowserRouter, Routes } from "react-router-dom";
import { theLinks, routes } from './routing/routing';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav links={theLinks} />
        <Routes>
          {routes()}
        </Routes>
        <Footer />
      </BrowserRouter>
      {/*<FullScreenLayer className='landscape-only'>
        {<h1>La versión de escritorio sigue en construcción!
          Te invitamos a visitar la página en un móvil</h1>}
        </FullScreenLayer>*/}
    </div>
  );
}

export default App;