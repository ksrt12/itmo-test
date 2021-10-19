import { Iresults } from "../main/news/news";

function loadData(cardsNum: number, setItems: React.Dispatch<React.SetStateAction<Iresults>>) {
    fetch("https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=" + cardsNum)
        .then(res => res.json())
        .then(result => setItems(result));
}

function createDate(date: string) {
    return new Date(date).toLocaleDateString("ru", {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).replace(" г.", "");
}

export { loadData, createDate };