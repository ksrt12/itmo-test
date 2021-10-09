import { useState } from "react";
import "./subjects.scss";

function Subj(name: string, text: string) {
    const [isOpen, setOpen] = useState(false);
    const [showText, setShowText] = useState("none");
    const [rotateDeg, setRotateDeg] = useState("0deg");
    const [color, setColor] = useState("#3951e7");

    const defs = [
        {
            setfunc: setShowText,
            vals: ["none", "block"]
        },
        {
            setfunc: setRotateDeg,
            vals: ["0deg", "180deg"]
        },
        {
            setfunc: setColor,
            vals: ["#3951e7", "#832ab9"]
        },
    ];

    const show = () => {
        const isOpenNum = Number(!isOpen);
        defs.forEach(i => {
            i.setfunc(i.vals[isOpenNum]);
        });
        setOpen(!isOpen);
    };

    return (
        <div key={name} className="subj">
            <div onClick={show} className="head">
                <div>{name}</div>
                <i className="bi bi-arrow-down-short" style={{ transform: `rotate(${rotateDeg})`, color: color }}></i>
            </div>
            <div className="text" style={{ display: showText }}>{text}</div>
        </div >
    );
}

function Subjects() {
    const subjs = [
        {
            name: "Алгоритмы",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam esse quod natus veniam impedit incidunt iste, aliquam architecto dolore optio."
        },
        {
            name: "Мехатроника",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorum perspiciatis laudantium repellat aliquid adipisci nostrum. Modi aliquam dolorem aliquid quos quasi commodi in molestiae saepe consectetur incidunt, fugiat obcaecati explicabo? Quo excepturi iste porro sapiente ullam debitis dolores neque!"
        },
        {
            name: "Силовые машины",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur aliquam fugiat tempora quibusdam non ipsa iure, magnam obcaecati culpa autem dolores voluptatibus ipsum perspiciatis possimus enim mollitia quasi! Blanditiis quam nobis tempore quisquam rem, excepturi aperiam a ipsam rerum, voluptatibus natus maxime eum nam vitae eveniet quod sed molestias."
        },
        {
            name: "Фотоника и радиоэлектроника",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam porro at quod delectus obcaecati possimus, eaque molestias odit nemo fugiat, non consequatur soluta saepe sunt ex cupiditate rerum a odio harum expedita aliquid iure quo animi! Veniam corporis atque ipsam eos dolor, sapiente distinctio, tempore neque, veritatis quidem expedita? Et veritatis accusamus tempore cum unde quibusdam ipsa labore sit delectus doloremque nulla ab accusantium, aut repellendus quisquam ad nam cupiditate dignissimos? Quod nulla eos libero minima amet voluptate tenetur, pariatur mollitia repellat in beatae sapiente quas quos aliquam aliquid ad laboriosam sed hic soluta, tempore illum fugiat repellendus. Esse, quia!"
        },
        {
            name: "Робототехника",
            text: "Содержание дисциплины охватывает круг вопросов, связанных с элементной базой систем автоматического управления и, в частности, измерительными преобразователями информации. Рассматриваются вопросы, связанные с конструктивными и схемными решениями современных измерительных преобразователей параметрического и генераторного типа, их основные характеристики и требования, предъявляемые к ним, как элементам систем автоматики."
        },
    ];


    return (
        <div className="container subjects">
            <h3>Дисциплины</h3>
            {subjs.map(item => Subj(item.name, item.text))}
        </div>
    );
}

export default Subjects;