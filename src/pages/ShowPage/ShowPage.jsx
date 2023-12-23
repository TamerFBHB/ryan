import React, { useRef, useState } from 'react';
import About from "../About/About";
import "./ShowPage.scss"
import Resume from '../Resume/Resume';
import Home from '../Home/Home';

const ShowPage = () => {
    // to move between pages in large screen
    const [state, setstate] = useState(1);

    // to move between pages in medium & small screen

    const VAbout = useRef();
    const VResume = useRef();
    // const VProject = useRef()

    const scrollToSection = (Ref) => {
        Ref.current.scrollIntoView({
            behavior: "smooth", block: "start",
        })
    }

    return (
        <div className='showPage'>
            <div className='homePage'>
            <Home 
                scrollToSection={scrollToSection}
                VAbout={VAbout}
                VResume={VResume}
                setstate={setstate} />
        </div>

            <div className='informPage'>
                <About state={state} VAbout={VAbout} />
                
                <Resume state={state} VResume={VResume} />
            </div>
        </div>
    );
}

export default ShowPage;
