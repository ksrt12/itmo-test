import parseHTML from 'html-react-parser';
import MyLink from "../../common/MyLink";
import { Inews } from "./news";
import vk from "./vk.svg";

const NewsCard = (props: Inews) => {
    if (props.id === 0) {
        return <div className="news_card empty"></div>;
    } else {
        const date = new Date(props.date).toLocaleDateString("ru", {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).replace(" г.", "");

        return (
            <div className="news_card">
                <MyLink className="source" href={props.url}>
                    <img className="small" src={props.image_small} alt="u" />
                </MyLink>
                <div className="newscontent addinfo">
                    <p className="date">{date}</p>
                    <img src={vk} alt="vk" />
                </div>
                <div className="newscontent text">{parseHTML(props.lead)}</div>
            </div>
        );
    }
};

export default NewsCard;