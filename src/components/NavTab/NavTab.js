import React from 'react';
import './NavTab.css';

function NavTab() {
    return (
        <div className="navtab">
            <div className="navtab-menu">
            <a href="#point1" className="navtab-menu__point" >О проекте</a>
            <a href="#point2" className="navtab-menu__point" >Технологии</a>
            <a href="#point3" className="navtab-menu__point" >Студент</a>
            </div>
        </div>
    )
}

export default NavTab;