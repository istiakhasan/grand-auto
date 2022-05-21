import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Home/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';



function App() {
  return (
    <div>
      

      <Routes>
       <Route path='/' element={<Home />} />
      </Routes>
       <Footer />
        

  
    </div>
  );
}

export default App;
