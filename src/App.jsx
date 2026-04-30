import './css/App.css'
import Favourite from './pages/Favourites'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
