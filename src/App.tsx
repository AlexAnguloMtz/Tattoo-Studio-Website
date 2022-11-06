import './App.scss';
import { Nav } from './components/Nav/Nav';
import { HashRouter, Routes } from "react-router-dom";
import { theLinks, routes } from './routing/routing';
import { Footer } from './components/Footer/Footer';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';


function App() {
  return (
    <div className="app">
      <HashRouter>
        <LoadingScreen />
        <Nav links={theLinks} />
        <Routes>
          {routes()}
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;