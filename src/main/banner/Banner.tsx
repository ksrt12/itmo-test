import bg from "./bg.svg";
import "./banner.scss";

function BannerCard(props: { [key: string]: string; }) {
    return (
        <div className="banner-card">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a className="click-more" href={props.href}>Подробнее</a>
        </div>
    );
}

function Banner() {

    const cards = [
        // {
        //     title: "Слайдер 2",
        //     text: "Программа предполагает углубленное изучение вопросов, связанных с проектированием, исследованием, производством и эксплуатацией мехатронных и робототехнических систем и комплексов.",
        //     href: "#"
        // },
        {
            title: "Началась подача документов",
            text: "Программа предполагает углубленное изучение вопросов, связанных с проектированием, исследованием, производством и эксплуатацией мехатронных и робототехнических систем и комплексов.",
            href: "#"
        }
    ];

    return (
        <div className="banner" style={{ backgroundImage: `url(${bg})` }}>
            <i className="bi bi-arrow-left-circle"></i>
            <div className="banner-cards">
                <div className="overflow">
                    {cards.map(card => <BannerCard key={card.title} {...card} />)}
                </div>
            </div>
            <i className="bi bi-arrow-right-circle"></i>
        </div>
    );

}

export default Banner;