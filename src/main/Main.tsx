import Banner from "./banner/Banner";
import Contacts from "./contacts/Contacts";
import NewsBlock from "./news/NewsBlock";

function Main() {
    return (
        <div className="main">
            <Banner />
            <NewsBlock />
            <Contacts />
        </div>
    );
}

export default Main;