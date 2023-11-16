'use client'
import React from 'react'
import Image from 'next/image'
import './skills.scss'
import skillData from './skillData'

function Skills() {
    return (
        <div className="skills" id='skills'>
            <div className="content">
                <div className="heading">
                    <h1>Skills</h1>
                </div>
                <div className="line">
                    <div></div>
                </div>
                <div className='text'>
                    <h2 className="paragraph"> Here you will find more information about me, what I do, and my current skills
                        mostly in terms of programming and technology
                    </h2>
                </div>
                <div className='skill-box'>
                    {skillData.map((item) => {
                        return (
                            <div key={item.id} className='box'>
                            <div className='box-content'>
                                <div>
                                    <Image className='img' src={item.img}alt='/' />
                                </div>
                                <div >
                                    <h3 className='name'>{item.name}</h3>
                                </div>
                            </div>
                        </div>
                    )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills