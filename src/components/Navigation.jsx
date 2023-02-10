import React from 'react';
import {RxHamburgerMenu} from 'react-icons/rx';
import {MdCancelPresentation} from 'react-icons/md';
import { useState } from 'react';

const Navigation = () => {
    const [currentLink, setCurrentLink]=useState(0);
    const [hamburgerOpen, setHamburgerOpen]=useState(false);
    
    const navLinks = ["Accueil", "A propos de moi", "Naturopathie", "Biorésonance", "Physionutrition", "Massage Amma", "Tarifs", "Contact", "Avis"]
    
    const handleActiveLink = (index)=> {
        setCurrentLink(index);
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <nav>
            <div className='hamburger' onClick={()=> setHamburgerOpen(!hamburgerOpen)}>
                {
                    hamburgerOpen ? <MdCancelPresentation className={hamburgerOpen ? 'cancel-hamburger' :''}/> 
                    : <RxHamburgerMenu/>
                }
            </div>
            <ul className={hamburgerOpen ? 'mobile-menu' : ''}>
                {navLinks.map((link, index)=>(
                    <li
                        key={index}
                        onClick={()=> handleActiveLink(index)}
                        className={currentLink === index ? 'active' : ''}
                    >
                        <a href={'#'+link}>{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;