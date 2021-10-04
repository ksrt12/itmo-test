import "./footer.scss";


function MakeLiA(props: { href: string, label: string; }) {
    return <li><a href={props.href}>{props.label}</a></li>;
}

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

                <ul className="itmo-links">
                    {links.map(link => <MakeLiA key={link.label} {...link} />)}
                </ul>


                <ul className="itmo-links">
                    {links.map(link => <MakeLiA key={link.label} {...link} />)}
                </ul>


            </div>
            <div className="botton-block">
                <a href="#">Политика по обработке Персональных данных</a>
                <a href="https://itmo.ru/images/pages/79/Pravila_ispolzovanija_informacii.pdf">Правила использования информации в доменной зоне ifmo.ru</a>
            </div>
        </footer>
    );
}

export default Footer;