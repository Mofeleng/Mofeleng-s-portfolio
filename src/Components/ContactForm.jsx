import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import '../css/ContactForm.css';
import useEmailValidate from '../Hooks/useEmailValidate';

function ContactForm() {
    const [ name, setName ] = useState('');
    const [ nameError, setNameError ] = useState(null);

    const [ email, setEmail ] = useState('');
    const [ emailError, setEmailError ] = useState(null);

    const [ message, setMessage ] = useState('');
    const [ messageError, setMessageError ] = useState(null);

    const [ isSuccess, setIsSuccess ] = useState(null);
    const [ error, setError ] = useState(null);

    const [ btnMsg, setBtnMsg ] = useState('Send email');

    const SERVICEID = import.meta.env.VITE_EMAILJS_SERVICEID;
    const TEMPLATEID = import.meta.env.VITE_EMAILJS_TEMPLATEID;
    const PUBLICKEY = import.meta.env.VITE_EMAILJS_PUBLICKEY;

    const sendEmail = (e) => {
        e.preventDefault();

        if (!name) {
            return setNameError("Please fill in your name");
        }
        if (!email) {
            return setEmailError("Please fill in your email");
        }
        if (!message) {
            return setMessageError("Please write a message.");
        }

        if (!useEmailValidate(email)) {
            return setEmailError("Please use a valid email address");
        }

        setBtnMsg('Sending...')
        
        const templateParams = {
            reply_to: email,
            from_name: name,
            message: message
        };
        
        emailjs.send(SERVICEID,TEMPLATEID, templateParams, PUBLICKEY)
            .then((response) => {
               setIsSuccess(true);
               setError(null);
            }, (err) => {
               setError(true);
               setIsSuccess(null);
            });

    }

    const resetFormResponseState = () => {
        setIsSuccess(null);
        setError(null);
    }

    const resetForm = () => {
        resetFormResponseState();
        setName('');
        setEmail('');
        setMessage('');
    }
  return (

    <form>
        {!isSuccess && !error ? (
            <>
                <input type="text" placeholder='Your name' value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    setNameError(null);
                }}
                />
                <span className="text_red">{nameError}</span>
                <input type="text" placeholder='Your email' value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(null);
                    }}
                />
                <span className="text_red">{emailError}</span>
                <textarea placeholder={`Hey. I'd like us to work together on...`} value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                        setMessageError(null);
                    }}
                ></textarea>
                <span className="text_red">{messageError}</span><br></br>
                <button className="btn btn_black" onClick={(e) => sendEmail(e)}>{ btnMsg }</button>
            </>
        ):(<></>)}
        
        {isSuccess ? (
            <div className="form_output success" onClick={resetForm}>
                <p className="paragraph">Message successfully sent! Keep an eye on your emails. I'll be in touch :) </p>
            </div>
        ):null}            
        {error ? (
            <div className="form_output error" onClick={resetFormResponseState}>
                <p className="paragraph">Something went wrong. Please try again.</p>
            </div>
        ):null} 
    </form>
  )
}

export default ContactForm