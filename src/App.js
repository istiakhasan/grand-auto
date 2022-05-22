import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';



function App() {
  return (
    <div>
      
     
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/login' element={<Login />} />
       <Route path='/purchase/:toolsId' element={
         <PrivateRoute>
         <Purchase />
          </PrivateRoute>} />
      </Routes>
       <Footer />
        

  
    </div>
  );
}

export default App;
