import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <div className="techs">
            <h2 id="point2" className="techs-title">Технологии</h2>
            <h3 className="techs-header">7 технологий</h3>
            <p className="techs-about">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs-technologys">
                <div className="techs-technology">HTML</div>
                <div className="techs-technology">CSS</div>
                <div className="techs-technology">JS</div>
                <div className="techs-technology">React</div>
                <div className="techs-technology">Git</div>
                <div className="techs-technology">Express.js</div>
                <div className="techs-technology">mongoDB</div>
            </div>
        </div>
    )
}

export default Techs;