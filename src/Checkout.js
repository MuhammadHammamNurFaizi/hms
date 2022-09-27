import React from 'react'
import Header from './component/Header'
import hoodie1 from './assets/hoodie1.jpg'
import sepatu1 from './assets/sepatu1.jpg'
import kacamata1 from './assets/kacamata1.jpg'
import Footer from './component/Footer'
import './checkout.css';

const Checkout = () => {
  return (
    <>
    <div>
        <Header />
    </div>
    <div class="container">
    <div class="box1">
        <table class="table table-responsive table-borderless table align-middle tableflex">
            <thead>
                <tr class="table-dark">
                    <th colspan="6" scope="col" class="table-atas">Pesananmu</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><a href="#"><i class="fa-solid fa-circle-minus"></i></a></th>
                    <td><img src={hoodie1.jpg} class="img-keranjang"/></td>
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
                </tr>
                <tr>
                    <th scope="row"><a href="#"><i class="fa-solid fa-circle-minus"></i></a></th>
                    <td><img src= {kacamata1} class="img-keranjang"/></td>
                    <td>Kacamata</td>
                    <td>Rp. 100.000</td>
                    <td>1</td>
                    <td>Rp. 100.000</td>
                </tr>
                <tr>
                    <td colspan="5"> Total Harga </td>
                    <td>Rp. 2.180.000</td>
                </tr>
            </tbody>
        </table>
        <table class="table table-responsive table-borderless table align-middle">
            <thead>
                <tr>
                    <th colspan="2" scope="col">Pengiriman dan Pembayaran</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="2">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Tulis alamat pengirimanmu disini"
                                aria-label="Tulis alamat pendirimanmu disini" aria-describedby="button-addon2"/>
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Tambah</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Pilih pengiriman</td>
                    <td>Pilih kurir</td>
                </tr>
                <tr>
                    <td>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Reguler</option>
                            <option value="2">Instan</option>
                            <option value="3">Next Day</option>
                        </select>
                    </td>
                    <td>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>AnterAja</option>
                            <option value="1">Ninja Xpress</option>
                            <option value="2">JNE</option>
                            <option value="3">J&T</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option selected>BRIVA</option>
                            <option value="1">Go Pay</option>
                            <option value="2">OVO Cash</option>
                            <option value="3">BNI Virtual Account</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="box2">
    <table class="table table-responsive table-borderless table align-middle tableflex">
        <thead>
            <tr class="table-dark">
                <th colspan="2" scope="col" class="table-atas">Ringkasan Belanja</th>
            </tr>
        </thead>
        <tr>
            <td colspan="2">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Tulis Promo Disini"
                        aria-label="Tulis Promo Disini" aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Klaim</button>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="2">Total Belanja</td>
        </tr>
        <tr>
            <td>Harga Barang (3 Barang)</td>
            <td>Rp 2.180.000</td>
        </tr>
        <tr>
            <td>Total Ongkos Kirim</td>
            <td>Rp 15.000</td>
        </tr>
        <tr>
            <td>Total Asuransi</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Total Bayar</td>
            <td>Rp 2.195.000</td>
        </tr>
        <td colspan="2">
            <div class="d-grid gap-2">
                <button class="btn btn-dark" type="button"/>Bayar
            </div>
        </td>
    </table>
</div>
<Footer />
</>
  )
}

export default Checkout