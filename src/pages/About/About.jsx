import React from 'react';
import "./About.scss"
import { FaRegBuilding, FaChartLine } from "react-icons/fa";

const About = () => {
    return (
        <div className='about'>
            <div className='about-me'>
                <h3><span>A</span>bout Me</h3>
                <div className='about-information'>
                    <div className='hello'>
                        <h4>Hello! I'm Olivia Ryan.</h4>
                        <p>Marketing Manager & SEO Specialist from USA, California. I have rich experience in advertising, user experience, social media trends, market research, and data analytics.</p>
                    </div>
                    <div className='about-inform'>
                        <ul>
                            <li>
                                <h5>Age:</h5>
                                <h5>24</h5>
                            </li>

                            <li>
                                <h5>Residence:</h5>
                                <h5>USA</h5>
                            </li>

                            <li>
                                <h5>Freelance:</h5>
                                <h5>Available</h5>
                            </li>

                            <li>
                                <h5>Address:</h5>
                                <h5>California, USA</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='services'>
                <h3><span>M</span>y Services</h3>
                <div className='my-service'>
                    <div className='row'>
                        <div className='box'>
                            <div className='bg-icon'>
                                <FaChartLine className='icon' />
                            </div>
                            <h4>Implementing Strategy</h4>
                            <p>You help implement this strategy via prioritized activities on the marketing roadmap.</p>
                        </div>
                        <div className='box'>
                            <div className='bg-icon'>
                                <FaRegBuilding className='icon' />
                            </div>
                            <h4>Creating Campaigns</h4>
                            <p>Marketing managers own the process of building marketing programs and campaigns.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='box'>
                            <div className='bg-icon'>
                                <FaChartLine className='icon' />
                            </div>
                            <h4>Supporting Sales</h4>
                            <p>Marketing managers often support the sales process along the buyer's journey more effectively.</p>
                        </div>
                        <div className='box'>
                            <div className='bg-icon'>
                                <FaRegBuilding className='icon' />
                            </div>
                            <h4>Analyzing Marketing Data</h4>
                            <p>Marketing managers track, analyze, and report on the impact of all activities and share industry trends.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
