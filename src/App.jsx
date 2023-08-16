import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import { Route, Routes, Outlet } from "react-router-dom";
import Consulation from './components/Consulation/Consulation';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {

  return (
    <div id='app-container'>
      <Routes>
        <Route path="/" element={<> <Header /><Outlet /><Footer /></>}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path='consulation' element={<Consulation />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
