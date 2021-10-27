import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slice1 from "../img/slice1.jpg"
import slice2 from "../img/slice2.jpg"
import slice3 from "../img/slice3.jpg"
import '../CSS/products.css'
import { Navbar } from '../nav-comps/Navbar';

export const ProductsHeader = () => {
    return (
        <>
        <Navbar/>
            <div className='carusel text-center '>
                <Carousel interval={null}>
                    <Carousel.Item>
                         <h3 className="display-1 brandname text-black mt-5">Y'ANBAL</h3>
                        <img className='d-block' src={slice1} alt='...' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3 className="display-1 brandname text-white black mt-5">AVON</h3>
                        <img className='d-block' src={slice2} alt='...' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3 className="display-1 brandname text-white black mt-5">L'BEL</h3>
                        <img className='d-block' src={slice3} alt='...' />
                    </Carousel.Item>
                </Carousel>
            </div>
            </>
    )
}
