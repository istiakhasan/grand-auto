import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Home/Header';



function App() {
  return (
    <div>
      
    
      <Routes>
      <Route path='/' element={<Header />} />
      </Routes>
  
        

  
    </div>
  );
}

export default App;
