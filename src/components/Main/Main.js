import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';


function Main({handleButtonOpenClick, headerBackgrounColor, loggedIn}) {
    console.log(loggedIn);
    return(
        <div className="Main">
            <Header handleButtonOpenClick={handleButtonOpenClick} headerBackgrounColor={headerBackgrounColor} loggedIn={loggedIn} />
            <div className="Main-content">
                <Promo />
                <NavTab />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </div>
            <Footer />
        </div>
    )
}

export default Main;