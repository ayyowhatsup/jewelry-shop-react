import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login/Login';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword'
import Register from './pages/Register/Register';
import Collection from './pages/Collection/Collection';
import Jewelry from './pages/Jewelry/Jewelry';
import NotFound from './pages/NotFound/NotFound';
import Cart from './pages/Cart/Cart';
import RequireAuth from './RequireAuth';
import Payment from "./Payment/Payment"
import { UserProvider } from './UserContext';
import { CartProvider } from './CartContext';
import Account from './pages/Account/Account';
import Bill from './pages/Bill/Bill'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path='login' element={<Login></Login>}></Route>
              <Route path='forget-password' element={<ForgetPassword></ForgetPassword>}></Route>
              <Route path='cart' element={<Cart></Cart>}></Route>
              <Route path='collection/:collectionId' element={<Collection></Collection>}></Route>
              <Route path='jewelry/:jewelryId' element={<Jewelry></Jewelry>}></Route>
              <Route path='register' element={<Register></Register>}></Route>
              <Route path='*' element={<NotFound></NotFound>}></Route>
              <Route path='account' element={<RequireAuth><Account></Account></RequireAuth>}></Route>
              <Route path='account/bill/:billId' element={<RequireAuth><Bill></Bill></RequireAuth>}></Route>

            </Route>
            <Route path='/payment' element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>
          </Routes>
        </CartProvider>

      </UserProvider>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
