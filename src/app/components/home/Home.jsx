'use client'
import React from 'react'
import './home.scss'

function Home() {
    return (
        <div id='home' className='home'>
            <div className="content-wrapper">
                <div className="content">
                    <p>
                        LET&#39;S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className='heading'>
                        Hi, I&#39;m <span style={{ color: '#5651e5' }}> Zeeshan Ahmed</span>
                    </h1>
                    <h1 className='heading'>A Front-End Web Developer</h1>
                    <p className='sub-text'>
                        I’m focused on building responsive front-end web applications
                        integrating back-end technologies.
                    </p>
                </div>
                <div className="scroll">
                    <div className="mouse"></div>
                </div>
            </div>
        </div>
    )
}

export default Home