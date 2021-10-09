import "./header.scss";
import logo from "./logo.svg";
import en from "./en.svg";
import lab from "./lablogo.svg";
import { Nav, Navbar } from "react-bootstrap";
import MyLink from "../common/MyLink";

const Header = () => {

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
                <MyLink href="https://itmo.ru">
                    <img className="logo" src={logo} alt="logo" />
                </MyLink>
                <div className="language">
                    <p>En</p>
                    <img src={en} alt="en" />
                </div>
            </div>
            <Navbar collapseOnSelect expand="xl" >
                <div className="nowrap-div">
                    <Navbar.Brand href="#">
                        <img src={lab} alt="Lab" />
                        Лаборатория робототехники
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        {menuLinks.map(item => <Nav.Link key={item.title} href={item.href}>{item.title}</Nav.Link>)}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );

};

export default Header;