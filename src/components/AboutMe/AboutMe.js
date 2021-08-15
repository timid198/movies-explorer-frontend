import React from 'react';
import './AboutMe.css';
import myFoto from '../../images/me-foto.jpg';

function AboutMe() {
    return (
        <div className="about-me">
            <h2 id="point3" className="about-me__title">Студент</h2>

            <div className="about-me__card">
                <div className="about-me__profile">
                    <h3 className="about-me__name">Андрей</h3>
                    <p className="about-me__special">Фронтенд-разработчик, 37 лет</p>
                    <article className="about-me__info">После окончания университета работал в производственной сфере.
                    Программирование было моей давней целью, очень хотелось узнать, как это может всё так работать и в чём его сила. 
                    После начала обучения на курсе Я.Практикум почувствовал удовлетворение от того, как это можно реализовать и что всё не настолько сложно. 
                    Перечитываю всю дополнительную информацию, которую оставляют на курсе и на вебинарах. Читаю статьи на habr, learnJS и стековерфлок.
                    Я люблю добиваться поставленных целей, ответственно отношусь к поставленным задачам. 

                    В свободное время я занимаюсь спортом: бег, велосипед, бодибилдинг.
                    </article>
                    <ul className="about-me__social-links">
                        <li className="about-me__social-cell"><a href="https://www.facebook.com/profile.php?id=100001576637718" className="about-me__social-link">Facebook</a></li>
                        <li className="about-me__social-cell"><a href="https://github.com/timid198" className="about-me__social-link">GitHub</a></li>
                    </ul>
                </div>  
                <img src={myFoto} alt="Моё фото" className="about-me__foto" />
            </div>
            
        </div>
    )
}

export default AboutMe;