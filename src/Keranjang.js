import React from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import hoodie1 from './assets/hoodie1.jpg'
import sepatu1 from './assets/sepatu1.jpg'
import kacamata1 from './assets/kacamata1.jpg'
import './keranjang.css';

const Keranjang = () => {
  return (
    <>
    <Header />
    <div class="container">
    <div class="row row-keranjang">
        <div class="col">
            <table class="table table-responsive table-borderless table align-middle"> 
                <thead >
                  <tr class="table-dark">
                    <th scope="col" class="table-atas">Hapus</th>
                    <th scope="col">Gambar</th>
                    <th scope="col">Produk</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Jumlah</th>
                    <th scope="col">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><a href="#"><i class="fa-solid fa-circle-minus"></i></a></th>
                    <td><img src= {hoodie1} class="img-keranjang"/></td>
                    <td>Hoodie Pria/Wanita</td>
                    <td>Rp. 280.000</td>
                    <td>1</td>
                    <td>Rp. 280.000</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#"><i class="fa-solid fa-circle-minus"></i></a></th>
                    <td><img src= {sepatu1} class="img-keranjang"/></td>
                    <td>Sepatu Pria/Wanita</td>
                    <td>Rp. 1.800.000</td>
                    <td>1</td>
                    <td>Rp. 1.800.000</td>
                  </tr> <tr>
                    <th scope="row"><a href="#"><i class="fa-solid fa-circle-minus"></i></a></th>
                    <td><img src= {kacamata1} class="img-keranjang"/></td>
                    <td>Kacamata</td>
                    <td>Rp. 100.000</td>
                    <td>1</td>
                    <td>Rp. 100.000</td>
                  </tr>
                </tbody>
              </table>
        </div>
    </div>
</div>
<div class="container">
    <div class="row row-keranjang">
        <div class="col">
            <table class="table table-responsive table-borderless" > 
                <thead>
                    <tr>
                        <td colspan="6" class="table-dark">Total Keranjang Belanja</td>
                    </tr>
                </thead >
                <tbody>
                    <tr>
                        <td>Total Harga</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Rp. 2.180.000</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><div class="d-grid gap-2">
                        <a href="checkout.html"><button class="btn btn-dark" type="button">Checkout</button></a> 
                      </div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<Footer />        
    </>
  )
}

export default Keranjang