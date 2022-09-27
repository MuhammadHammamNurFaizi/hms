import React from 'react'
import logohms from '../assets/logohms.png'
const Footer = () => {
  return (
    <footer class="bg-light p-5 mt-5">
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <a href="#">
                    <img src= {logohms} 
                    style={{width: '40px'}}/>
                </a>
                <span>Copyright @2022 | Created with pride by Kelompok 4</span>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer