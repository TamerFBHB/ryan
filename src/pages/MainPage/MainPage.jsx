import React from 'react';
import "./MainPage.scss"
import ShowPage from '../ShowPage/ShowPage';

const MainPage = () => {

    return (
        <div className="mainPage">
            <div className='container'>
                <ShowPage />
            </div>
        </div>
    );
}

export default MainPage;
