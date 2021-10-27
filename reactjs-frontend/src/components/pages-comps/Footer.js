import React from 'react'
import { AiFillFacebook, AiFillTwitterCircle, AiOutlineWhatsApp, AiFillInstagram} from "react-icons/ai";

export const Footer = () => {
    return (
<div class="footer">

  <footer className="bg-dark text-center text-white">
    <div className="container p-4 pb-0">
        <section className="mb-4">
        <a class="btn btn-outline-light btn-floating m-2" href="https://www.facebook.com/" role="button"
            ><AiFillFacebook/></a>

        <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/" role="button"
            ><AiFillTwitterCircle/></a>

        <a class="btn btn-outline-light btn-floating m-1" href="https://www.whatsapp.com/" role="button"
            ><AiOutlineWhatsApp/></a>

        <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/" role="button"
            ><AiFillInstagram/></a>
        </section>
    </div>

    <div class="text-center p-3">
        © 2021 Copyright:
        <a class="text-white" href="#">Gabriela Guayara</a>
    </div>
</footer>
  </div>

    )
}
