import React from 'react';
import "../app/styles/contact.css";
import { PiMailboxBold } from "react-icons/pi";
import { BsTelephoneForward } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='contact-section'>
      <div className='contact-container'>
        <div className='contact-header'>
          <h2 className="contact-title" data-aos="flip-left">CONTACT</h2>
          <p className="contact-description" data-aos="flip-left">
            I&apos;d love to hear from you! Whether you have questions, feedback, or want to discuss potential collaborations, feel free to reach out. Your thoughts and inquiries are always welcome!
          </p>
        </div>

        <div className='contact-info' data-aos="flip-left">
          <div className='contact-item'>
            <PiMailboxBold size={30} />
            <span className='contact-email' data-aos="flip-left">iqra007@gmail.com</span>
          </div>
          <div className='contact-item' data-aos="flip-left">
            <BsTelephoneForward size={30} />
            <span className='contact-phone' data-aos="flip-left">(03) 9998888833</span>
          </div>
        </div>

        <div className='contact-form'>
          <div className='form-group'>
            <label htmlFor="name" data-aos="flip-left" className='form-label'>Name</label>
            <input type="text" className='form-input' id='name' />
          </div>
          <div className='form-group'>
            <label htmlFor="email" data-aos="flip-left" className='form-label'>Email</label>
            <input type="email" className='form-input' id='email' />
          </div>
          <div className='form-group'>
            <label htmlFor="msg" data-aos="flip-left" className='form-label'>Message</label>
            <textarea className='form-textarea' id='msg'></textarea>
          </div>

          <button className='submit-button'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
