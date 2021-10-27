import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Navbar } from './Navbar';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'form-contact', e.target, 'user_HDGAsK2rBedrtar84PVMu')
      .then(() => {
            alert("Email sent, awesome!");
      }, () => {
            alert("Oops, something went wrong. Try again");
      });
  };

  return (
    <>
    <Navbar/>
    <div className=" main-contact">
        <div className="row">
            <div className="card border-0 col-md-6 offset-md-3 offset-md-3 bg-transparent">
              <form ref={form} onSubmit={sendEmail} className="ctn-contact ">
              <h4 className="text-center">Do you have any questions or concerns?</h4>
              <div className="form-group mx-3 py-2">
              <label className="form-label">Name </label>
        
              <input className="form-label" type="name" name="name" placeholder='Enter your name...' required/>
              <br/>
              <label  className="form-label">Email </label>
              <br/>
              <input  className="form-label" type="email" name="from_email" required placeholder="Enter your email..." />
              <br/>
              <label className="form-label">Subject </label>
              <br/>
              <input  className="form-label" type="text" name="subject" placeholder="Enter your subject..."/>
              <br/>
              <label  className="form-label">Message </label>
              <br/>
              <textarea name="message" placeholder='Write a message...' required id='mesg' className="form-control" />
              <br/>
              <input type="submit"className="btn btn-warning" value="Send" />
              <br/>
              </div>
              </form>
             </div>
          </div>

    </div>
    </>
    

  );
};