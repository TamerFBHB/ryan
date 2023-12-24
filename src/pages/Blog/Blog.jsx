import React from 'react';
import "./Blog.scss"

const Blog = ({state , VBlog}) => {
    return (
        <div ref={VBlog} className={`blog ${state===4?"open" : "close"}`}>
            
        </div>
    );
}

export default Blog;
