import "./index.css";
import logo from "./logo.svg";

function Links() {
    return (
        <div className="links">
            <p>О лаборатории</p>
            <p>Учебная деятельность</p>
            <p>Научная деятельность</p>
            <p>Новости</p>
        </div>
    );
}

function Header() {

    return (
        <div className="header">
            <div className="logo">
                <img width="331" height="36" src={logo} alt="logo" />
            </div>
            <div className="head">
                <div className="hh">
                    <p><strong>Лаборатория робототехники</strong></p>
                </div>
                <Links />
            </div>
        </div>
    );

}

export default Header;