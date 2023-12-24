import React from 'react';
import "./Contact.scss"

const Contact = ({state , VContact}) => {
    return (
        <div ref={VContact} className={`contact ${state===5?"open" : "close"}`}>
            
        </div>
    );
}

export default Contact;
