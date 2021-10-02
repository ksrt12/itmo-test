import parseHTML from 'html-react-parser';
import { Inews } from "./types";

function NewsCard(props: Inews) {
    const date = new Date(props.date).toLocaleDateString("ru", {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).replace(" г.", "");

    return (
        <div className="news_card">
            <img src={props.image_small} alt="u" />
            <p>{date}</p>
            {parseHTML(props.lead)}
        </div>
    );

};

export default NewsCard;