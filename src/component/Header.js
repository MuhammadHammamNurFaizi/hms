import React from 'react'
import logohms from '../assets/logohms.png'
import shop16 from '../assets/shop16.png'
import bell16 from '../assets/bell16.ico'
import house16 from '../assets/house16.ico'
import search16 from '../assets/search16.ico'
import './Homepage.css'
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">

        <a className="navbar-brand" href="/tugas hms/html/homepage.html">
            <a className="navbar-brand" href="/tugas hms/html/homepage.html">
                <img src= {logohms} alt="" width="60" height="60" className="d-inline-block"/>
                rise <strong>Store</strong>
            </a>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto my-4 my-lg-0" role="search">
                <input className="form-control me-2" type="search" id="search-item" placeholder="Search" onkeyup="search()"/>
                <button className="btn btn-light" type="submit"><img src= {search16} alt="search"/></button>
            </form>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to=""><img src={house16} alt="bell"/></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="./Keranjang.js"><img src={shop16} alt="keranjang"/></NavLink>
                </li> 
                <li className="nav-item">
                    <NavLink className="nav-link" to="notifikasi.html"><img src={bell16} alt="bell"/></NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#Kategori" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">Kategori</NavLink>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#Fashion Pria">Fashion Pria</a></li>
                        <li><a className="dropdown-item" href="#Fashion Wanita">Fashion Wanita</a></li>
                        <li><a className="dropdown-item" href="#Olahraga">Sepatu</a></li>
                        <li><a className="dropdown-item" href="#Olahraga">Kacamata</a></li>
                        <li><a className="dropdown-item" href="#Olahraga">Olahraga</a></li>
                    </ul>
                </li>
                <li className="nav-item me-2">
                    <NavLink className="nav-link" to="Login.js">Daftar</NavLink>

                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="Login.js">Masuk</NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Header