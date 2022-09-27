import React from 'react'
import img1 from '../assets/img1.jpg'
import vans from '../assets/vans.gif'

const Carousel = () => {
  return (
    <div className="container">
    <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>

        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src= {img1} className="d-block img-fluid" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src= {vans} className="d-block img-fluid" alt="..."/>
            </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>
  )
}

export default Carousel;