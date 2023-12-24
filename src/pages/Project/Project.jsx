import React from 'react';
import "./Project.scss";

const Project = ({state,VProject}) => {
    return (
        <div ref={VProject} className={`ProjectPage ${state===3?"open" : "close"}`}>
            
        </div>
    );
}

export default Project;
