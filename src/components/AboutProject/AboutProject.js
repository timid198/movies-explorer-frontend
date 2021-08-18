import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <div className="about-project">
            <h2 id="point1" className="about-project__title">О проекте</h2>
            <div className="about-project__content">
                <div className="about-project__stages">
                    <h4 className="about-project__stages-title">Дипломный проект включал 5 этапов</h4>
                    <p className="about-project__stages-content">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__weeks">
                    <h4 className="about-project__weeks-title">На выполнение диплома ушло 5 недель</h4>
                    <p className="about-project__weeks-content">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__infografic">
                <div className="about-project__infografic-backend">1 неделя</div>
                <div className="about-project__infografic-frontend">4 недели</div>
            </div>
            <div className="about-project__infografic-name">
                <p className="about-project__infografic-name-backend">Back-end</p>
                <p className="about-project__infografic-name-frontend">Front-end</p>
            </div>
        </div>
    )
}

export default AboutProject;