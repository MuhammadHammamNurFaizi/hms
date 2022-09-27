import React from 'react'
import kaos1 from '../assets/kaos1.jpg'
import jacket1 from '../assets/jacket1.jpg'
import sepatu1 from '../assets/sepatu1.jpg'
import kacamata1 from '../assets/kacamata1.jpg'
import hoodie1 from '../assets/hoodie1.jpg'
import sepatu2 from '../assets/sepatu2.jpg'

const Produk = () => {
  return (
    <div class="container mt-5">
    <div class="judul-produk" 
                style={{backgroundColor: '#fff', 
                        padding: '5px 10px'}}>
        <h5 class="text-center" 
                style={{marginTop: '5px'}}>Produk</h5>
    </div>
    <div class="product">
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-4 col-6 mt-2">
                <div class="card">
                    <img src= {kaos1} class="card-img-top" alt="..." width="200" height="200"/>
                    <div class="card-body">
                        <h6 class="card-title">Kaos Pria</h6>
                        <p class="card-text mt-3">Rp 150.000</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-4 col-6 mt-2">
                <div class="card">
                    <img src= {jacket1} class="card-img-top" alt="..." width="200" height="200"/>
                    <div class="card-body">
                        <h6 class="card-title">Jacket Pria</h6>
                        <p class="card-text mt-3">Rp 320.000</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-4 col-6 mt-2">
                <div class="card">
                    <img src= {sepatu1} class="card-img-top" alt="..." width="200" height="200"/>
                    <div class="card-body">
                        <h6 class="card-title">Sepatu Pria/Wanita</h6>
                        <p class="card-text mt-3">Rp 1.800.000</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-4 col-6 mt-2">
                <div class="card">
                    <img src= {kacamata1} class="card-img-top" alt="..." width="200" height="200"/>
                    <div class="card-body">
                        <h6 class="card-title">Kacamata</h6>
                        <p class="card-text mt-3">Rp 100.000</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-4 col-6 mt-2">
                <div class="card">
                    <img src= {hoodie1} class="card-img-top" alt="..." width="200" height="200"/>
                    <div class="card-body">
                        <h6 class="card-title">Hoodie Pria/Wanita</h6>
                        <p class="card-text mt-3">Rp 280.000</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-4 col-6 mt-2">
                <div class="card">
                    <img src= {sepatu2} class="card-img-top" alt="..." width="200" height="200"/>
                    <div class="card-body">
                        <h6 class="card-title">Sepatu Pria/Wanita</h6>
                        <p class="card-text mt-3">Rp 699.000</p>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</div>

  )
}

export default Produk