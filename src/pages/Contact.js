import React, { useState } from 'react';
import './CSS/Contact.css'

const Contact = () => {

    const [values, setValues] = useState({
        name: '',
        email: '', 
        message: ''  
    })
    const [valid, setValid] = useState({
        nameValid: false,
        emailValid: false,
        messageValid: false,
    })
   
    const handleChange = (e) => {
        const {name, value} = e.target
        setValid(false)
        setValues({
            ...values,
            [name]: value   
        })
    }


    const onHandleSubmit = (e) => {
        e.preventDefault()
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/   

        if(!values.message.trim()) {
            setValid({...valid, messageValid: true})
        } else {
            if(values.name && regexEmail.test(values.email)) {
                alert('Success')
                console.log(values)
            }
        }

        if(!regexEmail.test(values.email)) {
            setValid({...valid, emailValid: true})
        } 
        if(!values.name.trim()) {
            setValid({...valid, nameValid: true})
        } 

    }





    return (
        <div className="contact">
            <div className="contact-img">
                <h1>Contact</h1>
            </div>
         <div className="container">
                <div className="contact-item">
                    <h2>Contact us</h2>
                    <div className="contact-item-content">
                        <p>44 Canal Center Plazza #200, Alexandria,</p>
                        <p>VA 22314, USA</p>
                    </div>
                    <div className="contact-item-content">
                        <h5>TEL: 1.555.836.6767</h5>
                        <h5>MAIL: bettaso@demolink.org</h5>
                    </div>
                    <div className="contact-item-content">
                        <h3>Want to join the team?</h3>
                        <span>Apply today</span>
                    </div>
                </div>
                <div className="contact-item">
                    <h2>Wordking hour</h2>
                    <div className="contact-time">
                        <p>Mo-Fr 11:00-00:00</p>
                        <p>Mo-Fr 11:00-00:00</p>
                    </div>
                    <div className="contact-item-content">
                        <h5>Call us at: </h5>
                        <p>555.329.0632</p>
                    </div>
                    <button className="contact-btn">
                        <span>Make an online reservation</span>
                    </button>
                </div>
                <div className="contact-item">
                    <h2>Get in touch</h2>
                    <div className="contact-item-info">
                        <p>Bettaso family Restaurant is situated at the very historical heart of Alexandria, VA. Our address is well known to locals as the most <br/> home-like, and delicious place in the city!</p>
                        <br/>
                        <p>Please contact us using the form on the page in regards to any questions you might have, or to make a booking with us</p>
                    </div>
                </div>
                <div className="contact-form">
                   <form onSubmit={onHandleSubmit}>
                        <div className="form-info">
                            <input className={valid.nameValid ? "mess-error" : ""}
                                type="text"
                                name="name" 
                                placeholder="Your name" 
                                value={values.name} 
                                onChange={handleChange}
                            />
                            {valid.nameValid ? <span>Please enter this field</span> : ''}
                            <input className={valid.emailValid ? "mess-error" : ""}
                                type="email"
                                name="email" 
                                placeholder="Email" 
                                value={values.email}     
                                onChange={handleChange}
                            />
                            {valid.emailValid ? <span>Check your email again</span> : ''}
                            <textarea className={valid.messageValid ? "input-message mess-error" : "input-message"} 
                                name="message" 
                                placeholder="Message" 
                                value={values.message} 
                                onChange={handleChange}
                            />
                            {valid.messageValid ? <span>Please enter this field</span> : ''}
                        </div>
                        <button type="submit" className="submit-btn">
                            <span>Submit</span>
                        </button>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;