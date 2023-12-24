import React, { useRef, useState } from 'react';
import About from "../About/About";
import "./ShowPage.scss"
import Resume from '../Resume/Resume';
import Home from '../Home/Home';
import Project from '../Project/Project';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Product from '../Product/Product';

const ShowPage = () => {
    // to move between pages in large screen
    const [state, setstate] = useState(1);

    // to move between pages in medium & small screen

    const VAbout = useRef();
    const VResume = useRef();
    const VProject = useRef();
    const VBlog = useRef();
    const VContact =useRef();
    const VProduct =useRef();
    

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
                VAbout={VAbout} VResume={VResume}
                VProject={VProject} VBlog={VBlog}
                VContact={VContact} VProduct={VProduct} 
                setstate={setstate} state={state}/>
        </div>

            <div className='informPage'>
                <About state={state} VAbout={VAbout} />
                
                <Resume state={state} VResume={VResume} />

                <Project state={state} VProject={VProject} />

                <Blog state={state} VBlog={VBlog} />

                <Contact state={state} VContact={VContact} />

                <Product state={state} VProduct={VProduct} />
            </div>
        </div>
    );
}

export default ShowPage;
