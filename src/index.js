import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './component/Header.js';
import Carousel from './component/Carousel.js';
import Kategori from './component/Kategori.js';
import Produk from './component/Produk.js';
import Footer from './component/Footer.js';
import './component/Homepage.css'
import Login from './component/Login.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Carousel />
    <Kategori />
    <Produk />
    <Footer />
    <Login />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
