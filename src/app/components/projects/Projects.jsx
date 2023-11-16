'use client'
import React from 'react'
import Image from 'next/image'
import './projects.scss'
import projectsData from './projectsData'

function Projects() {
    return (
        <div className="projects" id='projects'>
            <div className="content">
                <div className="heading">
                    <h1>Projects</h1>
                </div>
                <div className="line">
                    <div></div>
                </div>
                <div className='text'>
                    <h2 className="paragraph"> Here you will find some of the personal and clients projects that I created</h2>
                </div>
                <div className="project-content">
                    {projectsData.map((item) => {
                        return (
                            <div key={item.id} className="project-row">
                                <div >
                                    <Image className='project-img' src={item.img} alt="" loading='lazy' />
                                </div>
                                <div className="description">
                                    <h1>{item.name}</h1>
                                    <p>{item.subText}</p>
                                    <div className='btn-s'>
                                        <a className='btn' href={item.GitHubLink}target='-blank'>GitHub</a>
                                        <a className='btn' href={item.LiveLink}  target='-blank'>Live</a>
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

export default Projects