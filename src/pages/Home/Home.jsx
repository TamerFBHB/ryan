import React from 'react';
import "./Home.scss";
import avatar1 from "../../images/avatar1-1.jpg"
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import NavBar from '../NavBar/NavBar';

const Home = () => {
    return (
        <div className='AllHome' >           
            <NavBar />
            <div className='home'>
                <img src={avatar1} alt='' className='avatar1' />
                <div className='inform-ryan'>
                    <h1 >Olivia Ryan</h1>
                    <h6>
                        <TypeAnimation
                            sequence={[
                                'Content Maneger',
                                1500,

                                'Marketing Manager',
                                1500,

                                'SEO Specialest',
                                1500,
                            ]}
                            wrapper="span"
                            speed={20}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h6>
                    <div className='social'>
                        <FaLinkedinIn className='icon' />
                        <BsTwitterX className='icon' />
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className='Footer-home'>
                    <div>download cv</div>
                    <div>contact me</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
