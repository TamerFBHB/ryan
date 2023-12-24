import React from 'react';
import "./NavBar.scss"
import { TypeAnimation } from 'react-type-animation';
import DarkMode from '../../DarkMode/DarkMode';
import { NavLink } from 'react-router-dom';
import { FaList, FaNewspaper, FaOpencart, FaRegFolderOpen, FaRegUser } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

const NavBar = ({setstate ,state}) => {
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
                    <li onClick={()=>setstate(1)}><NavLink  className={`${state=== 1? "active" : "noActive"}`}>
                        <FaRegUser className='icon' />
                        about
                    </NavLink></li>
                    <li onClick={()=>setstate(2)} ><NavLink  className={`${state===2?"active":"noActive" }`} >
                        <FaList className='icon' />
                        resume
                    </NavLink></li>
                    <li onClick={()=>setstate(3)} ><NavLink  className={`${state===3?"active":"noActive" }`} >
                        <FaRegFolderOpen className='icon' />
                        projects
                    </NavLink></li>
                    <li onClick={()=>setstate(4)} ><NavLink  className={`${state===4?"active":"noActive" }`} >
                        <FaNewspaper className='icon' />
                        blog
                    </NavLink></li>
                    <li onClick={()=>setstate(5)} ><NavLink  className={`${state===5?"active":"noActive" }`} >
                        <BsEnvelope className='icon' />
                        contact
                    </NavLink></li>
                    <li onClick={()=>setstate(6)} ><NavLink  className={`${state===6?"active":"noActive" }`} >
                        <FaOpencart className='icon' />
                        products
                    </NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
