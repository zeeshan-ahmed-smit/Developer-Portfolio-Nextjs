'use client'
import React from 'react'
import Image from 'next/image'
import './about.scss'
import AboutImg from '../../assets/AboutImg.png'

function About() {
    return (
        <div className="about" id='about'>
            <div className="content">
                <div className="heading">
                    <h1>About me</h1>
                </div>
                <div className="line">
                    <div></div>
                </div>
                <div className="info">
                    <div className="info-sec-1">
                        <h1 className="title">Get to know me!</h1>
                        <p className="details-para">
                            I'm a <strong>Frontend Web Developer</strong> building the
                            Front-end of Websites and Web Applications that leads to the
                            success of the overall product. Check out some of my work in the
                            <strong> Projects </strong> section.
                        </p>
                        <p className="details-para">
                            I also like sharing content related to the stuff that I have
                            learned over the years in <strong>Web Development</strong> so it
                            can help other people of the Dev Community. Feel free to Connect
                            or Follow me on my
                            <a href="https://www.linkedin.com/in/zeeshan-ahmed-smit/" target="_blank"> Linkedin </a>
                            where I post useful content related to Web Development and
                            Programming
                        </p>
                        <p className="details-para">
                            I'm open to <strong>Job</strong> opportunities where I can
                            contribute, learn and grow. If you have a good opportunity that
                            matches my skills and experience then don't hesitate to
                            <strong> contact </strong> me.
                        </p>
                        <button className="contact-btn">Contact</button>
                    </div>
                    <div className="info-sec-2">
                        <Image src={AboutImg} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About