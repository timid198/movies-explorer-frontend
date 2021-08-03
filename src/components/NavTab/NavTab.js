import React from 'react';
import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab() {
    return (
        <div className="navtab">
            <div className="navtab-menu">
            <Link to="/#point1" className="navtab-menu__point" >О проекте</Link>
            <Link to="/#point2" className="navtab-menu__point" >Технологии</Link>
            <Link to="/#point3" className="navtab-menu__point" >Студент</Link>
                </div>
        </div>
    )
}

export default NavTab;