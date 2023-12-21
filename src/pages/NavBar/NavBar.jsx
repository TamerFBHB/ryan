import React from 'react';
import "./NavBar.scss"
import { TypeAnimation } from 'react-type-animation';
import DarkMode from '../../DarkMode/DarkMode';



const NavBar = () => {
    return (
        <div className='Bar'>
            <div className='sideBar-above'>
                <div className='menubar'>
                    <div className='one'></div>
                    <div className='two'></div>
                    <div className= "three" ></div>
                </div>

                <DarkMode />

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

            </div>
        </div>
    );
}

export default NavBar;
