import React, { useContext, useRef, useState } from 'react'
import "./Contact.css"
import Phone from "../img/call.png"
import Email from "../img/email.png"
import Address from "../img/address.png" 
import emailjs from 'emailjs-com';
import { ThemeContext } from '../context'

function Contact() {

     const formRef= useRef( );
     const [done,setDone]=useState(false);
     const theme= useContext(ThemeContext);
     const darkMode = theme.state.darkMode;

     const handleSubmit = (e) => {
         e.preventDefault();
         emailjs.sendForm('service_xzmeiru', 'template_yw3zrn7', formRef.current, 'user_fX6aLQhjvsJeCPNWY1T2U')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      }); 
     }

    return (
        <div className='container'>
            <div className='c-bg'></div>
           <div className='c-wrapper'>
           <div className='c-left'>
               <h1 className='c-title'>
                Contact me.
               </h1>
               <div className='c-info'>
                 <div className='c-info-item'>
                      <img src={Phone} alt=" " className='c-icon' />
                      +92 336 0769778
                 </div>
                 <div className='c-info-item'>
                      <img src={Email} alt=" " className='c-icon' />
                      manu26636@gmail.com
                 </div>
                 <div className='c-info-item'>
                      <img src={Address} alt=" " className='c-icon' />
                       I 8/4, street no.111 , Islamabad.
                 </div>
               </div>
           </div>
           <div className='c-right'>
               <p className='c-desription'>
                    <b>What's your story ? </b>Get in touch. Always here for you.
               </p>
               
               <form ref={formRef} onSubmit={handleSubmit}>
               <input style={{backgroundColor : darkMode && "#333", borderRadius : darkMode && "3px", border : darkMode && "none", outlineColor: darkMode && "#000", color : darkMode && "#FFFFFF"}} type="text" placeholder='Name' name='user_name' />
               <input style={{backgroundColor : darkMode && "#333", borderRadius : darkMode && "3px", border : darkMode && "none", outlineColor: darkMode && "#000", color : darkMode && "#FFFFFF"}} type="text" placeholder='Subject' name='user_subject' />
               <input style={{backgroundColor : darkMode && "#333", borderRadius : darkMode && "3px", border : darkMode && "none", outlineColor: darkMode && "#000", color : darkMode && "#FFFFFF"}} type="email" placeholder='Email' name='user_email' />
               <textarea style={{backgroundColor : darkMode && "#333", borderRadius : darkMode && "3px", border : darkMode && "none", outlineColor: darkMode && "#000", color : darkMode && "#FFFFFF"}} rows={5} placeholder='Message' name='message' />
               <div className='last_message'>
               <button>Submit</button>
               <div className='thank'>
               {done && " Thank you, we will contact you soon "}
               </div>
               </div>
               </form>
           </div>
           </div>
        </div>
    );
};

export default Contact
