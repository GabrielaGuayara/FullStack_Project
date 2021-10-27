import React from 'react'
import { useHistory } from "react-router-dom";
import brand1 from "../img/brand1.jpg"
import brand2 from "../img/brand2.jpg"
import brand3 from "../img/brand3.jpg"
import video from "../img/video.mp4"
import { Contact } from '../nav-comps/Contact';

export const Body = () => {
    let history = useHistory();

    const handleClick = ()=> {
      history.push("/products-list");
    }


    return (
        <>
        <div className="py-5">
            <div className="brands-ctn py-5 ">
                <h1 className="text-center fw-bold">Brands</h1>
                    <div className="brand-cards row text-center">
                            <div className=" card col-md-3 mx-10">
                                <h4 className="py-3">Yanbal</h4>
                                <img className="card-img-top brands-imag" src= {brand1} alt="perfume"/>
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                </div>
                            </div>
                            <div className="card col-md-3 mx-10">
                                 <h4 className="py-3">Avon</h4>
                                <img className="card-img-top brands-imag" src= {brand2} alt="perfume" />
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                 </div>
                            </div>
                            <div className="card col-md-3 mx-10">
                                <h4 className="py-3">L'bel</h4>
                                <img className="card-img-top brands-imag" src= {brand3} alt="perfume"/>
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                </div>
                            </div>
                        </div>
                        <div className="ctn py-4 text-center">
                            <button className="btn btn-secondary btn-rounded"  onClick={handleClick}>View Products</button>
                    
                        </div>
                    </div>
                </div>
                <div className="row py-3 text-center w-50" >
                    <h1>High-Quality Products</h1>
                    <div className="embed-responsive embed-responsive-16by9" > 
                        <video className="container" width="500" height="400" controls loop autoPlay>
                        <source src={video} type="video/mp4"/>
                        </video>
                    </div>
            </div>

        </>
    )
}
