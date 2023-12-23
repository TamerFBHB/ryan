import React from 'react';
import "./Resume.scss"

const Resume = ({state, VResume}) => {
    return (
        <div ref={VResume} className={`resumes ${state === 2? "open" :"close"} `}>
            
        </div>
    );
}

export default Resume;
