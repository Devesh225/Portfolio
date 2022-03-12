import React, { useRef } from 'react'
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t5jslks', 'template_o7nk48z', form.current, 'lvHbBy3y4cOdhJiHl')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };


  return (
    <div id='contact' className='contact'>
        <h1>Contact Me</h1>
        <h4>Can I help you with something?</h4>
        <div className="container contact__container">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Full Name' required/>
                <input type="email" name='email' placeholder='Email' required/>
                <textarea name="message" rows="10" placeholder='Your Message' required />
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact;