'use client'
import React from 'react';
import './footer.scss'
import {
    FaFacebookF,
    FaGithub,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

function Footer() {
    return (

        <div className='footer'>
            <a className='title' href='/'>Zeeshan Ahmed</a>
            <h1 className='heading'>Social Media</h1>
            <div className="content">
                <div className="socialIcon">
                    <a className="icon" href='https://www.facebook.com/profile.php?id=100043989196385'>
                        <FaFacebookF href='https://www.linkedin.com/in/zeeshan-ahmed-smit'/>
                    </a>
                    <a className="icon" href='https://github.com/zeeshan-ahmed-smit'>
                        <FaGithub />
                    </a>
                    <a className="icon" href='https://twitter.com/z335h4nahmad'>
                        <FaTwitter />
                    </a>
                    <a className="icon" href='https://www.linkedin.com/in/zeeshan-ahmed-smit'>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className='end-text'>© 2023 Zeeshan Afridi</div>
        </div>

    )
}

export default Footer;