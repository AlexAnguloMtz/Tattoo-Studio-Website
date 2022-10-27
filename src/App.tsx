import './App.css';
import { Nav } from './components/Nav/Nav';
import { BrowserRouter, Routes, useLocation } from "react-router-dom";
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
    </div>
  );
}

export default App;