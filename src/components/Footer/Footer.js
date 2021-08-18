import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <h5 className="footer-title">Учебный проект Яндекс.Практикум х BeatFilm.</h5>
            <div className="footer-content">
                <p className="footer-copyright">© {new Date().getFullYear()}</p>
                <ul className="footer-links">
                    <li className="footer-link__name"><a href="https://praktikum.yandex.ru/" className="footer-link">Яндекс.Практикум</a></li>
                    <li className="footer-link__name"><a href="https://github.com/" className="footer-link">Github</a></li>
                    <li className="footer-link__name"><a href="https://www.facebook.com/" className="footer-link">Facebook</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;