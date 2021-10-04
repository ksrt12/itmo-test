import "./header.scss";
import logo from "../svg/logo.svg";

function makeMenuLink(title: string, href: string) {
    return <a href={href}>{title}</a>;
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
            <div className="logo">
                <img width="331" height="36" src={logo} alt="logo" />
            </div>
            <div className="head">
                <div className="head-name">
                    <strong><a href="#">Лаборатория робототехники</a></strong>
                </div>
                <div className="menu">
                    {menuLinks.map(item => makeMenuLink(item.title, item.href))}
                </div>
            </div>
        </div>
    );

}

export default Header;