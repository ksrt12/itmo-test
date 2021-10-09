import bg from "./bg.png";
import "./banner.scss";
import { useState } from "react";
import MyLink from "../../common/MyLink";

const BannerCard = (props: { [key: string]: string; }) => {
    return (
        <div className="banner-card" style={{ width: props.cardWidth }}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <MyLink className="click-more" href={props.href}>Подробнее</MyLink>
        </div>
    );
};

const Banner = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const cards = [
        {
            title: "Началась подача документов",
            text: "Программа предполагает углубленное изучение вопросов, связанных с проектированием, исследованием, производством и эксплуатацией мехатронных и робототехнических систем и комплексов.",
            href: "#"
        },
        {
            title: "Слайд 2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi magnam, neque libero autem optio, alias itaque, dolores porro corrupti quidem temporibus ipsam sed! Sequi eveniet modi earum quo voluptatem?",
            href: "#"
        },
        {
            title: "Слайд 3",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam quisquam a, qui sequi alias deleniti perspiciatis molestias voluptate inventore ex sapiente recusandae omnis eveniet veniam, earum impedit. Deleniti, ratione eaque?",
            href: "#"
        },
    ];
    const cardsNum = cards.length;
    const cardWidth = 100 / cardsNum;

    const changeCard = (next: boolean) => {
        let activeIndex = slideIndex;
        if (next) {
            activeIndex += 1;
            if (activeIndex === cardsNum) {
                activeIndex = 0;
            }
        } else {
            activeIndex -= 1;
            if (activeIndex < 0) {
                activeIndex = cardsNum - 1;
            }
        }
        setSlideIndex(activeIndex);
    };

    return (
        <div className="banner" style={{ backgroundImage: `url(${bg})` }}>
            <i className="bi bi-arrow-left-circle" onClick={() => changeCard(false)}></i>
            <div className="banner-cards">
                <div className="overflow" style={{ width: ` ${cardsNum * 100}%`, transform: `translateX(-${slideIndex * cardWidth}%)` }}>
                    {cards.map(card => <BannerCard key={card.title} cardWidth={`${cardWidth}%`} {...card} />)}
                </div>
            </div>
            <i className="bi bi-arrow-right-circle" onClick={() => changeCard(true)}></i>
        </div>
    );

};

export default Banner;