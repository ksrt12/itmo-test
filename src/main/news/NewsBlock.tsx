import { useEffect, useState } from "react";
import { Iresults } from "./types";
import NewsCard from "./NewsCard";
import "./index.css";
import { NEWS } from "./news";

function NewsBlock() {
    const cardsNum = 6;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [items, setItems] = useState<Iresults>({
        category: 1,
        last_page: 1,
        news: [],
        page: 1,
        per_page: 1,
        total: 1
    });

    // useEffect(() => {
    //     fetch("https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=" + cardsNum)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setItems(result);
    //                 setIsLoaded(true);
    //             },
    //             (error) => {
    //                 setError(error);
    //                 setIsLoaded(true);
    //             }
    //         );
    // }, []);

    if (error) {
        console.error(error);
        return <div>Ошибка загрузки</div>;
    } else {
        return (
            <div className="container">
                <div className="row row-cols-3">
                    {isLoaded ?
                        NEWS.map(item => <NewsCard key={item.id} {...item} />)
                        : <div>Загрузка...</div>
                    }
                </div>
            </div>
        );
    }
};

export default NewsBlock;