import React from 'react';
import "./NavBarMobile.scss"
import { TypeAnimation } from 'react-type-animation';
import DarkMode from '../../DarkMode/DarkMode';
import { NavLink } from 'react-router-dom';
import { FaList, FaNewspaper, FaOpencart, FaRegFolderOpen, FaRegUser } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";


const NavBarMobil = ({scrollToSection , VAbout ,VResume}) => {
    return (
        <div className='Bar-mobile'>
        <div className='sideBar-above'>
            <div className='menu-mode'>
                <div className='menubar'>
                    <div className='one'></div>
                    <div className='two'></div>
                    <div className="three" ></div>
                </div>
                <DarkMode />
            </div>

            <div className='Bar-ryan'>
                <h1 >Olivia Ryan</h1>
                <h6>
                    <TypeAnimation
                        sequence={[
                            'Content Maneger',
                            1500,

                            'Marketing Manager',
                            1500,

                            'SEO Specialestnp',
                            1500,
                        ]}
                        wrapper="span"
                        speed={20}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h6>
            </div>
        </div>

        <div className='sideBar-down'>
            <ul>
                <li><NavLink onClick={()=>{scrollToSection(VAbout)}} >
                    <FaRegUser className='icon' />
                    about
                </NavLink></li>
                <li><NavLink  onClick={()=>{scrollToSection(VResume)}}>
                    <FaList className='icon' />
                    resume
                </NavLink></li>
                <li><NavLink >
                    <FaRegFolderOpen className='icon' />
                    projects
                </NavLink></li>
                <li ><NavLink>
                    <FaNewspaper className='icon' />
                    blog
                </NavLink></li>
                <li><NavLink>
                    <BsEnvelope className='icon' />
                    contact
                </NavLink></li>
                <li><NavLink>
                    <FaOpencart className='icon' />
                    products
                </NavLink></li>
            </ul>
        </div>
    </div>
    );
}

export default NavBarMobil;
