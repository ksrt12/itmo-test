import { useEffect, useState } from "react";
import { Iresults } from "./types";
import NewsCard from "./NewsCard";
import "./news.scss";
import emptyNews from "./news";

function NewsBlock() {
    const cardsNum = 6;

    const [isLoaded, setIsLoaded] = useState(true);
    const [items, setItems] = useState<Iresults>({
        category: 1,
        last_page: 1,
        news: [],
        page: 1,
        per_page: 1,
        total: 1
    });

    const empty = [];
    for (let i = 0; i < cardsNum; i++) {
        empty.push(<NewsCard key={i} {...emptyNews} />);
    }

    useEffect(() => {
        fetch("https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=" + cardsNum)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(false);
                }
            );
    }, []);


    return (
        <div className="container">
            <h2>Новости и события</h2>
            <div className="cards">
                {isLoaded ?
                    items.news.map(item => <NewsCard key={item.id} {...item} />)
                    : empty
                }
            </div>
        </div>
    );
};

export default NewsBlock;