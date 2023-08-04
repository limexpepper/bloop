import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import How from './pages/How';
import Footer from './components/Footer';

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how" element={<How />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
