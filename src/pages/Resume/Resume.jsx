import React from 'react';
import "./Resume.scss";
import { PiBankDuotone } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";
import upwork from "../../images/upwork.png"
import envato from "../../images/envato.svg"
import freelancer from "../../images/freelancer.png"
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';


const Resume = ({ state, VResume }) => {

    return (
        <div ref={VResume} className={`resumes ${state === 2 ? "open" : "close"} `}>
            <div className='my-resume'>
                <h3><span>R</span>esume</h3>
                <div className='CV'>
                    <div className='section '>
                        <div className="title ">
                            <div className='bg-icon'>
                                <FaBriefcase className='icon' />
                            </div>
                            <h3>experience</h3>
                        </div>
                        <div className='body-section'>
                            <div className='date1'>
                                <p>2013 - Present</p>
                            </div>
                            <div className='tradeMark'>
                                <h2 className=''><span>ceo</span> director</h2>
                                <img src={envato} alt='' />
                            </div>
                            <p className='inc'>Envato inc.</p>
                            <p>Collaborate with creative and development teams on the execution of ideas.</p>
                        </div>

                        <div className='body-section'>
                            <div className='date'>
                                <p>2011 -2012</p>
                            </div>
                            <div className='tradeMark'>
                                <h4 className=''>Marketing Manager</h4>
                                <img src={upwork} alt='' />
                            </div>
                            <p className='inc'>Upwork Inc.</p>
                            <p>Monitored technical aspects of the marketing data for projects.</p>
                        </div>

                        <div className='body-section'>
                            <div className='date'>
                                <p>2009-2010</p>
                            </div>
                            <div className='tradeMark'>
                                <h4 className=''>Marketing Manager</h4>
                                <img src={freelancer} alt='' />
                            </div>
                            <p className='inc'>Freelancer Inc.</p>
                            <p>Optimize your website and apps performance using latest technology.</p>
                        </div>

                    </div>

                    
                    <div className='section'>
                        <div className="title">
                            <div className='bg-icon'>
                                <PiBankDuotone className='icon' />
                            </div>
                            <h3>education</h3>
                        </div>

                        <div className='body-section'>
                            <div className='date'>
                                <p>2006-2008</p>
                            </div>
                            <div className='tradeMark'>
                                <h4 className=''>University of Florida</h4>
                            </div>
                            <p className='inc'>Gainesville</p>
                            <p>The University of Florida is a public land-grant research university in Gainesville.</p>
                            <NavLink className="certificate ">
                                CERTIFICATE 
                                <IoIosArrowForward className='icon-certificate' />
                            </NavLink>
                        </div>

                        <div className='body-section'>
                            <div className='date'>
                                <p>2006-2008</p>
                            </div>
                            <div className='tradeMark'>
                                <h4 className=''>SEO Courses</h4>
                            </div>
                            <p className='inc'>New York</p>
                            <p>Certification course, all things SEO, including website optimization.</p>
                            <NavLink className="certificate ">
                                CERTIFICATE 
                                <IoIosArrowForward className='icon-certificate ' />
                            </NavLink>
                        </div>


                        <div className='body-section'>
                            <div className='date'>
                                <p>2005-2006</p>
                            </div>
                            <div className='tradeMark'>
                                <h4 className=''>Marketing Courses</h4>
                            </div>
                            <p className='inc'>London</p>
                            <p>Improving website to increase visibility on search engines such Google, Bing.</p>
                            <NavLink className="certificate ">
                                CERTIFICATE 
                                <IoIosArrowForward className='icon-certificate' />
                            </NavLink>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
}

export default Resume;
