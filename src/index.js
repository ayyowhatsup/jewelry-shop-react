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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='forget-password' element={<ForgetPassword></ForgetPassword>}></Route>
          <Route path='cart' element={<Cart></Cart>}></Route>
          <Route path='collection/:collectionId' element={<Collection type="collection"></Collection>}></Route>
          <Route path='jewelry-category/:collectionId' element={<Collection type="jewelryCategory"></Collection>}></Route>
          <Route path='jewelry/:jewelryId' element={<Jewelry></Jewelry>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
