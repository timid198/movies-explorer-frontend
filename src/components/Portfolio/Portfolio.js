import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
                <h4 className="portfolio-title">Портфолио</h4>
                <ul className="portfolio-links">
                    <li className="portfolio-project">
                        <p className="portfolio-app">Статичный сайт</p>
                        <a href="https://timid198.github.io/how-to-learn/index.html" className="portfolio-link"><div className="project-icon"></div></a>
                    </li>
                    <li className="portfolio-project">
                        <p className="portfolio-app">Адаптивный сайт</p>
                        <a href="https://timid198.github.io/russian-travel/index.html" className="portfolio-link"><div className="project-icon"></div></a>
                    </li>
                    <li className="portfolio-project">
                        <p className="portfolio-app">Одностраничное приложение</p>
                        <a href="http://azannik.nomoredomains.rocks/signin" className="portfolio-link"><div className="project-icon"></div></a>
                    </li>
                </ul>
            </div>
    )
}

export default Portfolio;