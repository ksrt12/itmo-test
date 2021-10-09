import Banner from "./banner/Banner";
import Contacts from "./contacts/Contacts";
import NewsBlock from "./news/NewsBlock";
import Subjects from "./subjects/Subjects";

const Main = () => {
    return (
        <div className="main">
            <Banner />
            <NewsBlock />
            <Subjects />
            <Contacts />
        </div>
    );
};

export default Main;