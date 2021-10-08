import "./header.scss";
import logo from "../svg/logo.svg";
import en from "./en.svg";
import lab from "./lablogo.svg";

function makeMenuLink(title: string, href: string) {
    return <a key={title} href={href}>{title}</a>;
}

function Header() {

    const menuLinks = [
        { title: "О лаборатории", href: "#" },
        { title: "Учебная деятельность", href: "#" },
        { title: "Научная деятельность", href: "#" },
        { title: "Новости", href: "#" },
        { title: "Контакты", href: "#" },
    ];

    return (
        <div className="header">
            <div className="top">
                <img className="logo" src={logo} alt="logo" />
                <div className="language">
                    <p>En</p>
                    <img src={en} alt="en" />
                </div>

            </div>
            <div className="head">
                <div className="head-name">
                    <img src={lab} alt="Lab" />
                    <a href="#">Лаборатория робототехники</a>
                </div>
                <div className="menu">
                    {menuLinks.map(item => makeMenuLink(item.title, item.href))}
                </div>
            </div>
        </div>
    );

}

export default Header;