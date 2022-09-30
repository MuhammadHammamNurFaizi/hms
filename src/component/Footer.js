import React from 'react'
import logohms from '../assets/logohms.png'
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer class="bg-light p-5 mt-5">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <NavLink to="#">
                            <img src={logohms} alt='' width="40px" />
                        </NavLink>
                        <span>Copyright @2022 | Created with pride by Kelompok 4</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer