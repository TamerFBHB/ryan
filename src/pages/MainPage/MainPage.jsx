import React from 'react';
import "./MainPage.scss"
import Home from '../Home/Home';
import ShowPage from '../ShowPage/ShowPage';

const MainPage = () => {

    return (
        <div className="mainPage">
                <Home  className="homePage"/>
                <ShowPage  className="showPage"/>
            </div>
        );
}

export default MainPage;
