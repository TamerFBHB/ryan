import React from 'react';
import "./MainPage.scss"
import Home from '../Home/Home';

const MainPage = () => {
    return (
        <div className='mainPage'>
            <div className='container'>
                <Home />
            </div>
        </div>
    );
}

export default MainPage;
