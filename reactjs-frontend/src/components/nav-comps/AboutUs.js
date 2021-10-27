import React from 'react'
import Map from '../pages-comps/Map'
import { Navbar } from './Navbar'
import imag from "../img/aboutus2.jpg"
import '../CSS/AboutUs.css'
import { Footer } from '../pages-comps/Footer'

export const AboutUs = () => {
    return (
        <>
            <Navbar/>
            <div className="aboutus-header">
                <div className="text-white">
                    <div className="container">
                        <div className="row">
                                <div className="col-md-6 text-center py-5">
                                    <h1 className= "display-5 fw-bold">WHO WE ARE</h1>
                                    <p className="fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div className="col-md-6 text-center py-4">
                                    <img className="smileface" src={imag}></img>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=" ctn-questions py-5 mt-10 mx-5">
                    <div className="text-black">
                        <div className=" text-center py-5">
                            <div className="row py-3 ctn-quest">
                                <div className="col">
                                    <h1>Why should you buy here? </h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                </div>
                                <div className="col">
                                    <h1>Why prefer us?</h1>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                </div>
                                <div className="col">
                                    <h1>What makes us unique?</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className=" open-hours text-center py-5">
                    <div className="text-black">
                        <div className="ctn-map">
                            <div className="row">
                            <h2>Opening Hours</h2>
                            <p>Monday - Friday: 8am - 8pm</p>
                            <p>Saturday - Sunday: 10am - 4pm</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-5">
                    <div className="text-black mx-5">
                        <div className="ctn-map py-5">
                            <div className="row row-map">
                                <h className="display-6">Where you can find us?</h>
                                <p className="py-4"> We are locate at Brooklyn, NY 11232</p>
                                    <Map/>
                            </div>
                        </div>
                    </div>
                </div>
        <Footer/>
                
        </>
    )
}

