import parseHTML from 'html-react-parser';
import { Inews } from "./types";
import vk from "./vk.svg";

function NewsCard(props: Inews) {
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
                <a className="source" target="_blank" rel="noreferrer" href={props.url}>
                    <img className="small" src={props.image_small} alt="u" />
                </a>
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