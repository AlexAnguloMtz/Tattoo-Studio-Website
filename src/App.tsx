import './App.css';
import { Nav } from './components/Nav/Nav';
import { BrowserRouter, Routes } from "react-router-dom";
import { theLinks, routes } from './routing/routing';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav links={theLinks} />
        <Routes>
          {routes()}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
