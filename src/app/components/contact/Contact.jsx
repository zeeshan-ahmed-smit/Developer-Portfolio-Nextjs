'use client'
import React from 'react'
import './contact.scss'

function Contact() {
    return (
        <div className="contact" id='contact'>
            <div className="content">
                <div className="heading">
                    <h1>Contact</h1>
                </div>
                <div className="line">
                    <div></div>
                </div>
                <div className='text'>
                    <h2 className="paragraph"> Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h2>
                </div>
                <div className="contact-form">
                    <div className="form">
                        <form action="#" method='post'>
                            <div className="contact-form-field">
                                <label htmlFor="name">Name</label>
                                <input type="text" required placeholder='Enter your Name' name='name'/>
                            </div>
                            <div className="contact-form-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" required placeholder='Enter your Email' name='email'/>
                            </div>
                            <div className="contact-form-field">
                                <label htmlFor="message">Message</label>
                                <textarea required placeholder='Enter your Message' name='message'/>
                            </div>
                            <button className="btn">Submit</button>                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact