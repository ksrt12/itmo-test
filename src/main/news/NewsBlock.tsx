import { useEffect, useState } from "react";
import emptyNews, { Iresults } from "./news";
import { loadData } from "../../common/utils";
import NewsCard from "./NewsCard";
import "./news.scss";

const NewsBlock = () => {
    const cardsNum = 6;
    const [items, setItems] = useState({} as Iresults);

    const empty = [];
    for (let i = 0; i < cardsNum; i++) {
        empty.push(<NewsCard key={i} {...emptyNews} />);
    }

    useEffect(() => loadData(cardsNum, setItems), []);

    return (
        <div className="container news">
            <h2>Новости и события</h2>
            <div className="cards">
                {Object.keys(items).length ?
                    items.news.map(item => <NewsCard key={item.id} {...item} />)
                    : empty
                }
            </div>
        </div>
    );
};

export default NewsBlock;