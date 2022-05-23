import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';



function App() {
  return (
    <div>
      
     <Navbar />
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/login' element={<Login />} />
       
       <Route path='/purchase/:toolsId' element={
         <PrivateRoute>
         <Purchase />
          </PrivateRoute>} />
       <Route path='dashboard' element={
         <PrivateRoute>
         <Dashboard /> 
          </PrivateRoute>}>
           <Route index  element={<MyOrder />}></Route>  
           <Route  path='myreview' element={<AddReview />}></Route>  
           <Route  path='myprofile' element={<MyProfile />}></Route>  
            
          </Route>
      </Routes>
       <Footer />
        
     
       
     
       
     
       <ToastContainer />
    </div>
  );
}

export default App;
