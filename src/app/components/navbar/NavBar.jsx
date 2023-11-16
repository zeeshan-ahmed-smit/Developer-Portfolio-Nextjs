'use client'
import React, { useState,useEffect } from 'react';
import './navBar.scss';
import Hamburger from 'hamburger-react';

function NavBar() {
    const [isOpen, setOpen] = useState(false);
    const [showMenu, setShowMenu] = useState('');
    const [show, setShow] = useState("");
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const scrollNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY) {
                setShow('hide')
            } else {
                setShow('show')
            }
            setLastScrollY(window.scrollY)
        } else {
            setShow('top')
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollNavbar);
        return () => { window.removeEventListener("scroll", scrollNavbar); }
    }, [lastScrollY]);



    return (
        <div className={`header ${show}`}>
            <div className="nav">
                <div className="title">Zeeshan Afridi</div>
                <ul className='items'>
                    <li ><a className='listItem' href='/'>Home</a></li>
                    <li ><a className='listItem' href='/#about'>About</a></li>
                    <li ><a className='listItem' href='/#skills'>Skills</a></li>
                    <li ><a className='listItem' href='/#projects'>Projects</a></li>
                    <li ><a className='listItem' href='/#contact'>Contact</a></li>
                </ul>
                <div className='menu'>
                    <Hamburger size={30} color='#000' duration={0.4} easing="ease-in-out" toggled={isOpen} toggle={setOpen} onToggle={toggled => {
                        if (toggled) {
                            setShowMenu('show')
                        } else {
                            setShowMenu('')
                        }
                    }} />
                </div>
            </div>

            <div className='mobile-view'>
                <div className={`listItems ${showMenu}`}>
                    <ul className='items'>
                        <li ><a className='listItem' onClick={()=>{
                            setShowMenu('')
                            setOpen(false)
                    
                    }} href='/'>Home</a></li>
                        <li ><a className='listItem' onClick={()=>{
                            setShowMenu('')
                            setOpen(false)
                    
                    }} href='/#about'>About</a></li>
                        <li ><a className='listItem' onClick={()=>{
                            setShowMenu('')
                            setOpen(false)
                    
                    }} href='/#skills'>Skills</a></li>
                        <li ><a className='listItem' onClick={()=>{
                            setShowMenu('')
                            setOpen(false)
                    
                    }} href='/#projects'>Projects</a></li>
                        <li ><a className='listItem' onClick={()=>{
                            setShowMenu('')
                            setOpen(false)
                    
                    }} href='/#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;