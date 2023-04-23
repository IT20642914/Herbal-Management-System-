
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoute from './routes/PublicRoutes';
import  HomePage from './Components/HomePage/Homepage';
import StorePage from './Components/StorePage/StorePage';
import AbountPage from './Components/aboutPage/AbountPage';
import { ToastContainer } from 'react-toastify';
import ProductDetails from './Components/common/ShoppingCart/components/ProductDetails/ProductDetails';
import Cart from './Components/common/ShoppingCart/Cart/Cart';
import { CssBaseline } from '@mui/material'
//import { useSelector } from 'react-redux'
function App() {
  return (
    <Router>
            <CssBaseline />
       <ToastContainer/>
    {/* <ScrollToTop /> */}
    <Routes>
      <Route path='/' element={<PublicRoute />}>
        <Route path='/' element={<HomePage />} />
      </Route>
      <Route path='/' element={<PublicRoute />}>
        <Route path='/store' element={<StorePage />} />
      </Route>
      <Route path='/' element={<PublicRoute />}>
      <Route  path="/product/:productId" element={<ProductDetails/>} />
    
      </Route>
      <Route path='/' element={<PublicRoute />}>
      <Route path="/cart" element={<Cart/>} />
      </Route>
      <Route path='/' element={<PublicRoute />}>
        <Route path='/about' element={<AbountPage />} />
      </Route>


      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
