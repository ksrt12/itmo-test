import { DefPhone } from "../main/contacts/Contacts";
import "./footer.scss";
import logo from "./logo.svg";
import fb from "./fb.svg";
import vk from "./vk.svg";
import inst from "./inst.svg";
import twttr from "./twttr.svg";




function Footer() {

    const links = [
        { label: "Страница ректора", href: "#" },
        { label: "Институты и факультеты", href: "#" },
        { label: "Библиотека", href: "#" },
        { label: "Издания Университета", href: "#" },
        { label: "Приемная комиссия", href: "#" },
        { label: "Расписание занятий", href: "#" },
    ];
    return (
        <footer>
            <div className="top-block">
                <div className="copyright">
                    <img src={logo} alt="itmo" />
                    <p className="copy">Информация © 1993–2020  Университет ИТМО</p>
                    <p className="copy">Разработка © 2020 Управление по развитию<br />и поддержке портала</p>
                </div>

                <div className="links">
                    <div className="itmo-links">
                        {links.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}
                    </div>

                    <div className="itmo-links">
                        {links.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}
                    </div>
                </div>

                <div className="adress">
                    <div className="text">
                        <p className="copy">г. Санкт-Петербург, Кронверкский пр., 49, ауд. 333 </p>
                        <DefPhone className="copy" />
                        <p className="copy"> E-mail: <a href="mailto:job@corp.ifmo.ru">job@corp.ifmo.ru</a></p>
                    </div>

                    <div className="social">
                        <p>Мы в соцсетях</p>
                        <a href="https://vk.com/itmoru"><img src={vk} alt="" /></a>
                        <a href="https://instagram.com/itmoru"><img src={inst} alt="" /></a>
                        <a href="https://fb.com/itmoru"><img src={fb} alt="" /></a>
                        <a href="https://twitter.com/itmoru"><img src={twttr} alt="" /></a>
                    </div>

                </div>


            </div>
            <div className="botton-block">
                <a className="copy" href="#">Политика по обработке Персональных данных</a>
                <a className="copy" href="https://itmo.ru/images/pages/79/Pravila_ispolzovanija_informacii.pdf">Правила использования информации в доменной зоне ifmo.ru</a>
            </div>
        </footer>
    );
}

export default Footer;