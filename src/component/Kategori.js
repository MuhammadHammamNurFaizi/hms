import React from 'react'
import shirts from '../assets/shirts.png'
import dress from '../assets/dress.png'
import shoes from '../assets/shoes.png'
import sunglasses from '../assets/sunglasses.png'
import sports from '../assets/sports.png'
const Kategori = () => {
  return (
    <div className="container mt-5">
            <div className="judul-kategori"
                style={{
                    backgroudColor: '#fff',
                    padding: '5px 10px'
            }}
            >
                <h5 className="text-center" 
                    style={{marginTop: '5px'}}>Kategori</h5>
            </div>
        <div className="row text-center row-container">
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-2">
                <div className="menu-kategori">
                    <a href="#Shirts"><img src= {shirts} alt="shirts" className="img-category mt-3"/></a>
                    <p className="mt-2">Pakaian Pria</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-2">
                <div className="menu-kategori">
                    <a href="#dress"><img src= {dress} alt="dress" className="img-category mt-3"/></a>
                    <p className="mt-2">Pakaian Wanita</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-2">
                <div className="menu-kategori">
                    <a href="#shoes"><img src= {shoes} alt="shoes" className="img-category mt-3"/></a>
                    <p className="mt-2">Sepatu</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-2">
                <div className="menu-kategori">
                    <a href="#sunglasses"><img src= {sunglasses} alt="sunglasses" className="img-category mt-3"/></a>
                    <p className="mt-2">Kacamata</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-2">
                <div className="menu-kategori">
                    <a href="#sport"><img src= {sports} alt="sport" className="img-category mt-3"/></a>
                    <p className="mt-2">Olahraga</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kategori;