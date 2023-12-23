import React from 'react';
import "./NavBar.scss"
import { TypeAnimation } from 'react-type-animation';
import DarkMode from '../../DarkMode/DarkMode';
import { NavLink } from 'react-router-dom';
import { FaList, FaNewspaper, FaOpencart, FaRegFolderOpen, FaRegUser } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

const NavBar = ({setstate}) => {
    return (
        <div className='Bar'>
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
                    <li onClick={()=>setstate(1)}><NavLink >
                        <FaRegUser className='icon' />
                        about
                    </NavLink></li>
                    <li onClick={()=>setstate(2)} ><NavLink >
                        <FaList className='icon' />
                        resume
                    </NavLink></li>
                    <li><NavLink onClick={()=>setstate(3)}>
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

export default NavBar;
