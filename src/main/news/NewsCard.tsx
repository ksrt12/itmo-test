import parseHTML from 'html-react-parser';
import { Inews } from "./types";
import vk from "../../svg/vk.svg";

function NewsCard(props: Inews) {
    const date = new Date(props.date).toLocaleDateString("ru", {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).replace(" г.", "");

    return (
        <div className="news_card">
            <img className="small" src={props.image_small} alt="u" />
            <div className="addinfo">
                <p className="date">{date}</p>
                <img className="source" src={vk} alt="vk" />
            </div>
            <div className="text">{parseHTML(props.lead)}</div>
        </div>
    );

};

export default NewsCard;