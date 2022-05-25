import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import AdminPrivateRoute from './Pages/Login/AdminPrivateRoute';
import AddProducts from './Pages/Dashboard/AddProducts';
import NotFound from './Pages/Shared/NotFound';
import Blog from './Pages/Blog/Blog';
import Portfolio from './Pages/Portfolio/Portfolio';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';



function App() {
  return (
    <div>
      
     <Navbar />
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/login' element={<Login />} />
       <Route path='/blog' element={<Blog />} />
       <Route path='/portfolio' element={<Portfolio />} />
       
       <Route path='/purchase/:toolsId' element={
         <PrivateRoute>
         <Purchase />
          </PrivateRoute>} />
       <Route path='dashboard' element={
         <PrivateRoute>
         <Dashboard /> 
        </PrivateRoute>}>
           <Route  path='myorder'  element={<MyOrder />}></Route>  
           <Route  index  element={<DashboardHome />}></Route>  
           <Route  path='myreview' element={<AddReview />}></Route>  
           <Route  path='myprofile' element={<MyProfile />}></Route>  
           <Route  path='makeadmin' element={<AdminPrivateRoute><MakeAdmin /></AdminPrivateRoute>}></Route>  
           <Route  path='addproduct' element={<AdminPrivateRoute><AddProducts /></AdminPrivateRoute>}></Route>  
           <Route  path='manageorders' element={<AdminPrivateRoute><ManageOrders /></AdminPrivateRoute>}></Route>  
           <Route  path='manageproducts' element={<AdminPrivateRoute><ManageProducts /></AdminPrivateRoute>}></Route>  
           <Route  path='payment/:paymentId' element={<Payment />}></Route>  
          </Route>
           <Route path='*' element={<NotFound />} />
      </Routes>
       <Footer />
        
     
       
     
       
     
       <ToastContainer />
    </div>
  );
}

export default App;
